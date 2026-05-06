import { DataTable } from "@/components/data-table";
import { EmptyState } from "@/components/empty-state";
import { ImportActions } from "@/components/import-actions";
import { ImportStatusBadge } from "@/components/import-status-badge";
import { InfoCard } from "@/components/info-card";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { StatusBadge } from "@/components/status-badge";
import {
  failedImports,
  importedFiles,
  importSchemas,
  importWorkflows,
  mappingStatus,
  sourceFileColumns,
  sourceFiles,
  syncPlaceholders,
} from "@/data/imports";

export default function DataSourcesPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        description="Arhitectură pregătită pentru importuri reale din Excel, CSV și Google Sheets. Nu există backend, sincronizare live sau import funcțional încă."
        eyebrow="Integrare date"
        title="Surse de date"
      />

      <Section title="Status conexiune Google Drive">
        <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr]">
          <InfoCard status="Conectat" title="Google Drive">
            <p>
              Conexiunea Google Drive este disponibilă în sesiune. Fișierele nu
              sunt citite automat și nu există sincronizare live implementată.
            </p>
          </InfoCard>
          <InfoCard status="În dezvoltare" title="Flux import">
            <p>
              Importul va porni doar după implementarea backendului, mapării
              de coloane și validării datelor.
            </p>
          </InfoCard>
        </div>
      </Section>

      <Section title="Fișiere importate">
        {importedFiles.length > 0 ? (
          <DataTable
            columns={sourceFileColumns}
            getRowKey={(row) => row.file}
            rows={importedFiles}
          />
        ) : (
          <EmptyState message="Fără date încă. Nu există fișiere importate." />
        )}
      </Section>

      <Section title="Importuri în așteptare">
        <div className="rounded-md bg-ink/55 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.18)] ring-1 ring-white/[0.03]">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-pewter">
                Flux
              </p>
              <p className="mt-2 text-sm text-parchment">
                Importurile sunt pregătite vizual, dar sunt dezactivate.
              </p>
            </div>
            <ImportActions addLabel="Adaugă sursă" />
          </div>
        </div>
        <DataTable
          columns={sourceFileColumns}
          getRowKey={(row) => row.file}
          rows={sourceFiles}
        />
      </Section>

      <Section title="Importuri eșuate">
        {failedImports.length > 0 ? (
          <DataTable
            columns={sourceFileColumns}
            getRowKey={(row) => row.file}
            rows={failedImports}
          />
        ) : (
          <EmptyState message="Fără date încă. Nu există importuri eșuate." />
        )}
      </Section>

      <Section title="Ultima actualizare">
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard status="De verificat" title="Actualizare globală">
            <p>De verificat după primul import real.</p>
          </InfoCard>
          <InfoCard status="Neimportat" title="Ultimul import">
            <p>Fără date încă.</p>
          </InfoCard>
          <InfoCard status="În dezvoltare" title="Sincronizare live">
            <p>Placeholder operațional pentru etapă viitoare.</p>
          </InfoCard>
        </div>
      </Section>

      <Section title="Status mapare fișiere">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {mappingStatus.map((item) => (
            <InfoCard key={item.label} title={item.label}>
              <ImportStatusBadge status={item.status} />
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section title="Fluxuri import">
        <div className="grid gap-4 lg:grid-cols-3">
          {importWorkflows.map((workflow) => (
            <InfoCard
              key={workflow.title}
              status={workflow.status}
              title={workflow.title}
            >
              <p>{workflow.description}</p>
              <button
                className="mt-5 inline-flex min-h-10 cursor-not-allowed items-center rounded-md bg-night/55 px-4 text-sm text-pewter/70 shadow-[inset_0_0_0_1px_rgba(244,234,215,0.05)]"
                disabled
                type="button"
              >
                În dezvoltare
              </button>
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section title="Scheme pregătite pentru import">
        <div className="grid gap-4 lg:grid-cols-2">
          {importSchemas.map((schema) => (
            <InfoCard key={schema.key} title={schema.title}>
              <p>{schema.description}</p>
              <p className="mt-4 text-parchment">Câmpuri</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {schema.fields.map((field) => (
                  <span
                    className="rounded-md bg-night/55 px-2.5 py-1 text-xs text-pewter"
                    key={field.key}
                  >
                    {field.label}
                    {field.required ? " *" : ""}
                  </span>
                ))}
              </div>
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section title="Sincronizare live viitoare">
        <div className="grid gap-4 lg:grid-cols-3">
          {syncPlaceholders.map((placeholder) => (
            <InfoCard
              key={placeholder.title}
              status={placeholder.status}
              title={placeholder.title}
            >
              <p>{placeholder.description}</p>
              <div className="mt-5">
                <StatusBadge status="În dezvoltare" />
              </div>
            </InfoCard>
          ))}
        </div>
      </Section>
    </div>
  );
}
