
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { puntalesData, type Puntal } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ArrowDownToLine,
  ArrowUpToLine,
  Circle,
  Shield,
  BadgeCheck,
  Weight,
  Layers,
  Ruler,
  ChevronRight,
  MoveVertical,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';


const SpecItem = ({ icon: Icon, label, value }: { icon: React.ElementType, label: string, value: string | number }) => (
  <div className="flex items-center gap-4 text-left">
    <div className="flex-shrink-0 text-primary bg-primary/10 p-3 rounded-full">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <p className="font-bold text-base">{label}</p>
      <p className="text-muted-foreground text-sm">{value}</p>
    </div>
  </div>
);

const PuntalAnimation = ({ model, height }: { model: Puntal, height: number }) => {
    const totalAnimHeight = 350; // Total height of the animation container in px
    const basePlateHeight = 8;
    const topPlateHeight = 8;
    const minVisualHeight = 50; // Minimum visual height for the inner tube
    const maxVisualHeight = totalAnimHeight - basePlateHeight - topPlateHeight - 20;

    const heightRange = model.maxHeight - model.minHeight;
    const visualHeightRange = maxVisualHeight - minVisualHeight;
    
    // Calculate how far along the height is within its range
    const heightRatio = (height - model.minHeight) / heightRange;
    
    // Apply this ratio to the visual range
    const innerTubeHeight = minVisualHeight + (heightRatio * visualHeightRange);
    
    // Calculate the position for the height indicator
    const indicatorPosition = innerTubeHeight + basePlateHeight;

    return (
        <div className="relative w-full h-[400px] rounded-lg flex justify-center items-end p-4 overflow-hidden border">
            {/* Outer tube */}
            <div className="relative w-16 flex flex-col items-center" style={{ height: `${maxVisualHeight + basePlateHeight}px` }}>
                <div className="w-full h-full bg-secondary rounded-t-md border-x-2 border-t-2 border-border/50"></div>
                {/* Base Plate */}
                <div className="absolute -bottom-2 w-24 h-2 bg-muted rounded-md border-2 border-border/80"></div>
            </div>

            {/* Inner tube with top plate */}
            <div 
                className="absolute w-12 flex flex-col items-center transition-all duration-300 ease-out"
                style={{ height: `${innerTubeHeight}px`, bottom: `${basePlateHeight + 4}px` }}
            >
                <div className="w-full h-full bg-primary/60 rounded-t-md border-x-2 border-t-2 border-primary/80"></div>
                {/* Top Plate */}
                <div className="absolute -top-2 w-24 h-2 bg-muted rounded-md border-2 border-border/80"></div>
            </div>
            
            {/* Height Indicator */}
            <div 
                className="absolute left-4 flex items-center gap-2 transition-all duration-300 ease-out"
                style={{ bottom: `${indicatorPosition}px` }}
            >
                <span className="font-bold text-primary bg-background/80 px-2 py-1 rounded-md shadow-md tabular-nums">
                    {height.toFixed(0)} cm
                </span>
                <div className="flex-grow h-px bg-primary/50 border-t border-dashed border-primary/80 w-16"></div>
            </div>
        </div>
    );
};

interface PuntalSelectorProps {
  onCtaClick: () => void;
}

