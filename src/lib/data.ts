
export type LoadData = {
  height: number; // in cm
  load: number; // in kg
};

export type Puntal = {
  id: string;
  model: string;
  modelSrc: string;
  image: string;
  dataAiHint: string;
  minHeight: number; // cm
  maxHeight: number; // cm
  tubeDiameter: string; // e.g., "48/40 mm"
  steelType: string;
  productionNorms: string;
  loadTable: LoadData[];
};

export const puntalesData: Puntal[] = [
  {
    id: "ligero-180-320",
    image: "/images/puntales/ligero-180-320.jpg",
    model: "Ligero 1.80-3.20",
    modelSrc: "/models/model.glb",
    dataAiHint: "construction prop",
    minHeight: 180,
    maxHeight: 320,
    tubeDiameter: "56/48 mm",
    steelType: "S235 JR",
    productionNorms: "UNE-EN 1065",
    loadTable: [
      { height: 180, load: 2800 },
      { height: 250, load: 2200 },
      { height: 300, load: 1700 },
      { height: 320, load: 1400 },
    ],
  },
  {
    id: "ligero-220-400",
    image: "/images/puntales/ligero-220-400.jpg",
    model: "Ligero 2.20-4.00",
    modelSrc: "/models/model.glb",
    dataAiHint: "steel support",
    minHeight: 220,
    maxHeight: 400,
    tubeDiameter: "60/56 mm",
    steelType: "S235 JR",
    productionNorms: "UNE-EN 1065",
    loadTable: [
        { height: 220, load: 2200 },
        { height: 300, load: 1600 },
        { height: 350, load: 1300 },
        { height: 400, load: 1000 },
    ],
  },
  {
    id: "b40-231-400",
    image: "/images/puntales/b40-231-400.jpg",
    model: "B40 2.31-4.00 (Reforzado)",
    modelSrc: "/models/model.glb",
    dataAiHint: "heavy duty prop",
    minHeight: 231,
    maxHeight: 400,
    tubeDiameter: "76/60 mm",
    steelType: "S235 JR",
    productionNorms: "UNE-EN 1065",
    loadTable: [
      { height: 231, load: 3500 },
      { height: 300, load: 2800 },
      { height: 350, load: 2200 },
      { height: 400, load: 1800 },
    ],
  },
  {
    id: "b50-281-500",
    image: "/images/puntales/b50-281-500.jpg",
    model: "B50 2.81-5.00 (Extra Fuerte)",
    modelSrc: "/models/model.glb",
    dataAiHint: "extra strong prop",
    minHeight: 281,
    maxHeight: 500,
    tubeDiameter: "80/70 mm",
    steelType: "S355 JR",
    productionNorms: "UNE-EN 1065",
    loadTable: [
      { height: 281, load: 4000 },
      { height: 350, load: 3200 },
      { height: 400, load: 2500 },
      { height: 450, load: 2000 },
      { height: 500, load: 1500 },
    ],
  },
];
