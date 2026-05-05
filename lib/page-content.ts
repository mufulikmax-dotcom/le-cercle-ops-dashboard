export type OpsPageContent = {
  currentFocus: string;
  description: string;
  eyebrow: string;
  metrics: Array<{
    label: string;
    note: string;
    value: string;
  }>;
  notes: string[];
  table: {
    caption: string;
    columns: string[];
    rows: string[][];
    subtitle: string;
    title: string;
  };
  title: string;
};

export const sectionPages = {
  dashboard: {
    currentFocus: "May event readiness and cost visibility",
    description:
      "A calm operational overview for purchasing, recipes, inventory pressure, and upcoming Le Bureau experience events.",
    eyebrow: "Le Cercle Group",
    metrics: [
      {
        label: "Events this month",
        note: "Private tastings, launches, and hosted brand moments.",
        value: "8",
      },
      {
        label: "Active suppliers",
        note: "Approved partners across spirits, garnish, food, and service.",
        value: "42",
      },
      {
        label: "Open lists",
        note: "Shopping lists awaiting review or confirmation.",
        value: "5",
      },
      {
        label: "Stock alerts",
        note: "Items under par level across inventory and consumables.",
        value: "12",
      },
    ],
    notes: [
      "Review premium spirit allocations before the next Le Bureau tasting.",
      "Confirm garnish prep ownership for weekend service.",
      "Prioritize products with missing supplier and cost metadata.",
    ],
    table: {
      caption: "Today",
      columns: ["Area", "Owner", "Status", "Next Move"],
      rows: [
        ["Event prep", "Operations", "In review", "Confirm service quantities"],
        ["Cocktail costs", "Bar lead", "Draft", "Validate ingredient pricing"],
        ["Inventory", "Store room", "Attention", "Recount low stock items"],
      ],
      subtitle: "A concise view of current operational movement.",
      title: "Service Priorities",
    },
    title: "Dashboard",
  },
  suppliers: {
    currentFocus: "Preferred supplier coverage",
    description:
      "Supplier records for beverage, garnish, dry goods, disposables, and event service partners.",
    eyebrow: "Procurement",
    metrics: [
      {
        label: "Approved",
        note: "Ready for recurring orders.",
        value: "28",
      },
      {
        label: "Needs terms",
        note: "Payment or delivery conditions pending.",
        value: "6",
      },
      {
        label: "Special order",
        note: "Used for event-led procurement.",
        value: "8",
      },
      {
        label: "Lead time risk",
        note: "Requires earlier confirmation.",
        value: "3",
      },
    ],
    notes: [
      "Group suppliers by category before adding purchase history.",
      "Keep contact, terms, lead time, and minimum order data together.",
      "Flag suppliers suitable for high-touch private events.",
    ],
    table: {
      caption: "Sample",
      columns: ["Supplier", "Category", "Terms", "Status"],
      rows: [
        ["Maison Spirits", "Premium spirits", "Net 14", "Approved"],
        ["Atelier Citrus", "Fresh garnish", "COD", "Needs backup"],
        ["Noir Service", "Event staffing", "Contract", "Preferred"],
      ],
      subtitle: "Representative supplier rows for the initial structure.",
      title: "Supplier Directory",
    },
    title: "Suppliers",
  },
  products: {
    currentFocus: "Clean product metadata",
    description:
      "A product catalogue for spirits, modifiers, garnish, dry stock, and event consumables.",
    eyebrow: "Catalogue",
    metrics: [
      {
        label: "Listed products",
        note: "Initial operating catalogue.",
        value: "186",
      },
      {
        label: "Missing cost",
        note: "Needs pricing before costing is reliable.",
        value: "21",
      },
      {
        label: "Event-only",
        note: "Reserved for bespoke experiences.",
        value: "14",
      },
      {
        label: "Archived",
        note: "No longer used in active menus.",
        value: "9",
      },
    ],
    notes: [
      "Separate purchase unit, recipe unit, and counting unit.",
      "Add category, supplier, pack size, and tax treatment early.",
      "Use product records as the source for cocktail costing.",
    ],
    table: {
      caption: "Draft",
      columns: ["Product", "Type", "Unit", "Cost State"],
      rows: [
        ["Single malt reserve", "Spirit", "700 ml", "Confirmed"],
        ["House vermouth", "Modifier", "1 l", "Needs update"],
        ["Smoked almonds", "Consumable", "1 kg", "Draft"],
      ],
      subtitle: "Core product fields before inventory integration.",
      title: "Product Register",
    },
    title: "Products",
  },
  cocktails: {
    currentFocus: "Signature and event menus",
    description:
      "Cocktail specifications for house serves, private member moments, and Le Bureau event menus.",
    eyebrow: "Beverage Program",
    metrics: [
      {
        label: "Active serves",
        note: "Ready for menu or event use.",
        value: "34",
      },
      {
        label: "In development",
        note: "Recipe, garnish, or method still moving.",
        value: "7",
      },
      {
        label: "Event signatures",
        note: "Built for private experiences.",
        value: "11",
      },
      {
        label: "Needs image",
        note: "Visual reference pending.",
        value: "16",
      },
    ],
    notes: [
      "Keep method, glassware, garnish, and batch notes close to the recipe.",
      "Connect each cocktail to costing once ingredient data is stable.",
      "Reserve event-specific variants without duplicating the base serve.",
    ],
    table: {
      caption: "Menu",
      columns: ["Cocktail", "Style", "Glass", "Status"],
      rows: [
        ["Cercle Old Fashioned", "Stirred", "Rocks", "Active"],
        ["Bureau Highball", "Built", "Highball", "In development"],
        ["Velvet Martinez", "Stirred", "Nick & Nora", "Active"],
      ],
      subtitle: "Representative recipe records for the cocktail library.",
      title: "Cocktail Library",
    },
    title: "Cocktails",
  },
  cocktailCosting: {
    currentFocus: "Reliable margin view",
    description:
      "Ingredient-level costing for cocktails, batches, garnishes, and premium event serves.",
    eyebrow: "Cost Control",
    metrics: [
      {
        label: "Costed recipes",
        note: "Recipes with complete ingredient pricing.",
        value: "23",
      },
      {
        label: "Needs product link",
        note: "Ingredient mapping still incomplete.",
        value: "9",
      },
      {
        label: "Target margin",
        note: "Default benchmark for premium serves.",
        value: "78%",
      },
      {
        label: "High variance",
        note: "Recipes needing cost review.",
        value: "4",
      },
    ],
    notes: [
      "Cost recipes from product unit conversions, not manual recipe estimates.",
      "Keep garnish, wastage, and batch yield visible in the model.",
      "Add selling price scenarios after base recipe costs are trusted.",
    ],
    table: {
      caption: "Margin",
      columns: ["Serve", "Cost", "Price", "Margin"],
      rows: [
        ["Cercle Old Fashioned", "4.80", "22.00", "78%"],
        ["Velvet Martinez", "5.40", "24.00", "77%"],
        ["Bureau Highball", "3.20", "18.00", "82%"],
      ],
      subtitle: "A simple placeholder for future costing calculations.",
      title: "Costing Snapshot",
    },
    title: "Cocktail Costing",
  },
  internalPreparations: {
    currentFocus: "Prep accountability",
    description:
      "Internal recipes and prep runs for syrups, infusions, batches, garnishes, and event mise en place.",
    eyebrow: "Prep Kitchen",
    metrics: [
      {
        label: "Active preps",
        note: "Used across cocktails and events.",
        value: "18",
      },
      {
        label: "Due today",
        note: "Prepared before service or load-out.",
        value: "5",
      },
      {
        label: "Shelf life risk",
        note: "Needs date or batch review.",
        value: "3",
      },
      {
        label: "Batch recipes",
        note: "Ready for yield tracking.",
        value: "10",
      },
    ],
    notes: [
      "Track batch yield, shelf life, production date, and owner together.",
      "Connect prep outputs to cocktail recipes as reusable ingredients.",
      "Use prep status to prevent last-minute event purchasing.",
    ],
    table: {
      caption: "Prep",
      columns: ["Preparation", "Yield", "Owner", "Status"],
      rows: [
        ["Demerara syrup", "2 l", "Bar prep", "Ready"],
        ["Citrus stock", "1.5 l", "Kitchen", "Due today"],
        ["Smoked tea infusion", "900 ml", "Bar lead", "Testing"],
      ],
      subtitle: "Core prep records before production scheduling.",
      title: "Preparation Log",
    },
    title: "Internal Preparations",
  },
  inventoryConsumables: {
    currentFocus: "Par levels and event drawdowns",
    description:
      "Inventory and consumables tracking for stock pressure, event allocation, and replenishment planning.",
    eyebrow: "Stock Control",
    metrics: [
      {
        label: "Under par",
        note: "Needs purchase or transfer review.",
        value: "12",
      },
      {
        label: "Counted today",
        note: "Items touched in the latest count.",
        value: "64",
      },
      {
        label: "Consumables",
        note: "Napkins, glassware support, disposables, and dry goods.",
        value: "47",
      },
      {
        label: "Event reserved",
        note: "Stock allocated to upcoming experiences.",
        value: "19",
      },
    ],
    notes: [
      "Track par, current count, reserved quantity, and reorder threshold.",
      "Separate consumables from beverage stock while sharing supplier records.",
      "Prepare for event drawdowns before detailed warehouse flows.",
    ],
    table: {
      caption: "Count",
      columns: ["Item", "On Hand", "Par", "State"],
      rows: [
        ["Reserve bourbon", "6", "8", "Under par"],
        ["Linen cocktail napkins", "220", "180", "Healthy"],
        ["Clear ice blocks", "18", "24", "Reorder"],
      ],
      subtitle: "A compact stock view for operational decisions.",
      title: "Inventory Pulse",
    },
    title: "Inventory & Consumables",
  },
  events: {
    currentFocus: "Le Bureau calendar readiness",
    description:
      "Event planning for private tastings, brand moments, hosted dinners, and members club experiences.",
    eyebrow: "Experience Operations",
    metrics: [
      {
        label: "Upcoming",
        note: "Confirmed events in the working calendar.",
        value: "8",
      },
      {
        label: "Needs menu",
        note: "Menu or serve list not yet locked.",
        value: "3",
      },
      {
        label: "Procurement open",
        note: "Items still moving through lists.",
        value: "5",
      },
      {
        label: "Staffing review",
        note: "Service assignments pending.",
        value: "2",
      },
    ],
    notes: [
      "Keep menu, guest count, service style, and load-out notes visible.",
      "Link event requirements to shopping lists and inventory reservations.",
      "Add premium client preferences after the operational base is stable.",
    ],
    table: {
      caption: "Calendar",
      columns: ["Event", "Date", "Guests", "Readiness"],
      rows: [
        ["Private whiskey tasting", "May 14", "24", "Menu review"],
        ["Founder dinner", "May 21", "18", "Procurement open"],
        ["Brand salon", "May 28", "40", "Service plan"],
      ],
      subtitle: "Upcoming experience events and readiness state.",
      title: "Event Pipeline",
    },
    title: "Events",
  },
  shoppingLists: {
    currentFocus: "Purchase list discipline",
    description:
      "Shopping lists for regular replenishment, event-specific buying, and consumable restock planning.",
    eyebrow: "Purchasing",
    metrics: [
      {
        label: "Open lists",
        note: "Awaiting review, order, or receiving.",
        value: "5",
      },
      {
        label: "Event lists",
        note: "Tied to upcoming Le Bureau experiences.",
        value: "3",
      },
      {
        label: "Needs approval",
        note: "Cost or quantity requires signoff.",
        value: "2",
      },
      {
        label: "Ready to order",
        note: "Can be sent to supplier.",
        value: "4",
      },
    ],
    notes: [
      "Generate lists from event needs, inventory gaps, and manual additions.",
      "Group by supplier once product data is connected.",
      "Track approval, ordering, and receiving without adding accounting scope yet.",
    ],
    table: {
      caption: "Purchasing",
      columns: ["List", "Source", "Owner", "Status"],
      rows: [
        ["May 14 tasting", "Event", "Operations", "Needs approval"],
        ["Weekly garnish", "Par level", "Bar prep", "Ready"],
        ["Glassware support", "Manual", "Events", "Draft"],
      ],
      subtitle: "Initial purchasing workflow placeholders.",
      title: "Shopping Lists",
    },
    title: "Shopping Lists",
  },
} satisfies Record<string, OpsPageContent>;
