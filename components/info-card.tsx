import type { ReactNode } from "react";

import { StatusBadge } from "@/components/status-badge";

export function InfoCard({
  children,
  status,
  title,
}: {
  children?: ReactNode;
  status?: string;
  title: string;
}) {
  return (
    <article className="rounded-md bg-ink/80 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.22)] ring-1 ring-white/[0.03]">
      <div className="flex items-start justify-between gap-4">
        <h2 className="font-display text-2xl leading-tight text-parchment">
          {title}
        </h2>
        {status ? <StatusBadge status={status} /> : null}
      </div>
      {children ? (
        <div className="mt-4 text-sm leading-6 text-pewter">{children}</div>
      ) : null}
    </article>
  );
}
