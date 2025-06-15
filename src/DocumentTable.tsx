import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Paper,
  Link,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useState } from "react";
import { UpdateDocumentForm } from "./UpdateDocumentForm";
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import type { DocumentStatus, Document } from "./Contracts";

interface DocumentTableProps {
  documents: Document[];
}

const statusColorMap: Record<DocumentStatus, "success" | "warning"> = {
  VALIDATED: "success",
  FILLED: "warning",
};

const statusTextMap: Record<DocumentStatus, string> = {
  VALIDATED: "Validado",
  FILLED: "Preenchido",
};

export function DocumentTable({ documents }: DocumentTableProps) {
  const [open, setOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);

  const handleOpen = (doc: Document) => {
    setSelectedDoc(doc);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedDoc(null);
  };

  // Busca documento em duplicidade
  const nameCount = documents.reduce<Record<string, number>>((acc, doc) => {
    acc[doc.name] = (acc[doc.name] || 0) + 1;
    return acc;
  }, {});

  return (
    <>
      <TableContainer component={Paper} sx={{overflow: "auto", maxWidth: "100%"}}>
        <Table size="small">
          <TableHead>

            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell  align="center">Nome</TableCell>
              <TableCell  align="center">URL imagem</TableCell>
              <TableCell  align="center">Status</TableCell>
              <TableCell  align="center">Duplicidade</TableCell>
              <TableCell  align="center">Ações</TableCell>
            </TableRow>
            
          </TableHead>
          <TableBody>
            {documents.map((doc) => {
              const isDuplicate = nameCount[doc.name] > 1;
              return (
                <TableRow key={doc.id}>
                  <TableCell>{doc.id}</TableCell>
                  <TableCell  align="center">
                    <Typography variant="body2" fontWeight="bold">
                      {doc.name}
                    </Typography>
                  </TableCell>
                  <TableCell  align="center">
                    {doc.url ? (
                      <Link
                        href={
                          doc.url.startsWith("http://") ||
                          doc.url.startsWith("https://")
                            ? doc.url
                            : `https://${doc.url}`
                        }
                        target="_blank"
                        underline="hover"
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.5,
                        }}
                      >
                        Link
                        <OpenInNewIcon fontSize="small" />
                      </Link>
                    ) : (
                      "-"
                    )}
                  </TableCell>
                  <TableCell  align="center">
                    {" "}
                    <Chip
                      label={statusTextMap[doc.status]}
                      color={statusColorMap[doc.status]}
                    />
                  </TableCell>
                  <TableCell  align="center">
                    {isDuplicate ? (
                      <Chip
                        icon={<ErrorOutlineIcon />}
                        label="Duplicidade"
                        color="error"
                        variant="outlined"
                      />
                    ) : (
                      ""
                    )}
                  </TableCell>
                  <TableCell  align="center">
                    {doc.editable ? (
                    <IconButton
                      size="small"
                      onClick={() => handleOpen(doc)}
                      aria-label="Atualizar"
                    >
                      <ArrowOutwardRoundedIcon />
                    </IconButton>
                    ) : ( "" )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modal */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Atualizar Documento</DialogTitle>
        <DialogContent>
          {selectedDoc && <UpdateDocumentForm document={selectedDoc} />}
        </DialogContent>
      </Dialog>
    </>
  );
}
