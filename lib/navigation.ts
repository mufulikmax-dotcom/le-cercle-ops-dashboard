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
    label: "Dashboard",
  },
  {
    href: "/suppliers",
    icon: Truck,
    label: "Suppliers",
  },
  {
    href: "/products",
    icon: Package,
    label: "Products",
  },
  {
    href: "/cocktails",
    icon: Martini,
    label: "Cocktails",
  },
  {
    href: "/cocktail-costing",
    icon: Calculator,
    label: "Cocktail Costing",
  },
  {
    href: "/internal-preparations",
    icon: FlaskConical,
    label: "Internal Preparations",
  },
  {
    href: "/inventory-consumables",
    icon: Boxes,
    label: "Inventory & Consumables",
  },
  {
    href: "/events",
    icon: CalendarDays,
    label: "Events",
  },
  {
    href: "/shopping-lists",
    icon: ShoppingCart,
    label: "Shopping Lists",
  },
];
