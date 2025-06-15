import {
  Button,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchCandidate } from "./Commands";
import { useState } from "react";

const style = {
  py: 1,
  px: 2,
  width: "100%",
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

export function FetchCandidate() {
  const [positionId, setPositionId] = useState("");

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["candidate"],
    queryFn: () => fetchCandidate(positionId),
    enabled: false,
  });

  async function handleSearch() {
    if (positionId.trim() !== "") {
      await refetch();
      setPositionId("");
    }
  }

  return (
    <Stack spacing={1} sx={style}>
      <Typography variant="overline" color="text.secondary">
        1. Buscar dados da posição
      </Typography>

      {isLoading ? (
        <Stack alignItems={"center"} py={2}>
          <CircularProgress size={24} color="inherit" />
        </Stack>
      ) : (
        <Stack direction="row" spacing={3} py={0.5}>
          <TextField
            id="id"
            label="ID da Posição"
            variant="outlined"
            size="small"
            value={positionId}
            onChange={(e) => setPositionId(e.target.value)}
            fullWidth
          />

          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleSearch}
          >
            Buscar
          </Button>
        </Stack>
      )}
    </Stack>
  );
}
