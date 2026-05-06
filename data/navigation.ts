import {
  Boxes,
  BriefcaseBusiness,
  Calculator,
  CalendarDays,
  Compass,
  Database,
  FileText,
  FlaskConical,
  LayoutDashboard,
  ListChecks,
  Martini,
  Package,
  ScrollText,
  Settings,
  ShoppingCart,
  Sparkles,
  Truck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  href: string;
  icon: LucideIcon;
  label: string;
};

export type NavSection = {
  items: NavItem[];
  label: string;
};

export const navSections: NavSection[] = [
  {
    label: "EXECUTIVE",
    items: [
      {
        href: "/",
        icon: LayoutDashboard,
        label: "Dashboard",
      },
      {
        href: "/project",
        icon: Compass,
        label: "Proiect",
      },
      {
        href: "/directions",
        icon: Sparkles,
        label: "Direcții",
      },
      {
        href: "/commercial-products",
        icon: BriefcaseBusiness,
        label: "Produse Comerciale",
      },
      {
        href: "/launch-event",
        icon: CalendarDays,
        label: "Eveniment Lansare",
      },
      {
        href: "/le-bureau-story",
        icon: ScrollText,
        label: "Le Bureau Story",
      },
    ],
  },
  {
    label: "OPERATIONS",
    items: [
      {
        href: "/events",
        icon: CalendarDays,
        label: "Evenimente",
      },
      {
        href: "/todo",
        icon: ListChecks,
        label: "To Do / De Completat",
      },
      {
        href: "/shopping-lists",
        icon: ShoppingCart,
        label: "Shopping Lists",
      },
      {
        href: "/inventory-consumables",
        icon: Boxes,
        label: "Inventar & Consumabile",
      },
    ],
  },
  {
    label: "BAR SYSTEM",
    items: [
      {
        href: "/cocktails",
        icon: Martini,
        label: "Cocktailuri",
      },
      {
        href: "/cocktail-costing",
        icon: Calculator,
        label: "Costing Cocktailuri",
      },
      {
        href: "/internal-preparations",
        icon: FlaskConical,
        label: "Preparate Interne",
      },
    ],
  },
  {
    label: "PROCUREMENT",
    items: [
      {
        href: "/suppliers",
        icon: Truck,
        label: "Furnizori",
      },
      {
        href: "/products",
        icon: Package,
        label: "Produse",
      },
      {
        href: "/data-sources",
        icon: Database,
        label: "Surse de Date",
      },
    ],
  },
  {
    label: "SYSTEM",
    items: [
      {
        href: "/documents",
        icon: FileText,
        label: "Documente",
      },
      {
        href: "/settings",
        icon: Settings,
        label: "Setări",
      },
    ],
  },
];

export const navItems: NavItem[] = navSections.flatMap((section) => section.items);
