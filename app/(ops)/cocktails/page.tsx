import { DataTable } from "@/components/data-table";
import { EmptyState } from "@/components/empty-state";
import { ImportActions } from "@/components/import-actions";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { cocktailColumns, cocktailRows, cocktailZones } from "@/data/modules";

export default function CocktailsPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        description="Structură de meniu Le Bureau. Rețetele finale nu sunt adăugate până când nu sunt confirmate."
        eyebrow="Meniu"
        title="Cocktailuri"
      />
      <Section title="Zone meniu">
        <div className="flex flex-col justify-between gap-5 rounded-md bg-ink/55 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.18)] ring-1 ring-white/[0.03] sm:flex-row sm:items-center">
          <p className="text-sm text-pewter">
            Signature cocktails rămân în status Schiță / De dezvoltat.
          </p>
          <ImportActions />
        </div>
        <div className="grid gap-8">
          {cocktailZones.map((zone) => {
            const rows = cocktailRows.filter((row) => row.zone === zone);

            return (
              <div className="space-y-4" key={zone}>
                <h2 className="font-display text-2xl text-parchment">
                  {zone}
                </h2>
                {rows.length > 0 ? (
                  <DataTable
                    columns={cocktailColumns}
                    getRowKey={(row) => `${row.zone}-${row.cocktail}`}
                    rows={rows}
                  />
                ) : (
                  <EmptyState message="Fără date încă." />
                )}
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
