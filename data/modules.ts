import type { TableColumn } from "@/data/types";

export type SupplierRow = {
  categories: string;
  notes: string;
  status: string;
  supplier: string;
};

export const supplierColumns: TableColumn<SupplierRow>[] = [
  { key: "supplier", label: "Furnizor" },
  { key: "categories", label: "Categorii" },
  { key: "status", label: "Status" },
  { key: "notes", label: "Observații" },
];

export const supplierRows: SupplierRow[] = [
  {
    categories: "alcool, Giffard, bitter, vermouth, prosecco",
    notes: "De verificat",
    status: "De validat",
    supplier: "ProMaestro",
  },
  {
    categories: "alcool backup, premium bottles",
    notes: "De verificat",
    status: "De validat",
    supplier: "UBFB",
  },
  {
    categories: "piureuri, siropuri, Ponthier, Dreamy, 1883",
    notes: "De verificat",
    status: "De validat",
    supplier: "Cantina Mag",
  },
  {
    categories: "gheață premium",
    notes: "De verificat",
    status: "De validat",
    supplier: "North Ice",
  },
  {
    categories: "garnish, dairy, liofilizate, produse speciale",
    notes: "De verificat",
    status: "De validat",
    supplier: "DisMarket",
  },
];

export type ProductRow = {
  category: string;
  item: string;
  notes: string;
  price: string;
  quantity: string;
  status: string;
  supplier: string;
  unit: string;
  unitCost: string;
};

export const productColumns: TableColumn<ProductRow>[] = [
  { key: "item", label: "Produs" },
  { key: "category", label: "Categorie" },
  { key: "supplier", label: "Furnizor" },
  { key: "price", label: "Preț" },
  { key: "quantity", label: "Cantitate" },
  { key: "unit", label: "Unitate" },
  { key: "unitCost", label: "Cost unitar" },
  { key: "status", label: "Status" },
  { key: "notes", label: "Observații" },
];

export const productRows: ProductRow[] = [];

export type CocktailRow = {
  cocktail: string;
  notes: string;
  status: string;
  zone: string;
};

export const cocktailColumns: TableColumn<CocktailRow>[] = [
  { key: "zone", label: "Zonă" },
  { key: "cocktail", label: "Cocktail" },
  { key: "status", label: "Status" },
  { key: "notes", label: "Observații" },
];

export const cocktailRows: CocktailRow[] = [
  {
    cocktail: "Gin Tonic",
    notes: "De verificat",
    status: "Costing în lucru",
    zone: "Flow Bar",
  },
  {
    cocktail: "Whiskey Sour",
    notes: "De verificat",
    status: "Costing în lucru",
    zone: "Flow Bar",
  },
  {
    cocktail: "Espresso Martini",
    notes: "De verificat",
    status: "Costing în lucru",
    zone: "Flow Bar",
  },
  {
    cocktail: "Porn Star Martini",
    notes: "De verificat",
    status: "Costing în lucru",
    zone: "Flow Bar",
  },
  {
    cocktail: "Negroni",
    notes: "De verificat",
    status: "Costing în lucru",
    zone: "Flow Bar",
  },
  {
    cocktail: "Old Fashioned",
    notes: "De verificat",
    status: "Costing în lucru",
    zone: "Le Bureau Classics",
  },
  {
    cocktail: "Dry Martini",
    notes: "De verificat",
    status: "Costing în lucru",
    zone: "Le Bureau Classics",
  },
  {
    cocktail: "Vieux Carré",
    notes: "De verificat",
    status: "Costing în lucru",
    zone: "Le Bureau Classics",
  },
  {
    cocktail: "Manhattan optional / premium",
    notes: "De verificat",
    status: "Costing în lucru",
    zone: "Le Bureau Classics",
  },
  {
    cocktail: "French Kiss",
    notes: "Fără rețetă finală",
    status: "Schiță / De dezvoltat",
    zone: "Signature Le Bureau",
  },
  {
    cocktail: "The Architect",
    notes: "Fără rețetă finală",
    status: "Schiță / De dezvoltat",
    zone: "Signature Le Bureau",
  },
  {
    cocktail: "Velvet Gramophone",
    notes: "Fără rețetă finală",
    status: "Schiță / De dezvoltat",
    zone: "Signature Le Bureau",
  },
  {
    cocktail: "The Smoked Letter",
    notes: "Fără rețetă finală",
    status: "Schiță / De dezvoltat",
    zone: "Signature Le Bureau",
  },
  {
    cocktail: "Botanical Bureau",
    notes: "Fără rețetă finală",
    status: "Schiță / De dezvoltat",
    zone: "Signature Le Bureau",
  },
];

export const cocktailZones = [
  "Flow Bar",
  "Le Bureau Classics",
  "Signature Le Bureau",
  "Le Bureau Experience",
];

export type CocktailCostRow = {
  cocktail: string;
  garnishCost: string;
  iceCost: string;
  liquidCost: string;
  margin: string;
  notes: string;
  recommendedPrice: string;
  status: string;
  totalCost: string;
  zone: string;
};

