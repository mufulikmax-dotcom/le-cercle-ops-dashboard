import type { ReactNode } from "react";

export function Section({
  children,
  description,
  title,
}: {
  children: ReactNode;
  description?: string;
  title: string;
}) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="font-display text-3xl text-parchment">{title}</h2>
        {description ? (
          <p className="mt-3 max-w-3xl text-sm leading-6 text-pewter">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
