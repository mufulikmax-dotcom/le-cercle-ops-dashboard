export type StatusText =
  | "definit"
  | "în planificare"
  | "în lucru"
  | "de validat"
  | "de completat"
  | "De completat"
  | "De verificat"
  | "De dezvoltat"
  | "Schiță / De dezvoltat"
  | "Costing în lucru"
  | "Current"
  | "În lucru"
  | "De confirmat cu North Ice";

export type DashboardStatus = {
  label: string;
  status: string;
};

export type Direction = {
  description: string;
  elements: string[];
  name: string;
  role: string;
  status: StatusText;
};

export type CommercialProduct = {
  bestFor: string;
  includes: string[];
  missingInformation: string;
  name: string;
  status: StatusText;
};

export type TableColumn<T extends object> = {
  key: keyof T & string;
  label: string;
};
