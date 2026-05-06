import type { DashboardStatus } from "@/data/types";

export const dashboardStatuses: DashboardStatus[] = [
  {
    label: "Concept general",
    status: "definit",
  },
  {
    label: "Direcții proiect",
    status: "4",
  },
  {
    label: "Produse comerciale",
    status: "4",
  },
  {
    label: "Eveniment lansare",
    status: "în planificare",
  },
  {
    label: "Meniu & costing",
    status: "în lucru",
  },
  {
    label: "Furnizori",
    status: "de validat",
  },
  {
    label: "Inventar",
    status: "de completat",
  },
  {
    label: "Date reale",
    status: "import necesar",
  },
];

export const dashboardActions = [
  "Import Meniu Le Bureau - Working Version.xlsx",
  "Confirmare furnizori",
  "Finalizare meniu Le Bureau",
  "Completare inventar",
  "Definire pachete comerciale",
  "Pregătire workflow eveniment",
];

export const dashboardAttention =
  "Sistemul nu folosește date inventate. Câmpurile goale indică informații care trebuie completate sau importate.";
