import { InfoCard } from "@/components/info-card";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";

export default function SettingsPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        description="Zonă rezervată pentru configurări operaționale viitoare. Nu există setări active încă."
        eyebrow="Sistem"
        title="Setări"
      />
      <Section title="Configurări">
        <InfoCard status="În dezvoltare" title="Setări sistem">
          <p>
            De completat după definirea rolurilor, surselor de date și
            preferințelor operaționale.
          </p>
        </InfoCard>
      </Section>
    </div>
  );
}
