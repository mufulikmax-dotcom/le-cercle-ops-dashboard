import { Plus, Upload } from "lucide-react";

export function ImportActions({
  addLabel = "Adaugă nou",
}: {
  addLabel?: string;
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <button
        className="inline-flex min-h-10 cursor-not-allowed items-center justify-center gap-2 rounded-md bg-brass/10 px-4 text-sm text-pewter/75 shadow-[inset_0_0_0_1px_rgba(200,169,106,0.12)]"
        disabled
        type="button"
      >
        <Plus aria-hidden="true" className="h-4 w-4" />
        {addLabel}
      </button>
      <button
        className="inline-flex min-h-10 cursor-not-allowed items-center justify-center gap-2 rounded-md bg-night/55 px-4 text-sm text-pewter/70 shadow-[inset_0_0_0_1px_rgba(244,234,215,0.05)]"
        disabled
        type="button"
      >
        <Upload aria-hidden="true" className="h-4 w-4" />
        Import Excel/CSV (în curând)
      </button>
    </div>
  );
}
