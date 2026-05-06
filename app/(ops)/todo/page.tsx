import { InfoCard } from "@/components/info-card";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { todoItems } from "@/data/todo";

export default function TodoPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        description="Listă de acțiuni care trebuie completate înainte de operare cu date reale."
        eyebrow="Control operațional"
        title="To Do / De Completat"
      />
      <Section title="Acțiuni">
        <div className="grid gap-3">
          {todoItems.map((item) => (
            <InfoCard key={item} status="De completat" title={item} />
          ))}
        </div>
      </Section>
    </div>
  );
}
