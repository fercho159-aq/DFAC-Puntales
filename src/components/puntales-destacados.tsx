
'use client';

import { puntalesData, Puntal } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpToLine, Weight, MoveRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import React from 'react';


const PuntalCard = ({ puntal, onQuoteClick }: { puntal: Puntal, onQuoteClick: (id: string) => void }) => {
  const maxLoad = puntal.loadTable.reduce((max, entry) => (entry.load > max ? entry.load : max), 0);
  
  return (
    <Card className="flex flex-col overflow-hidden bg-card shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-transparent hover:border-primary/50">
      <CardHeader className="p-0 bg-white">
        <div className="relative w-full h-[250px]">
          <Image
            src={puntal.image}
            alt={puntal.model}
            fill
            className="object-contain p-4"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            data-ai-hint={puntal.dataAiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex flex-col flex-grow">
        <CardTitle className="mb-2 text-xl font-bold">{puntal.model}</CardTitle>
        <div className="space-y-3 mb-6 mt-2 text-sm flex-grow">
          <div className="flex items-center gap-3 text-muted-foreground">
            <ArrowUpToLine className="w-5 h-5 text-primary" />
            <span>Altura Máx: <span className="font-semibold text-foreground">{puntal.maxHeight} cm</span></span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Weight className="w-5 h-5 text-primary" />
            <span>Carga Máx: <span className="font-semibold text-foreground">{maxLoad.toLocaleString('es-ES')} kg</span></span>
          </div>
        </div>
        <Button onClick={() => onQuoteClick(puntal.id)} className="w-full mt-auto">
          Ver Detalles y Cotizar <MoveRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};


export const PuntalesDestacados = () => {
  const handleQuoteClick = (puntalId: string) => {
    const formSection = document.getElementById('formulario');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="puntales-destacados" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">Nuestros Modelos de Puntales</h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Soluciones robustas y seguras para cada tipo de proyecto. Fabricados bajo norma europea, garantizan máxima durabilidad y resistencia.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {puntalesData.map(puntal => (
            <PuntalCard key={puntal.id} puntal={puntal} onQuoteClick={handleQuoteClick} />
          ))}
        </div>
        <div className="flex items-center justify-center gap-3 mt-10 text-2xl md:text-3xl font-bold text-green-600">
          <CheckCircle className="w-8 h-8 md:w-9 md:h-9" />
          <span>Stock siempre disponible</span>
        </div>
      </div>
    </section>
  );
};