export default function PuntalSelector({ onCtaClick }: PuntalSelectorProps) {
  const [modelIndex, setModelIndex] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(puntalesData[0].minHeight);
  const [maxLoad, setMaxLoad] = useState(0);
  const [highlightKey, setHighlightKey] = useState(0);

  const currentModel: Puntal = puntalesData[modelIndex];

  useEffect(() => {
    // Reset height to the new model's minimum height to avoid invalid states
    if (puntalesData[modelIndex]) {
      setCurrentHeight(puntalesData[modelIndex].minHeight);
    }
  }, [modelIndex]);

  useEffect(() => {
    const calculateLoad = (model: Puntal, height: number): number => {
      // The load table is assumed to be sorted by height in ascending order.
      const sortedTable = [...model.loadTable].sort((a, b) => a.height - b.height);
      
      // Find the first load entry where the height is sufficient
      // Load holds steady within each 10 cm bracket and drops at the next mark
      let applicableLoad = sortedTable[0]?.load || 0;
      for (let i = 0; i < sortedTable.length; i++) {
        if (height >= sortedTable[i].height) {
          applicableLoad = sortedTable[i].load;
        } else {
          break;
        }
      }
      return applicableLoad;
    };

    if (currentModel) {
      const newLoad = calculateLoad(currentModel, currentHeight);
      if (newLoad !== maxLoad) {
        setMaxLoad(newLoad);
        // Change the key to re-trigger the animation
        setHighlightKey(prev => prev + 1);
      }
    }
  }, [currentHeight, currentModel, maxLoad]);

  if (!currentModel) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      <div className="flex flex-col gap-6 lg:sticky top-28">
        <Card className="overflow-hidden shadow-xl border-2 border-border/60 animate-in fade-in duration-500" key={currentModel.id}>
           <div className="bg-secondary/40 p-2 text-center font-bold text-primary">
              Modelo: {currentModel.model}
          </div>
          <div className="relative w-full h-[400px] bg-white">
            <Image
              src={currentModel.image}
              alt={currentModel.model}
              fill
              className="object-contain p-6"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Card>
         <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <Ruler className="w-6 h-6 text-primary" />
              <span>Especificaciones Clave</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <SpecItem icon={ArrowDownToLine} label="Altura Mínima" value={`${currentModel.minHeight} cm`} />
             <SpecItem icon={ArrowUpToLine} label="Altura Máxima" value={`${currentModel.maxHeight} cm`} />
             <SpecItem icon={Circle} label="Diámetro de Tubos" value={currentModel.tubeDiameter} />
             <SpecItem icon={BadgeCheck} label="Norma" value={currentModel.productionNorms} />
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-8">
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold tracking-tight text-primary">
              1. Selecciona el Modelo
            </CardTitle>
          </CardHeader>
          <CardContent>
             <Select
                value={String(modelIndex)}
                onValueChange={(value) => setModelIndex(Number(value))}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecciona un modelo" />
                </SelectTrigger>
                <SelectContent>
                  {puntalesData.map((puntal, index) => (
                    <SelectItem key={puntal.id} value={String(index)}>
                      {puntal.model}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold tracking-tight text-primary">
              2. Ajusta la Altura
            </CardTitle>
          </CardHeader>
          <CardContent>
              <div className="flex justify-between items-baseline mb-3">
                <label htmlFor="height-slider" className="text-base font-medium">Altura de trabajo:</label>
                <p className="text-2xl font-bold text-primary tabular-nums">
                  {currentHeight.toFixed(0)} <span className="text-sm font-normal">cm</span>
                </p>
              </div>
              <Slider
                id="height-slider"
                min={currentModel.minHeight}
                max={currentModel.maxHeight}
                step={1}
                value={[currentHeight]}
                onValueChange={(value) => setCurrentHeight(value[0])}
              />
               <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>{currentModel.minHeight} cm (mín)</span>
                <span>{currentModel.maxHeight} cm (máx)</span>
              </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-3 text-xl md:text-2xl">
              <Weight className="w-7 h-7 text-primary" />
              <span>Capacidad de Carga</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-6xl md:text-7xl font-bold text-primary tabular-nums" key={highlightKey}>
              <span className="animate-highlight inline-block">{maxLoad.toLocaleString('es-ES')}</span>
            </p>
            <p className="text-muted-foreground mt-1">kg a {currentHeight.toFixed(0)} cm de altura</p>
          </CardContent>
        </Card>
        
         <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Tabla de Cargas de {currentModel.model}</CardTitle>
          </CardHeader>
          <CardContent>
             <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50%]">Altura (cm)</TableHead>
                  <TableHead className="text-right">Carga Máxima (kg)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentModel.loadTable.map((entry) => (
                  <TableRow key={entry.height} className={cn(currentHeight >= entry.height && maxLoad === entry.load ? "bg-primary/10 font-bold" : "")}>
                    <TableCell>{entry.height}</TableCell>
                    <TableCell className="text-right">{entry.load.toLocaleString('es-ES')}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-primary/50 border-2 text-center">
          <CardHeader>
            <CardTitle>¿Necesitas Ayuda o una Cotización?</CardTitle>
            <CardDescription>
              Nuestro equipo de expertos está listo para asesorarte.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" onClick={onCtaClick} className="w-full">
              <WhatsAppIcon className="mr-2 h-5 w-5" />
              Contactar a un Asesor
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Características del Producto</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
              <SpecItem icon={Shield} label="Acero de Alta Resistencia" value="Fabricado con acero S235JRH para máxima durabilidad." />
              <SpecItem icon={BadgeCheck} label="Normas de Producción" value="Cumple con la estricta norma europea UNI EN 729-2: 1996." />
              <SpecItem icon={Layers} label="Sistema Anti-Cizallamiento" value="Diseño de mano segura para prevenir accidentes durante el ajuste." />
              <SpecItem icon={Circle} label="Placas de Distribución" value="Bases planas y reforzadas para una óptima distribución de la carga." />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
