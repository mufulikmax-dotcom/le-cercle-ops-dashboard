import { ModuleTablePage } from "@/components/module-table-page";
import { supplierColumns, supplierRows } from "@/data/modules";

export default function SuppliersPage() {
  return (
    <ModuleTablePage
      columns={supplierColumns}
      description="Furnizori confirmați ca surse de lucru, fără prețuri inventate."
      eyebrow="Achiziții"
      rows={supplierRows}
      tableTitle="Furnizori"
      title="Furnizori"
    />
  );
}
