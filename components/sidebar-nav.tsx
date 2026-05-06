"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

type SidebarNavProps = {
  variant: "desktop" | "mobile";
};

function isCurrentPath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function SidebarNav({ variant }: SidebarNavProps) {
  const pathname = usePathname();

  if (variant === "mobile") {
    return (
      <nav
        aria-label="Primary"
        className="flex gap-2 overflow-x-auto px-4 pb-4"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isCurrentPath(pathname, item.href);

          return (
            <Link
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-sm transition",
                active
                  ? "bg-brass/12 text-parchment"
                  : "bg-ink/80 text-pewter hover:bg-smoke/55 hover:text-parchment",
              )}
              href={item.href}
              key={item.href}
            >
              <Icon aria-hidden="true" className="h-4 w-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    );
  }

  return (
    <div className="flex min-h-full flex-col px-5 py-6">
      <div className="pb-8">
        <p className="font-display text-3xl text-parchment">Le Cercle</p>
        <p className="mt-3 text-xs uppercase tracking-[0.22em] text-brass">
          Sistem operațional
        </p>
        <p className="mt-4 max-w-xs text-sm leading-6 text-pewter">
          Module interne pentru date reale Le Cercle și Le Bureau.
        </p>
      </div>

      <nav aria-label="Primary" className="mt-7 flex flex-1 flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isCurrentPath(pathname, item.href);

          return (
            <Link
              aria-current={active ? "page" : undefined}
              className={cn(
                "group flex min-h-10 items-center gap-3 rounded-md px-3 py-1 text-sm text-pewter transition",
                active
                  ? "bg-smoke/75 text-parchment shadow-[0_12px_40px_rgba(0,0,0,0.2)]"
                  : "hover:bg-smoke/45 hover:text-parchment",
              )}
              href={item.href}
              key={item.href}
            >
              <span
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-md transition",
                  active
                    ? "bg-brass/12 text-brass"
                    : "bg-night/55 text-pewter group-hover:text-brass",
                )}
              >
                <Icon aria-hidden="true" className="h-4 w-4" />
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="pt-6">
        <p className="text-xs uppercase tracking-[0.18em] text-pewter">
          Sistem privat
        </p>
        <p className="mt-2 text-sm text-parchment">Le Bureau Experience Events</p>
      </div>
    </div>
  );
}
