import type {
  ImportStatus,
  ImportWorkflow,
  SyncPlaceholder,
} from "@/data/imports/types";

export const importWorkflows: ImportWorkflow[] = [
  {
    description:
      "Pregătit pentru fișiere .xlsx după implementarea parserului și validării de mapare.",
    sourceType: "Excel",
    status: "În dezvoltare",
    title: "Import Excel",
  },
  {
    description:
      "Pregătit pentru fișiere .csv după definirea regulilor de delimitare și normalizare.",
    sourceType: "CSV",
    status: "În dezvoltare",
    title: "Import CSV",
  },
  {
    description:
      "Pregătit pentru Google Sheets după implementarea citirii autorizate și mapării de coloane.",
    sourceType: "Google Sheets",
    status: "În dezvoltare",
    title: "Import Google Sheets",
  },
];

export const syncPlaceholders: SyncPlaceholder[] = [
  {
    description:
      "Va urmări schimbările din fișierele conectate după implementarea backendului.",
    status: "În dezvoltare",
    title: "Sincronizare live Google Drive",
  },
  {
    description:
      "Va compara coloanele detectate cu schema internă înainte de import.",
    status: "În dezvoltare",
    title: "Validare mapare fișiere",
  },
  {
    description:
      "Va afișa erori reale de import după existența unui proces de import.",
    status: "În dezvoltare",
    title: "Jurnal erori import",
  },
];

export const mappingStatus: Array<{ label: string; status: ImportStatus }> = [
  { label: "Produse", status: "Neimportat" },
  { label: "Furnizori", status: "Neimportat" },
  { label: "Cocktailuri", status: "Neimportat" },
  { label: "Costing", status: "Neimportat" },
  { label: "Inventar", status: "Neimportat" },
  { label: "Shopping Lists", status: "Neimportat" },
  { label: "Preparate Interne", status: "Neimportat" },
  { label: "Evenimente", status: "Neimportat" },
];
