import { ModuleTablePage } from "@/components/module-table-page";
import { eventColumns, eventRows } from "@/data/modules";

export default function EventsPage() {
  return (
    <ModuleTablePage
      columns={eventColumns}
      description="Evenimentele reale ale sistemului, fără date demonstrative."
      eyebrow="Evenimente"
      rows={eventRows}
      tableTitle="Evenimente"
      title="Evenimente"
    />
  );
}
