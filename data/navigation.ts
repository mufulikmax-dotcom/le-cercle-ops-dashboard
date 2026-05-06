import {
  Boxes,
  BriefcaseBusiness,
  Calculator,
  CalendarDays,
  Compass,
  FileText,
  FlaskConical,
  LayoutDashboard,
  ListChecks,
  Martini,
  Package,
  ScrollText,
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

export const navItems: NavItem[] = [
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
  {
    href: "/documents",
    icon: FileText,
    label: "Documente",
  },
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
  {
    href: "/inventory-consumables",
    icon: Boxes,
    label: "Inventar & Consumabile",
  },
  {
    href: "/events",
    icon: CalendarDays,
    label: "Evenimente",
  },
  {
    href: "/shopping-lists",
    icon: ShoppingCart,
    label: "Shopping Lists",
  },
  {
    href: "/todo",
    icon: ListChecks,
    label: "To Do / De Completat",
  },
];
