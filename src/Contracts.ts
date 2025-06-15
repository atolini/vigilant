export type DocumentStatus = "VALIDATED" | "FILLED";
export type PersonStatus = "VALIDATED" | "FILLED" | "NOT_FILLED";

export interface Document {
  id: string;
  name: string;
  status: DocumentStatus;
  editable: boolean;
  url?: string;
}

export interface Person {
    documents: Document[];
    dependent: boolean;
    name: string; 
    id: string; 
    status: PersonStatus;
    editable: boolean;
}

export interface Candidate {
    data: Person; 
    dependents: Person[];
}