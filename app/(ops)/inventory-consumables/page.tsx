import { ModuleTablePage } from "@/components/module-table-page";
import { inventoryColumns, inventoryRows } from "@/data/modules";

export default function InventoryConsumablesPage() {
  return (
    <ModuleTablePage
      columns={inventoryColumns}
      description="Inventar și consumabile cu prețuri doar acolo unde au fost confirmate în brief."
      eyebrow="Stocuri"
      rows={inventoryRows}
      tableTitle="Inventar & Consumabile"
      title="Inventar & Consumabile"
    />
  );
}
