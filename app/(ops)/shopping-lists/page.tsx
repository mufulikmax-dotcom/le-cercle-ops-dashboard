import { ModuleTablePage } from "@/components/module-table-page";
import { shoppingListColumns, shoppingListRows } from "@/data/modules";

export default function ShoppingListsPage() {
  return (
    <ModuleTablePage
      columns={shoppingListColumns}
      description="Liste de achiziții pregătite pentru generare după completarea datelor reale."
      emptyMessage="Listele de achiziții se vor genera după completarea meniului, inventarului și evenimentului."
      eyebrow="Achiziții"
      rows={shoppingListRows}
      tableTitle="Shopping Lists"
      title="Shopping Lists"
    />
  );
}
