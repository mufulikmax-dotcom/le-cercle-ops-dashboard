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
      <div className="overflow-hidden border border-brass/15 bg-ink">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-brass/15 text-xs uppercase tracking-[0.16em] text-pewter">
                {columns.map((column) => (
                  <th className="px-5 py-4 font-medium" key={column.key}>
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
    <div className="overflow-hidden border border-brass/15 bg-ink">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-brass/15 text-xs uppercase tracking-[0.16em] text-pewter">
              {columns.map((column) => (
                <th className="px-5 py-4 font-medium" key={column.key}>
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                className="border-b border-brass/10 last:border-0"
                key={getRowKey ? getRowKey(row, index) : `${index}`}
              >
                {columns.map((column) => (
                  <td
                    className="px-5 py-4 align-top text-pewter first:text-parchment"
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
