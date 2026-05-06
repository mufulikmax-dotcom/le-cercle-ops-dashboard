import type { CommercialProduct, Direction } from "@/data/types";

export const directions: Direction[] = [
  {
    description:
      "Lounge și bar vintage în stil French gentleman, construit în jurul ritualurilor premium.",
    elements: [
      "cocktailuri",
      "whiskey",
      "vinuri premium",
      "cigars",
      "vinyl",
      "typewriter",
      "obiecte decorative",
      "smoked whiskey experience",
      "momente ghidate pentru grupuri mici",
    ],
    name: "Le Bureau",
    role:
      "Creează un punct de oprire, conversație, degustare și ritual în eveniment.",
    status: "De completat",
  },
  {
    description: "Experiență socială caldă construită în jurul focului.",
    elements: [
      "fire points",
      "marshmallows",
      "biscuits",
      "s’mores",
      "toppings",
      "ritual interactiv",
    ],
    name: "Maison du Feu",
    role:
      "Creează interacțiune directă și un moment senzorial social în cadrul evenimentului.",
    status: "De completat",
  },
  {
    description: "Experiență dulce vizuală și de tasting.",
    elements: [
      "Belgian chocolate fountains",
      "fructe",
      "marshmallows",
      "biscuits",
      "toppings",
      "experiență desert personalizată",
    ],
    name: "La Fonte",
    role:
      "Creează valoare vizuală, degustare și personalizare în zona de desert.",
    status: "De completat",
  },
  {
    description: "Stație mobilă premium bazată pe un Piaggio Ape.",
    elements: [
      "prosecco bar",
      "gelato bar",
      "oyster bar",
      "bottled drinks / cocktail bar",
      "Italian Grand Table",
    ],
    name: "La Perle",
    role:
      "Creează un punct mobil de servire și imagine, adaptabil la formatul evenimentului.",
    status: "De completat",
  },
];

export const commercialProducts: CommercialProduct[] = [
  {
    bestFor:
      "evenimente premium private, corporate, networking și brand activations",
    includes: [
      "bar",
      "lounge",
      "cocktailuri",
      "host",
      "ritualuri",
      "whiskey",
      "cigars",
      "atmosferă vintage premium",
    ],
    missingInformation: "Pachete, prețuri comerciale și condiții operaționale.",
    name: "Le Bureau Experience",
    status: "De completat",
  },
  {
    bestFor: "evenimente care cer ritual dulce, interacțiune și atmosferă caldă",
    includes: [
      "Maison du Feu",
      "La Fonte",
      "fire",
      "s’mores",
      "Belgian chocolate",
      "toppings",
      "experiență dulce interactivă",
    ],
    missingInformation: "Pachete, prețuri comerciale și cantități operaționale.",
    name: "Sweet Fire Experience",
    status: "De completat",
  },
  {
    bestFor: "evenimente unde stația mobilă premium devine punct vizual",
    includes: [
      "prosecco",
      "gelato",
      "cocktailuri",
      "oyster bar",
      "bottled drinks",
      "Italian table",
    ],
    missingInformation: "Configurații disponibile, pachete și prețuri.",
    name: "La Perle Experience",
    status: "De completat",
  },
  {
    bestFor: "evenimente premium care integrează mai multe direcții Le Cercle",
    includes: [
      "integrarea mai multor direcții Le Cercle",
      "concept complet de eveniment premium",
      "zonare experiențială",
    ],
    missingInformation: "Componență pachet, prețuri și scenarii comerciale.",
    name: "Le Cercle Full Experience",
    status: "De completat",
  },
];
