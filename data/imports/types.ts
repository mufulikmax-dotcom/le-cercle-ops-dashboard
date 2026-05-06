export type ImportSourceType = "Excel" | "CSV" | "Google Sheets" | "Google Drive";

export type ImportStatus =
  | "Neimportat"
  | "În analiză"
  | "Mapat"
  | "Incomplet"
  | "Confirmat";

export type ImportFieldType =
  | "date"
  | "enum"
  | "money"
  | "number"
  | "text";

export type ImportField = {
  description: string;
  key: string;
  label: string;
  required: boolean;
  type: ImportFieldType;
};

export type ImportSchema = {
  description: string;
  fields: ImportField[];
  key: string;
  module:
    | "products"
    | "suppliers"
    | "cocktails"
    | "costing"
    | "inventory"
    | "shoppingLists"
    | "internalPreparations"
    | "events";
  title: string;
};

export type SourceFileRegistryItem = {
  file: string;
  source: string;
  status: ImportStatus;
  systemUse: string;
  type: string;
  updatedAt: string;
};

export type ImportWorkflow = {
  description: string;
  sourceType: ImportSourceType;
  status: "În dezvoltare";
  title: string;
};

export type SyncPlaceholder = {
  description: string;
  status: "În dezvoltare";
  title: string;
};
