import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Paper,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Radio,
} from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { useState } from "react";
import type { Person, PersonStatus } from "./Contracts";
import { UpdatePersonForm } from "./UpdatePersonForm";

interface PersonTableProps {
  people: Person[];
}

const statusColorMap: Record<PersonStatus, "success" | "warning" | "error"> = {
  VALIDATED: "success",
  FILLED: "warning",
  NOT_FILLED: "error",
};

const statusTextMap: Record<PersonStatus, string> = {
  VALIDATED: "Ativa",
  FILLED: "Inativa",
  NOT_FILLED: "Bloqueada",
};

export function PersonTable({ people }: PersonTableProps) {
  const [open, setOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleOpen = (person: Person) => {
    setSelectedPerson(person);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPerson(null);
  };

  const handleSelect = (person: Person) => {
    setSelectedId(person.id === selectedId ? null : person.id);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ overflow: "auto", maxWidth: "100%" }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Dependente</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Ações</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {people.map((person) => (
              <TableRow key={person.id}>
                <TableCell>{person.id}</TableCell>
                <TableCell align="center">
                  <Typography variant="body2" fontWeight="bold">
                    {person.name}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Chip
                    label={person.dependent ? "Sim" : "Não"}
                    color={person.dependent ? "warning" : "default"}
                    variant="outlined"
                  />
                </TableCell>
                <TableCell align="center">
                  <Chip
                    label={statusTextMap[person.status]}
                    color={statusColorMap[person.status]}
                  />
                </TableCell>
                <TableCell align="center">
                  {person.editable && (
                    <IconButton
                      size="small"
                      onClick={() => handleOpen(person)}
                      aria-label="Atualizar"
                    >
                      <ArrowOutwardRoundedIcon />
                    </IconButton>
                  )}
                </TableCell>
                 <TableCell>
                  <Radio
                    checked={selectedId === person.id}
                    onChange={() => handleSelect(person)}
                    value={person.id}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Atualizar Pessoa</DialogTitle>
        <DialogContent>
          {selectedPerson && <UpdatePersonForm person={selectedPerson} />}
        </DialogContent>
      </Dialog>
    </>
  );
}
