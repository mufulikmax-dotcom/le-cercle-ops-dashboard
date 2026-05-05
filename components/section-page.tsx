import type { OpsPageContent } from "@/lib/page-content";

export function SectionPage({ page }: { page: OpsPageContent }) {
  return (
    <div className="space-y-8">
      <section className="border-b border-brass/15 pb-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-brass">
              {page.eyebrow}
            </p>
            <h1 className="mt-4 font-display text-4xl leading-tight text-parchment sm:text-5xl">
              {page.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-pewter">
              {page.description}
            </p>
          </div>
          <div className="w-full border border-brass/15 bg-ink px-5 py-4 lg:w-72">
            <p className="text-xs uppercase tracking-[0.18em] text-pewter">
              Current focus
            </p>
            <p className="mt-2 text-lg text-parchment">{page.currentFocus}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {page.metrics.map((metric) => (
          <article
            className="border border-brass/15 bg-ink p-5"
            key={metric.label}
          >
            <p className="text-sm text-pewter">{metric.label}</p>
            <p className="mt-3 font-display text-3xl text-parchment">
              {metric.value}
            </p>
            <p className="mt-3 text-sm leading-6 text-pewter">{metric.note}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)]">
        <div className="border border-brass/15 bg-ink p-5">
          <div className="flex items-center justify-between gap-4 border-b border-brass/15 pb-4">
            <h2 className="font-display text-2xl text-parchment">
              Operating Notes
            </h2>
            <span className="rounded-md border border-brass/25 px-3 py-1 text-xs uppercase tracking-[0.16em] text-brass">
              Draft
            </span>
          </div>
          <ul className="mt-5 space-y-4">
            {page.notes.map((note) => (
              <li className="flex gap-3 text-sm leading-6 text-pewter" key={note}>
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden border border-brass/15 bg-ink">
          <div className="flex flex-col justify-between gap-2 border-b border-brass/15 p-5 sm:flex-row sm:items-end">
            <div>
              <h2 className="font-display text-2xl text-parchment">
                {page.table.title}
              </h2>
              <p className="mt-2 text-sm text-pewter">{page.table.subtitle}</p>
            </div>
            <span className="text-sm text-brass">{page.table.caption}</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left text-sm">
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
                {page.table.rows.map((row) => (
                  <tr
                    className="border-b border-brass/10 last:border-0"
                    key={row.join("-")}
                  >
                    {row.map((cell, index) => (
                      <td
                        className={
                          index === 0
                            ? "px-5 py-4 text-parchment"
                            : "px-5 py-4 text-pewter"
                        }
                        key={`${cell}-${index}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
