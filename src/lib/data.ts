
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
      { height: 190, load: 2710 },
      { height: 200, load: 2630 },
      { height: 210, load: 2540 },
      { height: 220, load: 2460 },
      { height: 230, load: 2370 },
      { height: 240, load: 2290 },
      { height: 250, load: 2200 },
      { height: 260, load: 2100 },
      { height: 270, load: 2000 },
      { height: 280, load: 1900 },
      { height: 290, load: 1800 },
      { height: 300, load: 1700 },
      { height: 310, load: 1550 },
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
      { height: 230, load: 2130 },
      { height: 240, load: 2050 },
      { height: 250, load: 1980 },
      { height: 260, load: 1900 },
      { height: 270, load: 1830 },
      { height: 280, load: 1750 },
      { height: 290, load: 1680 },
      { height: 300, load: 1600 },
      { height: 310, load: 1540 },
      { height: 320, load: 1480 },
      { height: 330, load: 1420 },
      { height: 340, load: 1360 },
      { height: 350, load: 1300 },
      { height: 360, load: 1240 },
      { height: 370, load: 1180 },
      { height: 380, load: 1120 },
      { height: 390, load: 1060 },
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
      { height: 240, load: 3410 },
      { height: 250, load: 3310 },
      { height: 260, load: 3210 },
      { height: 270, load: 3100 },
      { height: 280, load: 3000 },
      { height: 290, load: 2900 },
      { height: 300, load: 2800 },
      { height: 310, load: 2680 },
      { height: 320, load: 2560 },
      { height: 330, load: 2440 },
      { height: 340, load: 2320 },
      { height: 350, load: 2200 },
      { height: 360, load: 2120 },
      { height: 370, load: 2040 },
      { height: 380, load: 1960 },
      { height: 390, load: 1880 },
      { height: 400, load: 1800 },
    ],
  },
  {
    id: "b50-280-500",
    image: "/images/puntales/b50-281-500.jpg",
    model: "B50 2.80-5.00 (Extra Fuerte)",
    modelSrc: "/models/model.glb",
    dataAiHint: "extra strong prop",
    minHeight: 280,
    maxHeight: 500,
    tubeDiameter: "80/70 mm",
    steelType: "S355 JR",
    productionNorms: "UNE-EN 1065",
    loadTable: [
      { height: 280, load: 4000 },
      { height: 290, load: 3900 },
      { height: 300, load: 3780 },
      { height: 310, load: 3660 },
      { height: 320, load: 3550 },
      { height: 330, load: 3430 },
      { height: 340, load: 3320 },
      { height: 350, load: 3200 },
      { height: 360, load: 3060 },
      { height: 370, load: 2920 },
      { height: 380, load: 2780 },
      { height: 390, load: 2640 },
      { height: 400, load: 2500 },
      { height: 410, load: 2400 },
      { height: 420, load: 2300 },
      { height: 430, load: 2200 },
      { height: 440, load: 2100 },
      { height: 450, load: 2000 },
      { height: 460, load: 1900 },
      { height: 470, load: 1800 },
      { height: 480, load: 1700 },
      { height: 490, load: 1600 },
      { height: 500, load: 1500 },
    ],
  },
];
