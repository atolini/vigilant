import { Box, Container, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell(props: AppShellProps) {
  return (
    <Container maxWidth="md">
      <Box component="section" sx={{ my: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Bope 2.0
        </Typography>
        <Typography variant="subtitle1">
          Esta interface representa uma camada de abstração sobre a coleção BOPE
          API, disponibilizada pelo time de engenharia, com foco em integrações
          com o produto People. Ela fornece validações mínimas e
          pré-processamentos essenciais para facilitar a composição, envio e
          tratamento de requisições HTTP, promovendo consistência e padronização
          no consumo dos endpoints.
        </Typography>
      </Box>
      <Stack spacing={1}>{props.children}</Stack>
    </Container>
  );
}
