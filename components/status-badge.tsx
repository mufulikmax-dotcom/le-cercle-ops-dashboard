import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  current: "border-moss/60 bg-moss/35 text-parchment",
  definit: "border-moss/60 bg-moss/35 text-parchment",
  "costing în lucru": "border-ember/60 bg-ember/20 text-parchment",
  "de completat": "border-brass/25 bg-night text-pewter",
  "de confirmat cu north ice": "border-ember/60 bg-ember/20 text-parchment",
  "de dezvoltat": "border-brass/35 bg-brass/10 text-brass",
  "de validat": "border-brass/35 bg-brass/10 text-brass",
  "de verificat": "border-brass/25 bg-night text-pewter",
  "import necesar": "border-brass/35 bg-brass/10 text-brass",
  "în lucru": "border-ember/60 bg-ember/20 text-parchment",
  "în planificare": "border-ember/60 bg-ember/20 text-parchment",
  "schiță / de dezvoltat": "border-brass/35 bg-brass/10 text-brass",
};

export function StatusBadge({ status }: { status: string }) {
  const key = status.toLocaleLowerCase("ro-RO");

  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center rounded-md border px-2.5 text-xs font-medium",
        statusStyles[key] ?? "border-brass/25 bg-night text-pewter",
      )}
    >
      {status}
    </span>
  );
}
