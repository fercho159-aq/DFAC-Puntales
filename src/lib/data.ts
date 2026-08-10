
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
    model: "Ligero 1.80-3.00",
    modelSrc: "/models/model.glb",
    dataAiHint: "construction prop",
    minHeight: 180,
    maxHeight: 300,
    tubeDiameter: "56/48 mm",
    steelType: "S235 JR",
    productionNorms: "UNE-EN 1065",
    loadTable: [
      { height: 180, load: 2638.98 },
      { height: 190, load: 2542.11 },
      { height: 200, load: 2294.32 },
      { height: 210, load: 2081.21 },
      { height: 220, load: 1896.64 },
      { height: 230, load: 1734.51 },
      { height: 240, load: 1593.79 },
      { height: 250, load: 1468.37 },
      { height: 260, load: 1357.22 },
      { height: 270, load: 1259.33 },
      { height: 280, load: 1170.62 },
      { height: 290, load: 1091.08 },
      { height: 300, load: 1019.7 },
    ],
  },
  {
    id: "ligero-220-400",
    image: "/images/puntales/ligero-220-400.jpg",
    model: "Ligero 2.20-4.00",
    modelSrc: "/models/model.glb",
    dataAiHint: "steel support",
    minHeight: 230,
    maxHeight: 400,
    tubeDiameter: "60/56 mm",
    steelType: "S235 JR",
    productionNorms: "UNE-EN 1065",
    loadTable: [
      { height: 230, load: 2312.68 },
      { height: 240, load: 2124.04 },
      { height: 250, load: 1957.82 },
      { height: 260, load: 1809.97 },
      { height: 270, load: 1678.43 },
      { height: 280, load: 1561.16 },
      { height: 290, load: 1455.11 },
      { height: 300, load: 1359.26 },
      { height: 310, load: 1273.61 },
      { height: 320, load: 1195.09 },
      { height: 330, load: 1123.71 },
      { height: 340, load: 1058.45 },
      { height: 350, load: 999.31 },
      { height: 360, load: 944.24 },
      { height: 370, load: 894.28 },
      { height: 380, load: 847.37 },
      { height: 390, load: 804.54 },
      { height: 400, load: 764.77 },
    ],
  },
  {
    id: "b40-231-400",
    image: "/images/puntales/b40-231-400.jpg",
    model: "B40 2.31-4.00 (Reforzado)",
    modelSrc: "/models/model.glb",
    dataAiHint: "heavy duty prop",
    minHeight: 230,
    maxHeight: 400,
    tubeDiameter: "76/60 mm",
    steelType: "S235 JR",
    productionNorms: "UNE-EN 1065",
    loadTable: [
      { height: 230, load: 3059.15 },
      { height: 240, load: 2832.77 },
      { height: 250, load: 2610.47 },
      { height: 260, load: 2413.67 },
      { height: 270, load: 2238.28 },
      { height: 280, load: 2081.24 },
      { height: 290, load: 1939.05 },
      { height: 300, load: 1813.06 },
      { height: 310, load: 1697.83 },
      { height: 320, load: 1593.82 },
      { height: 330, load: 1497.96 },
      { height: 340, load: 1411.29 },
      { height: 350, load: 1331.75 },
      { height: 360, load: 1259.35 },
      { height: 370, load: 1192.05 },
      { height: 380, load: 1129.85 },
      { height: 390, load: 1072.74 },
      { height: 400, load: 1019.72 },
    ],
  },
  {
    id: "b50-280-500",
    image: "/images/puntales/b40-231-400.jpg",
    model: "B50 2.80-5.00 (Extra Fuerte)",
    modelSrc: "/models/model.glb",
    dataAiHint: "extra strong prop",
    minHeight: 280,
    maxHeight: 500,
    tubeDiameter: "80/70 mm",
    steelType: "S355 JR",
    productionNorms: "UNE-EN 1065",
    loadTable: [
      { height: 280, load: 2518.4 },
      { height: 290, load: 2341.9 },
      { height: 300, load: 2182.8 },
      { height: 310, load: 2040 },
      { height: 320, load: 1910.5 },
      { height: 330, load: 1793.2 },
      { height: 340, load: 1686.1 },
      { height: 350, load: 1588.1 },
      { height: 360, load: 1498.4 },
      { height: 370, load: 1416.8 },
      { height: 380, load: 1341.3 },
      { height: 390, load: 1271.9 },
      { height: 400, load: 1206.7 },
      { height: 410, load: 1147.5 },
      { height: 420, load: 1092.4 },
      { height: 430, load: 1040.4 },
      { height: 440, load: 992.5 },
      { height: 450, load: 948.6 },
      { height: 460, load: 906.8 },
      { height: 470, load: 734.4 },
      { height: 480, load: 672.2 },
      { height: 490, load: 637.5 },
      { height: 500, load: 612 },
    ],
  },
];
