import { ModuleTablePage } from "@/components/module-table-page";
import { preparationColumns, preparationRows } from "@/data/modules";

export default function InternalPreparationsPage() {
  return (
    <ModuleTablePage
      columns={preparationColumns}
      description="Preparate interne necesare pentru meniul Le Bureau, fără costuri inventate."
      eyebrow="Preparări"
      rows={preparationRows}
      tableTitle="Preparate interne"
      title="Preparate Interne"
    />
  );
}
