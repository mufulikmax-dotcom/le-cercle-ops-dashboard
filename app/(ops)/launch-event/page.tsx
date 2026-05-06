import { DataTable } from "@/components/data-table";
import { InfoCard } from "@/components/info-card";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import {
  launchEventOverview,
  launchFormat,
  launchPurpose,
  launchTeamColumns,
  launchTeamRows,
  launchTechnical,
  launchTimelineColumns,
  launchTimelineRows,
} from "@/data/launch-event";

export default function LaunchEventPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        description="Date confirmate pentru evenimentul oficial de lansare Le Cercle."
        eyebrow="Lansare"
        title="Eveniment Lansare"
      />

      <Section title="Date eveniment">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {launchEventOverview.map((item) => (
            <InfoCard key={item.label} title={item.label}>
              <p className="text-parchment">{item.value}</p>
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section title="Tehnic">
        <div className="grid gap-4 md:grid-cols-2">
          {launchTechnical.map((item) => (
            <InfoCard key={item.label} title={item.label}>
              <p className="text-parchment">{item.value}</p>
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section title="Scop și format">
        <div className="grid gap-4 lg:grid-cols-[1fr_1.2fr]">
          <InfoCard title="Scop">
            <p>{launchPurpose}</p>
          </InfoCard>
          <InfoCard title="Format experiențial">
            <ul className="grid gap-2 sm:grid-cols-2">
              {launchFormat.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </InfoCard>
        </div>
      </Section>

      <Section title="Echipă / parteneri">
        <DataTable
          columns={launchTeamColumns}
          getRowKey={(row) => row.partner}
          rows={launchTeamRows}
        />
      </Section>

      <Section title="Timeline">
        <DataTable
          columns={launchTimelineColumns}
          getRowKey={(row) => `${row.moment}-${row.title}`}
          rows={launchTimelineRows}
        />
      </Section>
    </div>
  );
}
