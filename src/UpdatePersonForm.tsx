import { Box, Typography } from "@mui/material";
import type { Person } from "./Contracts";

export function UpdatePersonForm({ person } : { person: Person }) {
  return (
    <Box p={2}>
      <Typography variant="h6">Atualizar Pessoa</Typography>
      <Typography>ID: {person.id}</Typography>
      <Typography>Nome: {person.name}</Typography>
      {/* Aqui você pode colocar um form ou inputs para edição */}
    </Box>
  );
}
