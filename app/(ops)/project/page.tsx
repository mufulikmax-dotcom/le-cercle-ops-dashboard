import { InfoCard } from "@/components/info-card";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { projectBlocks } from "@/data/project";

export default function ProjectPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        description="Structura strategică a conceptului Le Cercle și logica modulară de vânzare."
        eyebrow="Concept"
        title="Proiect"
      />
      <Section title="Structură proiect">
        <div className="grid gap-4 lg:grid-cols-2">
          {projectBlocks.map((block) => (
            <InfoCard key={block.title} title={block.title}>
              <p>{block.body}</p>
            </InfoCard>
          ))}
        </div>
      </Section>
    </div>
  );
}
