import { SidebarNav } from "@/components/sidebar-nav";

export function OpsShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-night text-parchment">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-brass/15 bg-ink/95 lg:block">
        <SidebarNav variant="desktop" />
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 border-b border-brass/15 bg-night/95 backdrop-blur lg:hidden">
          <div className="px-4 py-4">
            <p className="font-display text-xl text-parchment">Le Cercle</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-pewter">
              Sistem operațional
            </p>
          </div>
          <SidebarNav variant="mobile" />
        </header>

        <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
