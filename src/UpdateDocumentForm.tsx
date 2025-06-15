import { Box, Typography } from "@mui/material";

interface UpdateDocumentFormProps {
  document: { id: string; name: string };
}

export function UpdateDocumentForm({ document }: UpdateDocumentFormProps) {
  return (
    <Box p={2}>
      <Typography variant="h6">Atualizar Documento</Typography>
      <Typography>ID: {document.id}</Typography>
      <Typography>Nome: {document.name}</Typography>
      {/* Aqui você pode colocar um form ou inputs para edição */}
    </Box>
  );
}
