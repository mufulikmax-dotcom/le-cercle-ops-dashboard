import type { ReactNode } from "react";

import { EmptyState } from "@/components/empty-state";
import { StatusBadge } from "@/components/status-badge";
import type { TableColumn } from "@/data/types";

type DataTableProps<T extends object> = {
  columns: TableColumn<T>[];
  emptyMessage?: string;
  getRowKey?: (row: T, index: number) => string;
  rows: T[];
};

function renderCell<T extends object>(
  column: TableColumn<T>,
  row: T,
): ReactNode {
  const value = String(row[column.key]);

  if (column.key === "status") {
    return <StatusBadge status={value} />;
  }

  return value;
}

export function DataTable<T extends object>({
  columns,
  emptyMessage = "Fără date încă.",
  getRowKey,
  rows,
}: DataTableProps<T>) {
  if (rows.length === 0) {
    return (
      <div className="overflow-hidden rounded-md bg-ink/75 shadow-[0_22px_70px_rgba(0,0,0,0.2)] ring-1 ring-white/[0.03]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-separate border-spacing-y-1 text-left text-sm">
            <thead>
              <tr className="bg-night/45 text-xs uppercase tracking-[0.16em] text-pewter">
                {columns.map((column) => (
                  <th className="px-6 py-4 font-medium" key={column.key}>
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
          </table>
        </div>
        <EmptyState message={emptyMessage} />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-md bg-ink/75 shadow-[0_22px_70px_rgba(0,0,0,0.2)] ring-1 ring-white/[0.03]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-separate border-spacing-y-1 text-left text-sm">
          <thead>
            <tr className="bg-night/45 text-xs uppercase tracking-[0.16em] text-pewter">
              {columns.map((column) => (
                <th className="px-6 py-4 font-medium" key={column.key}>
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                className="bg-night/[0.18] transition hover:bg-parchment/[0.025]"
                key={getRowKey ? getRowKey(row, index) : `${index}`}
              >
                {columns.map((column) => (
                  <td
                    className="px-6 py-4 align-top text-pewter first:rounded-l-md first:text-parchment last:rounded-r-md"
                    key={column.key}
                  >
                    {renderCell(column, row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
