import { Stack, Typography } from "@mui/material";
import { DocumentTable } from "./DocumentTable";
import type { Document } from "./Contracts";

const style = {
  py: 1,
  px: 2,
  width: "100%",
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

interface DocumentSectionProps {
  documents?: Document[];
}

export function DocumentSection({ documents }: DocumentSectionProps) {
  return (
    <Stack spacing={1} sx={style}>
      <Typography variant="overline" color="text.secondary">
        2. Documentos
      </Typography>

      {documents && documents.length > 0 ? (
        <DocumentTable documents={documents} />
      ) : (
        <Typography variant="body2" color="text.disabled">
          Nenhuma pessoa selecionada.
        </Typography>
      )}
    </Stack>
  );
}
