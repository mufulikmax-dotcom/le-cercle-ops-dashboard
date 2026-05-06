import { StatusBadge } from "@/components/status-badge";
import type { ImportStatus } from "@/data/imports/types";

export function ImportStatusBadge({ status }: { status: ImportStatus }) {
  return <StatusBadge status={status} />;
}
