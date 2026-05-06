import type { TableColumn } from "@/data/types";

export type DocumentRow = {
  document: string;
  link: string;
  notes: string;
  role: string;
  status: string;
  type: string;
};

export const documentColumns: TableColumn<DocumentRow>[] = [
  { key: "document", label: "Document" },
  { key: "type", label: "Tip" },
  { key: "role", label: "Rol" },
  { key: "status", label: "Status" },
  { key: "link", label: "Link placeholder" },
  { key: "notes", label: "Observații" },
];

export const documentRows: DocumentRow[] = [
  {
    document: "Le Cercle Concept",
    link: "De completat",
    notes: "De verificat",
    role: "De verificat",
    status: "Current",
    type: "Concept strategic",
  },
  {
    document: "LE BUREAU — Concept pentru evenimente",
    link: "De completat",
    notes: "De verificat",
    role: "De verificat",
    status: "Current",
    type: "Concept produs",
  },
  {
    document: "Descriere – „Le Circle - Eveniment”.pdf",
    link: "De completat",
    notes: "De verificat",
    role: "De verificat",
    status: "Current",
    type: "Eveniment lansare",
  },
  {
    document: "Le Cercle — Master Project Index",
    link: "De completat",
    notes: "De verificat",
    role: "De verificat",
    status: "Current",
    type: "Index documente",
  },
  {
    document: "Meniu Le Cercle",
    link: "De completat",
    notes: "De verificat",
    role: "De verificat",
    status: "Current",
    type: "Meniu / structură",
  },
  {
    document: "Meniu Le Bureau - Working Version.xlsx",
    link: "De completat",
    notes: "De verificat",
    role: "De verificat",
    status: "În lucru",
    type: "Costing",
  },
  {
    document: "Price ProMaestro",
    link: "De completat",
    notes: "De verificat",
    role: "De verificat",
    status: "Current",
    type: "Distribuitor",
  },
  {
    document: "UBFB",
    link: "De completat",
    notes: "De verificat",
    role: "De verificat",
    status: "Current",
    type: "Distribuitor",
  },
  {
    document: "Cantina Mag",
    link: "De completat",
    notes: "De verificat",
    role: "De verificat",
    status: "Current",
    type: "Distribuitor",
  },
  {
    document: "North Ice",
    link: "De completat",
    notes: "De verificat",
    role: "De verificat",
    status: "Current",
    type: "Distribuitor gheață",
  },
  {
    document: "DisMarket",
    link: "De completat",
    notes: "De verificat",
    role: "De verificat",
    status: "Current",
    type: "Distribuitor produse",
  },
  {
    document: "Le Cercle — Brief Operațional Echipă | 10 Mai",
    link: "De completat",
    notes: "De verificat",
    role: "De verificat",
    status: "Current",
    type: "Brief operațional",
  },
];