export const cocktailCostColumns: TableColumn<CocktailCostRow>[] = [
  { key: "cocktail", label: "Cocktail" },
  { key: "zone", label: "Zonă" },
  { key: "liquidCost", label: "Cost lichid" },
  { key: "garnishCost", label: "Cost garnish" },
  { key: "iceCost", label: "Cost gheață" },
  { key: "totalCost", label: "Cost total" },
  { key: "recommendedPrice", label: "Preț recomandat" },
  { key: "margin", label: "Marjă" },
  { key: "status", label: "Status" },
  { key: "notes", label: "Observații" },
];

export const cocktailCostRows: CocktailCostRow[] = [];

export type PreparationRow = {
  calculatedCost: string;
  components: string;
  notes: string;
  preparation: string;
  status: string;
  usage: string;
  yield: string;
};

export const preparationColumns: TableColumn<PreparationRow>[] = [
  { key: "preparation", label: "Preparat" },
  { key: "components", label: "Ingrediente componente" },
  { key: "yield", label: "Randament" },
  { key: "calculatedCost", label: "Cost calculat" },
  { key: "usage", label: "Utilizare" },
  { key: "status", label: "Status" },
  { key: "notes", label: "Observații" },
];

export const preparationRows: PreparationRow[] = [
  "Sirop de zahăr",
  "Fresh / suc lămâie",
  "Fresh / suc lime",
  "Super juice / Nano Citrus",
  "Cordial floral",
  "Cordial dark pentru The Smoked Letter",
  "Sirop busuioc pentru Botanical Bureau",
  "Sirop vanilie",
  "Chips/coajă portocală",
  "Chips/coajă lămâie",
].map((preparation) => ({
  calculatedCost: "De completat",
  components: "De completat",
  notes: "De verificat",
  preparation,
  status: "De completat",
  usage: "De completat",
  yield: "De completat",
}));

export type InventoryRow = {
  category: string;
  item: string;
  notes: string;
  price: string;
  status: string;
  unit: string;
};

export const inventoryColumns: TableColumn<InventoryRow>[] = [
  { key: "item", label: "Articol" },
  { key: "category", label: "Categorie" },
  { key: "price", label: "Preț" },
  { key: "unit", label: "Unitate" },
  { key: "status", label: "Status" },
  { key: "notes", label: "Observații" },
];

const equipment = [
  "smoking gun",
  "smoke cloche",
  "cigar cutter",
  "torch lighter",
  "ashtrays",
  "cigar box / humidor",
  "rocks glasses",
  "coupe glasses",
  "highball glasses",
  "mixing glass",
  "shaker",
  "jigger",
  "bar spoon",
  "serving trays",
  "napkins",
  "edible gold",
  "edible silver",
  "edible paper",
  "isomalt",
  "food velvet effect",
];

export const inventoryRows: InventoryRow[] = [
  {
    category: "Gheață",
    item: "Hoshizaki/Brema ice",
    notes: "De verificat",
    price: "100 lei / 8 kg",
    status: "De confirmat cu North Ice",
    unit: "8 kg",
  },
  {
    category: "Gheață",
    item: "Cub 5x5x7",
    notes: "De verificat",
    price: "6 lei / buc",
    status: "De confirmat cu North Ice",
    unit: "buc",
  },
  {
    category: "Gheață",
    item: "Cub 5x5x5",
    notes: "De verificat",
    price: "5 lei / buc",
    status: "De confirmat cu North Ice",
    unit: "buc",
  },
  {
    category: "Gheață",
    item: "Highball ice 4x4x12",
    notes: "De verificat",
    price: "6 lei / buc",
    status: "De confirmat cu North Ice",
    unit: "buc",
  },
  {
    category: "Gheață",
    item: "Ice ball 6.5 cm",
    notes: "De verificat",
    price: "12 lei / buc",
    status: "De confirmat cu North Ice",
    unit: "buc",
  },
  ...equipment.map((item) => ({
    category: "Echipament / consumabil",
    item,
    notes: "De completat",
    price: "De completat",
    status: "De completat",
    unit: "De completat",
  })),
];

export type EventRow = {
  event: string;
  guests: string;
  location: string;
  notes: string;
  status: string;
  type: string;
};

export const eventColumns: TableColumn<EventRow>[] = [
  { key: "event", label: "Eveniment" },
  { key: "location", label: "Locație" },
  { key: "type", label: "Tip" },
  { key: "guests", label: "Invitați" },
  { key: "status", label: "Status" },
  { key: "notes", label: "Observații" },
];

export const eventRows: EventRow[] = [
  {
    event: "Le Cercle Launch Event",
    guests: "70–100",
    location: "Epicrama, Stăuceni",
    notes: "De verificat",
    status: "În planificare",
    type: "launch / showcase / networking / experience event",
  },
];

export type ShoppingListRow = {
  category: string;
  event: string;
  item: string;
  notes: string;
  quantity: string;
  status: string;
  supplier: string;
};

export const shoppingListColumns: TableColumn<ShoppingListRow>[] = [
  { key: "event", label: "Eveniment" },
  { key: "category", label: "Categorie" },
  { key: "item", label: "Articol" },
  { key: "quantity", label: "Cantitate" },
  { key: "supplier", label: "Furnizor" },
  { key: "status", label: "Status" },
  { key: "notes", label: "Note" },
];

export const shoppingListRows: ShoppingListRow[] = [];
