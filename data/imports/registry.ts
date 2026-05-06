import type { TableColumn } from "@/data/types";
import type { SourceFileRegistryItem } from "@/data/imports/types";

export const sourceFileColumns: TableColumn<SourceFileRegistryItem>[] = [
  { key: "file", label: "Fișier" },
  { key: "type", label: "Tip" },
  { key: "source", label: "Sursă" },
  { key: "status", label: "Status" },
  { key: "updatedAt", label: "Ultima actualizare" },
  { key: "systemUse", label: "Utilizare în sistem" },
];

export const sourceFiles: SourceFileRegistryItem[] = [
  {
    file: "Meniu Le Bureau - Working Version.xlsx",
    source: "Google Drive",
    status: "Neimportat",
    systemUse: "Meniu, cocktailuri, costing",
    type: "Excel",
    updatedAt: "De verificat",
  },
  {
    file: "Price ProMaestro",
    source: "Google Drive",
    status: "Neimportat",
    systemUse: "Furnizori, produse, costing",
    type: "Distribuitor",
    updatedAt: "De verificat",
  },
  {
    file: "UBFB",
    source: "Google Drive",
    status: "Neimportat",
    systemUse: "Furnizori, produse, costing",
    type: "Distribuitor",
    updatedAt: "De verificat",
  },
  {
    file: "Cantina Mag",
    source: "Google Drive",
    status: "Neimportat",
    systemUse: "Furnizori, produse, costing",
    type: "Distribuitor",
    updatedAt: "De verificat",
  },
  {
    file: "North Ice",
    source: "Google Drive",
    status: "Neimportat",
    systemUse: "Inventar, gheață, costing",
    type: "Distribuitor gheață",
    updatedAt: "De verificat",
  },
  {
    file: "DisMarket",
    source: "Google Drive",
    status: "Neimportat",
    systemUse: "Furnizori, produse, consumabile",
    type: "Distribuitor produse",
    updatedAt: "De verificat",
  },
  {
    file: "Le Cercle Concept",
    source: "Google Drive",
    status: "Neimportat",
    systemUse: "Proiect, direcții, produse comerciale",
    type: "Concept",
    updatedAt: "De verificat",
  },
  {
    file: "Le Bureau Concept",
    source: "Google Drive",
    status: "Neimportat",
    systemUse: "Le Bureau, storytelling, ofertare",
    type: "Concept",
    updatedAt: "De verificat",
  },
  {
    file: "Le Cercle Launch Event",
    source: "Google Drive",
    status: "Neimportat",
    systemUse: "Eveniment Lansare, evenimente, shopping lists",
    type: "Eveniment",
    updatedAt: "De verificat",
  },
];

export const importedFiles: SourceFileRegistryItem[] = [];

export const failedImports: SourceFileRegistryItem[] = [];
