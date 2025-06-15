import type { Candidate } from "./Contracts";

const candidate: Candidate = {
  data: {
    id: crypto.randomUUID(),
    name: "Lucas Atolini",
    dependent: false,
    status: "VALIDATED",
    editable: false,
    documents: [
      {
        id: crypto.randomUUID(),
        name: "RG",
        status: "VALIDATED",
        editable: false,
        url: "https://example.com/rg.pdf",
      },
      {
        id: crypto.randomUUID(),
        name: "CPF",
        status: "FILLED",
        editable: true,
      },
    ],
  },
  dependents: [
    {
      id: crypto.randomUUID(),
      name: "Maria Atolini",
      dependent: true,
      status: "FILLED",
      editable: true,
      documents: [
        {
          id: crypto.randomUUID(),
          name: "Birth Certificate",
          status: "VALIDATED",
          editable: false,
          url: "https://example.com/birth_certificate.pdf",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      name: "João Atolini",
      dependent: true,
      status: "NOT_FILLED",
      editable: true,
      documents: [],
    },
  ],
};

export async function fetchCandidate(positionId: string): Promise<Candidate> {
  console.log(positionId);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(candidate);
    }, 2000); 
  });
}