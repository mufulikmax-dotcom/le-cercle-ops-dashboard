import { ModuleTablePage } from "@/components/module-table-page";
import { productColumns, productRows } from "@/data/modules";

export default function ProductsPage() {
  return (
    <ModuleTablePage
      columns={productColumns}
      description="Structură pregătită pentru produse reale, prețuri, cantități și cost unitar."
      emptyMessage="Produsele reale trebuie importate din Excel sau completate manual."
      eyebrow="Catalog"
      rows={productRows}
      tableTitle="Produse"
      title="Produse"
    />
  );
}
