import { Stack } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { AppShell } from "./AppShell";
import { DocumentSection } from "./DocumentSection";
import { FetchCandidate } from "./FetchCandidate";
import { PersonSection } from "./PersonSection";

function App() {
  const queryClient = useQueryClient();
  const cachedData = queryClient.getQueryData(["candidate"]);

  return (
    <AppShell>
      <Stack spacing={2}>
        <FetchCandidate />
          <PersonSection people={cachedData} />
        <DocumentSection />
      </Stack>
    </AppShell>
  );
}

export default App;
