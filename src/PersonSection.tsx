import { Stack, Typography } from "@mui/material";
import { PersonTable } from "./PersonTable";
import type { Person } from "./Contracts";

const style = {
  py: 1,
  px: 2,
  width: "100%",
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

interface PersonProps {
  people?: Person[];
}
export function PersonSection({ people }: PersonProps) {
  return (
    <Stack spacing={1} sx={style}>
      <Typography variant="overline" color="text.secondary">
        1. Pessoas
      </Typography>
      {people && people.length === 0 ? (
        <PersonTable people={people} />
      ) : (
        <Typography variant="body2" color="text.disabled">
          Sem dados.
        </Typography>
      )}
    </Stack>
  );
}
