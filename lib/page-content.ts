export type DashboardMetric = {
  label: string;
  value: string;
};

export type ModuleTable = {
  columns: string[];
  title: string;
};

export type DashboardPageContent = {
  description: string;
  eyebrow: string;
  kind: "dashboard";
  message: string;
  metrics: DashboardMetric[];
  title: string;
};

export type ModulePageContent = {
  description: string;
  eyebrow: string;
  importLabel: string;
  kind: "module";
  notesLabel: string;
  statusLabel: string;
  table: ModuleTable;
  title: string;
};

export type OpsPageContent = DashboardPageContent | ModulePageContent;

const commonModuleFields = {
  importLabel: "Import Excel/CSV",
  notesLabel: "Note: De completat",
  statusLabel: "Status: De completat",
};

export const sectionPages = {
  dashboard: {
    description:
      "Punctul de pornire pentru operațiunile Le Cercle Group și Le Bureau. Datele afișate sunt starea locală inițială, fără integrare externă.",
    eyebrow: "Le Cercle Group",
    kind: "dashboard",
    message:
      "Sistem pregătit pentru date reale. Următorul pas: import Excel sau introducere manuală.",
    metrics: [
      {
        label: "Furnizori adăugați",
        value: "0",
      },
      {
        label: "Produse confirmate",
        value: "0",
      },
      {
        label: "Cocktailuri active",
        value: "0",
      },
      {
        label: "Ingrediente fără preț",
        value: "0",
      },
      {
        label: "Evenimente planificate",
        value: "0",
      },
    ],
    title: "Panou de control",
  },
  suppliers: {
    ...commonModuleFields,
    description:
      "Registru pentru furnizorii reali ai grupului, pregătit pentru completare manuală sau import ulterior.",
    eyebrow: "Achiziții",
    kind: "module",
    table: {
      columns: [
        "Denumire furnizor",
        "Categorie",
        "Persoană contact",
        "Telefon / email",
        "Status",
        "Note",
      ],
      title: "Structură furnizori",
    },
    title: "Furnizori",
  },
  products: {
    ...commonModuleFields,
    description:
      "Catalog gol pentru produse reale, unități de lucru și status de confirmare.",
    eyebrow: "Catalog",
    kind: "module",
    table: {
      columns: [
        "Denumire produs",
        "Categorie",
        "Furnizor",
        "Unitate",
        "Status",
        "Note",
      ],
      title: "Structură produse",
    },
    title: "Produse",
  },
  cocktails: {
    ...commonModuleFields,
    description:
      "Bibliotecă pregătită pentru cocktailuri reale, fără rețete sau ingrediente inventate.",
    eyebrow: "Program bar",
    kind: "module",
    table: {
      columns: [
        "Nume cocktail",
        "Categorie",
        "Status meniu",
        "Responsabil",
        "Status",
        "Note",
      ],
      title: "Structură cocktailuri",
    },
    title: "Cocktailuri",
  },
  cocktailCosting: {
    ...commonModuleFields,
    description:
      "Spațiu gol pentru costare, pregătit să folosească doar ingrediente și prețuri reale.",
    eyebrow: "Control costuri",
    kind: "module",
    table: {
      columns: [
        "Cocktail",
        "Ingrediente",
        "Ingrediente fără preț",
        "Status costare",
        "Validat de",
        "Note",
      ],
      title: "Structură costare cocktailuri",
    },
    title: "Costuri cocktailuri",
  },
  internalPreparations: {
    ...commonModuleFields,
    description:
      "Modul pentru preparări interne reale: siropuri, batch-uri, infuzii și mise en place.",
    eyebrow: "Preparări",
    kind: "module",
    table: {
      columns: [
        "Preparare",
        "Tip",
        "Unitate / randament",
        "Responsabil",
        "Status",
        "Note",
      ],
      title: "Structură preparări interne",
    },
    title: "Preparări interne",
  },
  inventoryConsumables: {
    ...commonModuleFields,
    description:
      "Inventar gol pentru articole reale, consumabile și locații de stocare.",
    eyebrow: "Stocuri",
    kind: "module",
    table: {
      columns: [
        "Articol",
        "Categorie",
        "Unitate de numărare",
        "Locație",
        "Status",
        "Note",
      ],
      title: "Structură inventar & consumabile",
    },
    title: "Inventar & consumabile",
  },
  events: {
    ...commonModuleFields,
    description:
      "Calendar operațional gol pentru evenimente Le Cercle și Le Bureau, fără evenimente demonstrative.",
    eyebrow: "Evenimente",
    kind: "module",
    table: {
      columns: [
        "Nume eveniment",
        "Dată",
        "Locație",
        "Responsabil",
        "Status",
        "Note",
      ],
      title: "Structură evenimente",
    },
    title: "Evenimente",
  },
  shoppingLists: {
    ...commonModuleFields,
    description:
      "Liste de cumpărături pregătite pentru necesar real, import și completare manuală.",
    eyebrow: "Cumpărături",
    kind: "module",
    table: {
      columns: [
        "Listă",
        "Sursă",
        "Furnizor",
        "Responsabil",
        "Status",
        "Note",
      ],
      title: "Structură liste cumpărături",
    },
    title: "Liste cumpărături",
  },
} satisfies Record<string, OpsPageContent>;
