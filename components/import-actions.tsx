import { Plus, Upload } from "lucide-react";

export function ImportActions({
  addLabel = "Adaugă nou",
}: {
  addLabel?: string;
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <button
        className="inline-flex min-h-10 cursor-not-allowed items-center justify-center gap-2 rounded-md border border-brass/20 bg-brass/10 px-4 text-sm text-pewter/75"
        disabled
        type="button"
      >
        <Plus aria-hidden="true" className="h-4 w-4" />
        {addLabel}
      </button>
      <button
        className="inline-flex min-h-10 cursor-not-allowed items-center justify-center gap-2 rounded-md border border-brass/15 px-4 text-sm text-pewter/70"
        disabled
        type="button"
      >
        <Upload aria-hidden="true" className="h-4 w-4" />
        Import Excel/CSV (în curând)
      </button>
    </div>
  );
}
