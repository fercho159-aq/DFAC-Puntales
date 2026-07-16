
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare } from 'lucide-react';
import type { Dispatch, SetStateAction } from 'react';

interface UrgentMaterialModalProps {
  isOpen: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

export function UrgentMaterialModal({ isOpen, onOpenChange }: UrgentMaterialModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md text-center">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary font-bold">
            ¿Necesitas material urgente?
          </DialogTitle>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <p className="text-muted-foreground">
            Nuestro equipo está listo para atender tu pedido de inmediato. ¡Contáctanos ahora!
          </p>
          <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white" onClick={(e) => {
            e.preventDefault();
            const url = "https://wa.me/5215549414017?text=Hola,%20necesito%20material%20urgente.";
            if (typeof window !== 'undefined' && typeof (window as any).gtag_report_conversion === 'function') {
              (window as any).gtag_report_conversion(url);
            } else {
              window.open(url, '_blank');
            }
          }}>
            <span className="flex items-center justify-center gap-3">
              <MessageSquare className="h-5 w-5" />
              Contactar por WhatsApp
            </span>
          </Button>
          <Button asChild size="lg" className="w-full">
            <a href="tel:+525525989751" className="flex items-center justify-center gap-3">
              <Phone className="h-5 w-5" />
              Llamar Ahora: (55) 2598-9751
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
