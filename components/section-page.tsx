import { Plus, Upload } from "lucide-react";

import type { OpsPageContent } from "@/lib/page-content";

export function SectionPage({ page }: { page: OpsPageContent }) {
  if (page.kind === "dashboard") {
    return (
      <div className="space-y-8">
        <PageHeader
          description={page.description}
          eyebrow={page.eyebrow}
          title={page.title}
        />

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {page.metrics.map((metric) => (
            <article
              className="border border-brass/15 bg-ink p-5"
              key={metric.label}
            >
              <p className="text-sm text-pewter">{metric.label}</p>
              <p className="mt-3 font-display text-4xl text-parchment">
                {metric.value}
              </p>
            </article>
          ))}
        </section>

        <section className="border border-brass/15 bg-ink p-6">
          <p className="text-base leading-7 text-parchment">{page.message}</p>
        </section>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <PageHeader
        description={page.description}
        eyebrow={page.eyebrow}
        title={page.title}
      />

      <section className="grid gap-4 md:grid-cols-3">
        <div className="border border-brass/15 bg-ink p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-pewter">
            Status
          </p>
          <p className="mt-3 text-lg text-parchment">{page.statusLabel}</p>
        </div>
        <div className="border border-brass/15 bg-ink p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-pewter">
            Note
          </p>
          <p className="mt-3 text-lg text-parchment">{page.notesLabel}</p>
        </div>
        <div className="border border-brass/15 bg-ink p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-pewter">
            Import
          </p>
          <p className="mt-3 text-lg text-parchment">
            Excel/CSV: De completat
          </p>
        </div>
      </section>

      <section className="overflow-hidden border border-brass/15 bg-ink">
        <div className="flex flex-col justify-between gap-4 border-b border-brass/15 p-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl text-parchment">
              {page.table.title}
            </h2>
            <p className="mt-2 text-sm text-pewter">
              De completat cu date reale.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-brass/40 bg-brass/12 px-4 text-sm text-parchment transition hover:border-brass/70"
              type="button"
            >
              <Plus aria-hidden="true" className="h-4 w-4" />
              Adaugă nou
            </button>
            <button
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-brass/20 px-4 text-sm text-pewter transition hover:border-brass/40 hover:text-parchment"
              type="button"
            >
              <Upload aria-hidden="true" className="h-4 w-4" />
              {page.importLabel}
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-brass/15 text-xs uppercase tracking-[0.16em] text-pewter">
                {page.table.columns.map((column) => (
                  <th className="px-5 py-4 font-medium" key={column}>
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  className="px-5 py-12 text-center text-sm text-pewter"
                  colSpan={page.table.columns.length}
                >
                  De completat.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function PageHeader({
  description,
  eyebrow,
  title,
}: {
  description: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <section className="border-b border-brass/15 pb-8">
      <p className="text-xs uppercase tracking-[0.22em] text-brass">
        {eyebrow}
      </p>
      <h1 className="mt-4 font-display text-4xl leading-tight text-parchment sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-pewter">
        {description}
      </p>
    </section>
  );
}
