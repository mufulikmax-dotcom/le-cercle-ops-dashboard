import { InfoCard } from "@/components/info-card";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { commercialProducts } from "@/data/directions";

export default function CommercialProductsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        description="Produse comerciale modulare care pot fi vândute separat sau integrate într-un concept complet."
        eyebrow="Vânzare modulară"
        title="Produse Comerciale"
      />
      <Section title="Pachete comerciale">
        <div className="grid gap-4 lg:grid-cols-2">
          {commercialProducts.map((product) => (
            <InfoCard
              key={product.name}
              status={product.status}
              title={product.name}
            >
              <p className="text-parchment">Include</p>
              <ul className="mt-2 grid gap-2 sm:grid-cols-2">
                {product.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-parchment">Potrivit pentru</p>
              <p>{product.bestFor}</p>
              <p className="mt-4 text-parchment">Informații lipsă</p>
              <p>{product.missingInformation}</p>
            </InfoCard>
          ))}
        </div>
      </Section>
    </div>
  );
}
