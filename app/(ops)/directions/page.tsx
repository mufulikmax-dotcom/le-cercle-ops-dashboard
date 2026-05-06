import { InfoCard } from "@/components/info-card";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { directions } from "@/data/directions";

export default function DirectionsPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        description="Cele patru zone care creează atmosferă, ritual, interacțiune și valoare vizuală în eveniment."
        eyebrow="Direcții"
        title="Direcții"
      />
      <Section title="Zone Le Cercle">
        <div className="grid gap-4 lg:grid-cols-2">
          {directions.map((direction) => (
            <InfoCard
              key={direction.name}
              status={direction.status}
              title={direction.name}
            >
              <p>{direction.description}</p>
              <p className="mt-4 text-parchment">Rol în eveniment</p>
              <p>{direction.role}</p>
              <p className="mt-4 text-parchment">Elemente cheie</p>
              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {direction.elements.map((element) => (
                  <li className="text-pewter" key={element}>
                    {element}
                  </li>
                ))}
              </ul>
            </InfoCard>
          ))}
        </div>
      </Section>
    </div>
  );
}
