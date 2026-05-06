import { DataTable } from "@/components/data-table";
import { ImportActions } from "@/components/import-actions";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import type { TableColumn } from "@/data/types";

export function ModuleTablePage<T extends object>({
  columns,
  description,
  emptyMessage,
  eyebrow,
  rows,
  tableTitle,
  title,
}: {
  columns: TableColumn<T>[];
  description: string;
  emptyMessage?: string;
  eyebrow: string;
  rows: T[];
  tableTitle: string;
  title: string;
}) {
  return (
    <div className="space-y-8">
      <PageHeader description={description} eyebrow={eyebrow} title={title} />
      <Section title={tableTitle}>
        <div className="flex flex-col justify-between gap-4 border border-brass/15 bg-ink p-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-pewter">
              Operare
            </p>
            <p className="mt-2 text-sm text-parchment">
              Status și observații se completează doar cu date reale.
            </p>
          </div>
          <ImportActions />
        </div>
        <DataTable
          columns={columns}
          emptyMessage={emptyMessage}
          rows={rows}
        />
      </Section>
    </div>
  );
}
