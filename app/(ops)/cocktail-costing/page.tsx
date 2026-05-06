import { ModuleTablePage } from "@/components/module-table-page";
import { cocktailCostColumns, cocktailCostRows } from "@/data/modules";

export default function CocktailCostingPage() {
  return (
    <ModuleTablePage
      columns={cocktailCostColumns}
      description="Costing gol până la importul ingredientelor reale și validarea prețurilor."
      emptyMessage="Costurile se calculează după importul ingredientelor reale."
      eyebrow="Control costuri"
      rows={cocktailCostRows}
      tableTitle="Structură costing"
      title="Costing Cocktailuri"
    />
  );
}
