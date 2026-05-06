import {
  Boxes,
  Calculator,
  CalendarDays,
  FlaskConical,
  LayoutDashboard,
  Martini,
  Package,
  ShoppingCart,
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
    label: "Panou de control",
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
    label: "Costuri cocktailuri",
  },
  {
    href: "/internal-preparations",
    icon: FlaskConical,
    label: "Preparări interne",
  },
  {
    href: "/inventory-consumables",
    icon: Boxes,
    label: "Inventar & consumabile",
  },
  {
    href: "/events",
    icon: CalendarDays,
    label: "Evenimente",
  },
  {
    href: "/shopping-lists",
    icon: ShoppingCart,
    label: "Liste cumpărături",
  },
];
