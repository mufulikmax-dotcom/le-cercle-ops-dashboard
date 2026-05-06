import { DataTable } from "@/components/data-table";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { documentColumns, documentRows } from "@/data/documents";

export default function DocumentsPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        description="Index operațional pentru documentele confirmate ale proiectului."
        eyebrow="Documente"
        title="Documente"
      />
      <Section title="Registru documente">
        <DataTable
          columns={documentColumns}
          getRowKey={(row) => row.document}
          rows={documentRows}
        />
      </Section>
    </div>
  );
}
