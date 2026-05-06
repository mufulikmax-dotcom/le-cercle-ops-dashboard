import { InfoCard } from "@/components/info-card";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import {
  dashboardActions,
  dashboardAttention,
  dashboardStatuses,
} from "@/data/dashboard";
import { directions } from "@/data/directions";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        description="Control operațional intern pentru Le Cercle Group. Sistemul este pregătit pentru date reale, import și completare manuală."
        eyebrow="Le Cercle Group"
        title="Dashboard"
      />

      <Section title="Status sistem">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {dashboardStatuses.map((item) => (
            <InfoCard key={item.label} status={item.status} title={item.label} />
          ))}
        </div>
      </Section>

      <Section title="Structura Le Cercle">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {directions.map((direction) => (
            <InfoCard
              key={direction.name}
              status={direction.status}
              title={direction.name}
            >
              <p>{direction.description}</p>
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section title="Următoarele acțiuni">
        <div className="border border-brass/15 bg-ink p-5">
          <ul className="space-y-3">
            {dashboardActions.map((action) => (
              <li className="flex gap-3 text-sm text-pewter" key={action}>
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
                <span>{action}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title="Atenție">
        <div className="border border-brass/25 bg-walnut p-5 text-sm leading-6 text-parchment">
          {dashboardAttention}
        </div>
      </Section>
    </div>
  );
}
