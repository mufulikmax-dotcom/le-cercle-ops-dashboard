import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  current: "bg-moss/45 text-parchment",
  definit: "bg-moss/45 text-parchment",
  "costing în lucru": "bg-ember/25 text-parchment",
  "de completat": "bg-night/65 text-pewter",
  "de confirmat cu north ice": "bg-ember/25 text-parchment",
  "de dezvoltat": "bg-brass/12 text-brass",
  "de validat": "bg-brass/12 text-brass",
  "de verificat": "bg-night/65 text-pewter",
  "import necesar": "bg-brass/12 text-brass",
  "în lucru": "bg-ember/25 text-parchment",
  "în planificare": "bg-ember/25 text-parchment",
  "schiță / de dezvoltat": "bg-brass/12 text-brass",
};

export function StatusBadge({ status }: { status: string }) {
  const key = status.toLocaleLowerCase("ro-RO");

  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center rounded-md px-2.5 text-xs font-medium",
        statusStyles[key] ?? "bg-night/65 text-pewter",
      )}
    >
      {status}
    </span>
  );
}
