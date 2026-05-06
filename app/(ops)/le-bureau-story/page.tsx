import { InfoCard } from "@/components/info-card";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { leBureauActs } from "@/data/story";

export default function LeBureauStoryPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        description="Voiceover și structură narativă pentru prezentarea Le Bureau."
        eyebrow="Storytelling"
        title="Le Bureau Story"
      />
      <Section title="Acte">
        <div className="grid gap-4 lg:grid-cols-2">
          {leBureauActs.map((act, index) => (
            <InfoCard
              key={act.title}
              title={`${index + 1}. ${act.title}`}
            >
              <p className="text-parchment">„{act.text}”</p>
            </InfoCard>
          ))}
        </div>
      </Section>
    </div>
  );
}
