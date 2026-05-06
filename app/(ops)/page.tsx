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
    <div className="space-y-12">
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
        <div className="rounded-md bg-ink/65 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.18)] ring-1 ring-white/[0.03]">
          <ul className="space-y-4">
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
        <div className="rounded-md bg-walnut/80 p-6 text-sm leading-6 text-parchment shadow-[0_18px_60px_rgba(0,0,0,0.18)] ring-1 ring-brass/[0.08]">
          {dashboardAttention}
        </div>
      </Section>
    </div>
  );
}
