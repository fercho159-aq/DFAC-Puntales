
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import PuntalSelector from '@/components/puntal-selector';
import { Phone, Menu, X, CheckCircle, Shield, Users, Truck, Clock, PackageCheck, Quote, Wrench, Layers, Anchor, Waves, Building2, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
import { Button } from '@/components/ui/button';
import { ContactModal } from '@/components/contact-modal';
import { UrgentMaterialModal } from '@/components/urgent-material-modal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import Autoplay from "embla-carousel-autoplay";
import { FacebookIcon, TikTokIcon } from '@/components/icons';
import { Instagram } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Flipbook } from '@/components/flipbook';
import { PuntalesDestacados } from '@/components/puntales-destacados';


const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#puntales-destacados', label: 'Puntales' },
  { href: '#modelos', label: 'Calculadora' },
  { href: '#accesorios', label: 'Accesorios' },
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#galeria', label: 'Galería' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#formulario', label: 'Cotizador' },
  { href: '#contacto', label: 'Contacto' },
];

const clientes = [
  { name: 'BBVA', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/15/BBVA_Bancomer_logo.svg' },
  { name: 'Aeropuerto Internacional Felipe Ángeles', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/60/010aeropuerto-felipe-angeles-2.jpg' },
  { name: 'Secretaría de Marina', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/SEMAR_Logo_2019.svg' },
  { name: 'UNAM', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Escudo-UNAM-escalable.svg' },
];

const beneficios = [
  {
    icon: Truck,
    title: 'Entrega en Menos de 24h',
    description: 'Recibe tu material en obra con nuestra garantía de entrega express para no detener tu proyecto.'
  },
  {
    icon: Shield,
    title: 'Seguridad Certificada',
    description: 'Fabricados en acero S235JR bajo norma europea UNE-EN 1065, con tablas de carga verificadas y un factor de seguridad de 1.7 respecto al valor de ruptura, según el documento de certificación de fábrica.'
  },
  {
    icon: CheckCircle,
    title: 'Ajuste Preciso cada 10 cm',
    description: 'Regulación de altura mediante pin de acero reforzado de 14 mm de diámetro, para agilizar el proceso de fundición de losa y optimizar los tiempos de montaje.'
  },
  {
    icon: Users,
    title: 'Durabilidad Certificada',
    description: 'Pintura electrostática probada en cámara de humedad bajo norma ASTM D2247-87, y soldadura con registro de cualificación ISO 15613:2005 (certificado No. P16W.0122), bajo regulación de fabricación UNI EN 729-2:1996.'
  }
];

const especificacionesTecnicas = [
  {
    nombre: 'Puntal Telescópico 2.00 – 3.60 m',
    fabricacion: 'Fabricado bajo norma europea en Italia',
    altura: '2.00 a 3.60 m',
    resistenciaMin: { altura: '2.00 m', carga: '1,800 kg' },
    resistenciaMax: { altura: '3.60 m', carga: '801 kg' },
    tuboInterior: 'Ø 48.30 mm · espesor 1.8/2.0 mm',
    tuboExterior: 'Ø 56.00 mm · espesor 1.8 mm',
    base: '120 × 120 × 4.5 mm',
    peso: '10.06 kg (22.13 lb)',
  },
  {
    nombre: 'Puntal Telescópico 2.20 – 4.00 m',
    fabricacion: 'Fabricado bajo norma europea en Italia',
    altura: '2.20 a 4.00 m',
    resistenciaMin: { altura: '2.20 m', carga: '1,800 kg' },
    resistenciaMax: { altura: '4.00 m', carga: '758 kg' },
    tuboInterior: 'Ø 48.30 mm · espesor 1.8/2.0 mm',
    tuboExterior: 'Ø 56.00 mm · espesor 1.8 mm',
    base: '120 × 120 × 4.5 mm',
    peso: '11.00 kg (24.25 lb)',
  },
  {
    nombre: 'Puntal Telescópico 3.20 – 5.00 m',
    fabricacion: 'Fabricado bajo norma europea en Italia',
    altura: '3.20 a 5.00 m',
    resistenciaMin: { altura: '3.20 m', carga: '1,800 kg' },
    resistenciaMax: { altura: '5.00 m', carga: '300 kg' },
    tuboInterior: 'Ø 48.30 mm · espesor 1.8/2.0 mm',
    tuboExterior: 'Ø 56.00 mm · espesor 1.8 mm',
    base: '120 × 120 × 4.5 mm',
    peso: '14.00 kg (30.86 lb)',
  },
];

const certificaciones = [
  {
    icon: PackageCheck,
    title: 'Ajuste cada 10 cm',
    description: 'Regulación de altura mediante pin de acero reforzado de 14 mm de diámetro, para agilizar el proceso de fundición de losa.',
  },
  {
    icon: Shield,
    title: 'Factor de seguridad 1.7',
    description: 'La tabla de capacidades de resistencia por altura se basa en el documento de certificación de fábrica, con un factor de seguridad de 1.7 respecto al valor de ruptura.',
  },
  {
    icon: CheckCircle,
    title: 'Prueba de humedad ASTM D2247-87',
    description: 'El puntal pasa por una prueba de humedad en cámara con pintura electrostática, bajo la norma ASTM D2247-87.',
  },
  {
    icon: Wrench,
    title: 'Soldadura certificada ISO 15613:2005',
    description: 'Registro de cualificación del proceso de soldadura según ISO 15613:2005, certificado No. P16W.0122.',
  },
];

const featuredProducts = [
    {
        name: 'Junta Ortogonal 4 Tornillos',
        description: 'Asegura uniones firmes y estables a 90 grados en andamios. Esencial para la seguridad estructural.',
        image: '/images/Productos/junta-ortogonal-4-tornillos.png',
        hint: 'scaffolding clamp',
        icon: Wrench
    },
    {
        name: 'Junta Giratoria 2 Tornillos',
        description: 'Permite uniones en ángulos variables con total seguridad. Perfecta para estructuras complejas y versátiles.',
        image: '/images/Productos/junta-giratoria-2-tornillos.png',
        hint: 'swivel coupler',
        icon: Layers
    },
    {
        name: 'Tirante tipo moño con rondana',
        description: 'Moño para cimbra con rondana de neopreno, de acero de alto carbón (5.8 mm), carga de 1,350 kg y resistencia de 2,200 kg.',
        image: '/images/Productos/moñodeneopreno.webp',
        hint: 'formwork tie',
        icon: Anchor
    },
    {
        name: 'Tirante tipo moño',
        description: 'Moño para cimbra de acero de alto carbón (5.8 mm), con capacidad de carga de 1,350 kg y resistencia máxima de 2,200 kg. COSTO POR ATADO.',
        image: '/images/Productos/Tirantetipomoño.webp',
        hint: 'formwork anchor',
        icon: Anchor
    },
    {
        name: 'Banda de PVC negra ojillada',
        description: 'Sello retenedor de agua de 25 ml. Cinta de PVC con bulbo central y laterales estriados para máxima adherencia.',
        image: '/images/Productos/BandadePVCnegraojillada.webp',
        hint: 'pvc waterstop',
        icon: Waves
    },
    {
        name: 'Viga H-20 para Cimbra',
        description: 'Fabricada con madera de alta calidad y un diseño robusto, nuestra viga H-20 garantiza la máxima eficiencia y seguridad en sus proyectos de construcción.',
        image: '/images/Productos/viga-h20.jpeg',
        hint: 'h20 beam',
        icon: Building2
    }
];

const keyFeatures = [
    {
        icon: Clock,
        title: "Entrega Express 24h",
        description: "En CDMX y área metropolitana. Tu obra no se detiene."
    },
    {
        icon: PackageCheck,
        title: "Calidad Certificada",
        description: "Productos que cumplen las más altas normas de seguridad."
    },
    {
        icon: Truck,
        title: "Logística Confiable",
        description: "Flete sin costo en pedidos que cumplen el mínimo."
    }
];

const testimonials = [
    {
        name: "Carlos Hernández",
        company: "Director de Obra, Construmex",
        comment: "La calidad de los puntales es excepcional y el servicio de entrega en menos de 24 horas es un salvavidas. Totalmente recomendados.",
        avatar: "https://placehold.co/100x100?text=CH"
    },
    {
        name: "Ana Sofía Robles",
        company: "Gerente de Compras, Edificaciones Modernas",
        comment: "DFAC es nuestro proveedor de confianza. Siempre cumplen con los tiempos y la calidad del material nos da la seguridad que necesitamos en cada proyecto.",
        avatar: "https://placehold.co/100x100?text=AR"
    },
    {
        name: "Jorge Martínez",
        company: "Residente de Obra",
        comment: "El sistema de selección en la web me ayudó a encontrar exactamente lo que necesitaba y la cotización fue inmediata. Excelente servicio.",
        avatar: "https://placehold.co/100x100?text=JM"
    }
];

const galleryImages = [
    { src: '/images/Galeria/puntales-almacen-1.jpeg', alt: 'Puntales en obra de gran altura', hint: 'construction site', className: 'col-span-12 sm:col-span-6 md:col-span-4 h-72' },
    { src: '/images/Galeria/puntales-almacen-2.jpeg', alt: 'Almacén de puntales metálicos', hint: 'construction equipment', className: 'col-span-12 sm:col-span-6 md:col-span-4 h-72' },
    { src: '/images/Galeria/WhatsApp Image 2025-08-27 at 1.27.06 PM.jpeg', alt: 'Detalle de puntal de acero reforzado', hint: 'steel props', className: 'col-span-12 sm:col-span-6 md:col-span-4 h-72' },
    { src: '/images/Galeria/WhatsApp Image 2025-08-27 at 1.27.05 PM.jpeg', alt: 'Trabajadores ajustando puntales', hint: 'construction workers', className: 'col-span-12 sm:col-span-6 h-80' },
    { src: '/images/Galeria/WhatsApp Image 2025-08-27 at 1.27.04 PM.jpeg', alt: 'Vista panorámica de cimbra con puntales', hint: 'formwork structure', className: 'col-span-12 sm:col-span-6 h-80' },
    { src: '/images/Galeria/WhatsApp Image 2025-08-27 at 1.27.03 PM.jpeg', alt: 'Puntales listos para entrega', hint: 'building materials', className: 'col-span-12 h-[26rem]' },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const catalogPdfUrl = "/archivos/CATALOGO-2026.pdf";
  const [isUrgentModalOpen, setIsUrgentModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      // Show the modal only once per session
      if (!sessionStorage.getItem('urgentModalShown')) {
        setIsUrgentModalOpen(true);
        sessionStorage.setItem('urgentModalShown', 'true');
      }
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (key: string) => ((data.get(key) as string) || '').trim();
    const lines = [
      'Hola, quiero solicitar una cotización:',
      `• Nombre: ${get('nombre')}`,
      `• Teléfono: ${get('telefono')}`,
      get('empresa') && `• Empresa: ${get('empresa')}`,
      `• Producto de interés: ${get('producto')}`,
      get('cantidad') && `• Cantidad aproximada: ${get('cantidad')}`,
      get('ubicacion') && `• Ubicación de la obra: ${get('ubicacion')}`,
      get('mensaje') && `• Mensaje: ${get('mensaje')}`,
    ].filter(Boolean) as string[];
    const url = `https://wa.me/5215549414017?text=${encodeURIComponent(lines.join('\n'))}`;
    if (typeof window !== 'undefined' && typeof (window as any).gtag_report_conversion === 'function') {
      (window as any).gtag_report_conversion(url);
    } else {
      window.open(url, '_blank');
    }
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };


  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="py-4 px-4 md:px-8 border-b border-border/40 bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#inicio" onClick={(e) => handleNavLinkClick(e, '#inicio')} className="flex items-center gap-3">
            <Image src="/images/dfac-logo.webp" alt="DFAC Accesorios para Cimbras Logo" width={393} height={134} className="h-10 w-auto" />
            <span className="sr-only">DFAC Accesorios para Cimbras</span>
          </a>
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={(e) => handleNavLinkClick(e, link.href)} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Button onClick={() => setIsModalOpen(true)} className="hidden sm:inline-flex" variant="outline">
              Solicitar Cotización
            </Button>
            <Button onClick={() => setIsMenuOpen(!isMenuOpen)} variant="ghost" size="icon" className="lg:hidden">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-background/95 p-4 rounded-md">
            <nav className="flex flex-col gap-4">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={(e) => handleNavLinkClick(e, link.href)} className="text-base font-medium text-foreground hover:text-primary transition-colors py-2">
                  {link.label}
                </a>
              ))}
              <Button onClick={() => setIsModalOpen(true)} className="w-full mt-4">
                Solicitar Cotización
              </Button>
               <div className="flex gap-4 items-center justify-center mt-4">
                <a href="https://www.facebook.com/bandasdepvcymonosparacimbra/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <FacebookIcon className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://www.instagram.com/dfac_cimbra/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://www.tiktok.com/@accesorios.dfac" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <TikTokIcon className="h-6 w-6" />
                  <span className="sr-only">TikTok</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <section id="inicio" className="relative w-full bg-black text-white overflow-hidden">
           <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/videos/VIDEO-2025-08-05-12-37-33.mp4"
              autoPlay
              muted
              loop
              playsInline
            >
              Tu navegador no soporta el tag de video.
            </video>
           <div className="absolute inset-0 bg-black/70 z-10"></div>
           <div className="relative z-20 container mx-auto px-4 text-center flex flex-col items-center justify-center min-h-[calc(100vh-80px)] py-12 md:py-24">
              <div className="max-w-4xl">
                  <div className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-sm mb-4 border border-primary/50 font-medium">
                      ¡Entrega garantizada en menos de 24 horas!
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tighter !leading-tight">
                      La <span className="text-primary">Solución Rápida</span> y Segura para tu Construcción
                  </h1>
                  <p className="mt-4 text-base md:text-xl text-white/80 max-w-3xl mx-auto">
                      Puntales, accesorios y todo lo que necesitas para tu obra, con entrega garantizada en menos de 24 horas. Calidad que construye confianza.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                      <Button size="lg" onClick={() => {
                        const el = document.getElementById('formulario');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}>
                          <ArrowRight className="mr-2 h-5 w-5"/> Iniciar Cotización
                      </Button>
                      <Button size="lg" variant="outline" className="bg-transparent text-white border-white/80 hover:bg-white hover:text-primary" onClick={() => {
                        const el = document.getElementById('puntales-destacados');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}>
                           Ver Catálogo
                      </Button>
                  </div>

                  <div className="mt-12 w-full max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                        {keyFeatures.map((feature, index) => (
                          <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center gap-4 border border-white/20">
                            <feature.icon className="w-8 h-8 text-primary flex-shrink-0"/>
                            <div>
                                <h3 className="font-bold text-white">{feature.title}</h3>
                                <p className="text-white/80 text-sm">{feature.description}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
              </div>
           </div>
        </section>
        
        <PuntalesDestacados />

        <section id="beneficios" className="py-16 md:py-24">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Beneficios Técnicos DFAC</h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Puntales certificados que cumplen con los estándares de fabricación más estrictos de la industria.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {beneficios.map((feature, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0 text-primary bg-primary/10 p-4 rounded-full">
                    <feature.icon className="w-8 h-8"/>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="especificaciones" className="py-16 md:py-24 bg-card">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Ficha Técnica: Puntal Telescópico</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Tabla de resistencias por altura con base en el documento de certificación enviado por
                fábrica, para que conozcas exactamente la capacidad de carga de cada modelo DFAC.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left py-3 pr-4 font-bold">Modelo</th>
                    <th className="text-left py-3 px-4 font-bold">Resistencia altura mínima</th>
                    <th className="text-left py-3 px-4 font-bold">Resistencia altura máxima</th>
                    <th className="text-left py-3 px-4 font-bold">Tubo interior</th>
                    <th className="text-left py-3 px-4 font-bold">Tubo exterior</th>
                    <th className="text-left py-3 px-4 font-bold">Base</th>
                    <th className="text-left py-3 pl-4 font-bold">Peso</th>
                  </tr>
                </thead>
                <tbody>
                  {especificacionesTecnicas.map((e) => (
                    <tr key={e.nombre} className="border-b border-border/50">
                      <td className="py-4 pr-4 font-semibold">{e.nombre}<br /><span className="font-normal text-xs text-muted-foreground">{e.fabricacion}</span></td>
                      <td className="py-4 px-4 text-muted-foreground">{e.resistenciaMin.altura} = {e.resistenciaMin.carga}</td>
                      <td className="py-4 px-4 text-muted-foreground">{e.resistenciaMax.altura} = {e.resistenciaMax.carga}</td>
                      <td className="py-4 px-4 text-muted-foreground">{e.tuboInterior}</td>
                      <td className="py-4 px-4 text-muted-foreground">{e.tuboExterior}</td>
                      <td className="py-4 px-4 text-muted-foreground">{e.base}</td>
                      <td className="py-4 pl-4 text-muted-foreground">{e.peso}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {certificaciones.map((c) => (
                <Card key={c.title} className="shadow-md">
                  <CardHeader>
                    <c.icon className="w-9 h-9 text-primary" />
                    <CardTitle className="text-base mt-2">{c.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{c.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-muted-foreground max-w-3xl mx-auto">
              Fácil instalación, poco mantenimiento, durabilidad y resistencia. Tipo de acero S235JR, bajo
              regulación de fabricación UNI EN 729-2:1996.
            </p>
          </div>
        </section>

        <section id="clientes" className="py-16 md:py-24">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Confían en Nosotros</h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Empresas y proyectos líderes en la industria de la construcción respaldan la calidad y seguridad de los productos DFAC.
              </p>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent className="-ml-8">
                {clientes.map((cliente, index) => (
                  <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4 pl-8">
                    <div className="p-1">
                      <div className="flex items-center justify-center p-6 h-32 bg-background rounded-lg grayscale hover:grayscale-0 transition-all duration-300">
                         <Image src={cliente.logo} alt={cliente.name} width={150} height={60} className="object-contain max-h-full max-w-full" data-ai-hint="company logo" />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>

        <section id="galeria" className="py-12 md:py-16">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Nuestros Productos en Acción</h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Vea la calidad y versatilidad de nuestros puntales en proyectos de construcción reales.
              </p>
            </div>
            <div className="grid grid-cols-12 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className={cn("overflow-hidden rounded-lg group relative", image.className)}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    data-ai-hint={image.hint}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 text-white p-2 bg-black/20 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-bold text-sm">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="nosotros" className="py-16 md:py-24 bg-card">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in-0 slide-in-from-left-12 duration-500">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Más de 10 Años Construyendo Confianza</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Desde 2013, en DFAC nos hemos dedicado a ofrecer un servicio rápido y eficiente, convirtiéndonos en un referente de confianza en el sector.
                </p>
                <p>
                  Nuestra filosofía de excelencia nos ha permitido crecer y equiparnos con maquinaria especializada para fabricar productos de la más alta calidad, garantizando entregas rápidas y la satisfacción de nuestros clientes.
                </p>
                <p>
                  Hoy, agradecemos a quienes confían en nosotros y seguimos comprometidos con los valores que nos vieron nacer.
                </p>
              </div>
            </div>
            <div className="animate-in fade-in-0 slide-in-from-right-12 duration-500 overflow-hidden rounded-lg shadow-xl shadow-primary/10">
               <Image
                    src="/images/Galeria/WhatsApp Image 2025-08-27 at 1.27.04 PM.jpeg"
                    alt="Trabajadores en obra"
                    width={600}
                    height={450}
                    className="object-cover w-full h-72 md:h-96"
                    data-ai-hint="construction workers"
                  />
            </div>
          </div>
        </section>

        <section id="modelos" className="py-16 md:py-24">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">Encuentra y Cotiza tu Puntal Ideal</h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Utiliza nuestra herramienta interactiva para seleccionar el modelo que necesitas. Ajusta la altura y descubre al instante la capacidad de carga. ¡Obtener una cotización nunca fue tan fácil!
              </p>
            </div>
            <PuntalSelector onCtaClick={() => setIsModalOpen(true)} />
          </div>
        </section>
        
        <section id="testimonios" className="py-16 md:py-24">
            <div className="container mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold">Lo que dicen nuestros clientes</h2>
                    <p className="text-muted-foreground mt-4 text-lg">
                        La confianza y satisfacción de nuestros clientes es nuestra mejor carta de presentación.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="flex flex-col justify-between p-6 bg-card border-border shadow-lg">
                            <CardContent className="p-0">
                                <Quote className="w-10 h-10 text-primary/40 mb-4" />
                                <p className="text-muted-foreground mb-6 text-base">{testimonial.comment}</p>
                            </CardContent>
                            <CardHeader className="p-0 flex flex-row items-center gap-4 border-t border-border pt-6 mt-auto">
                                <Avatar className="w-12 h-12">
                                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person portrait"/>
                                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle className="text-base font-bold">{testimonial.name}</CardTitle>
                                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>


        <section id="accesorios" className="py-16 md:py-24 bg-card">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold">Completa tu Equipo con Nuestros Accesorios</h2>
                    <p className="text-muted-foreground mt-4 text-lg">
                        Desde juntas de alta resistencia hasta vigas y moños, tenemos todo lo necesario para asegurar la máxima versatilidad y seguridad en tu obra.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {featuredProducts.map((product, index) => (
                        <Card key={index} className="overflow-hidden bg-background shadow-md hover:shadow-primary/20 transition-all duration-300 flex flex-col group transform hover:-translate-y-1">
                            <CardHeader className="p-0 bg-white">
                                <div className="relative w-full aspect-[3/2]">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-6"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        data-ai-hint={product.hint}
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="p-6 flex flex-col flex-grow">
                                <div className="flex items-start gap-4 mb-3">
                                    <product.icon className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                                    <h3 className="text-xl font-bold">{product.name}</h3>
                                </div>
                                <CardDescription className="mb-6 flex-grow">{product.description}</CardDescription>
                                <Button onClick={() => setIsModalOpen(true)} variant="outline" className="w-full mt-auto group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                                    Solicitar Cotización
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section id="catalogo" className="py-16 md:py-24">
            <div className="container mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Nuestro <span className="text-primary">Catálogo 2026</span></h2>
                    <p className="text-muted-foreground mt-4 text-lg">Hojéalo como un libro o descárgalo en PDF.</p>
                </div>
                <Flipbook pdfUrl={catalogPdfUrl} />
            </div>
        </section>

        <section id="contacto" className="py-16 md:py-24 text-center bg-primary text-white">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">¿Listo para Optimizar tu Obra?</h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Contacta ahora y recibe tu material en menos de 24 horas. ¡Garantizado!
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6">
              <Button size="lg" variant="secondary" onClick={() => setIsModalOpen(true)}>
                <WhatsAppIcon className="mr-2 h-5 w-5"/> Solicitar Cotización
              </Button>
              <a href="tel:+525525989751" className="flex items-center gap-2 hover:underline text-lg font-semibold">
                <Phone className="w-5 h-5" />
                <span>Llámanos: (55) 2598-9751</span>
              </a>
            </div>
          </div>
        </section>

        <section id="formulario" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Solicita tu Cotización por WhatsApp</h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Llena el formulario y recibe atención inmediata. Tu información se envía directo a nuestro WhatsApp.
              </p>
            </div>
            <form onSubmit={handleWhatsAppFormSubmit} className="max-w-3xl mx-auto bg-card border border-border/50 rounded-xl shadow-lg p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre completo *</Label>
                <Input id="nombre" name="nombre" required placeholder="Ej. Juan Pérez" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefono">Teléfono *</Label>
                <Input id="telefono" name="telefono" type="tel" required placeholder="Ej. 55 1234 5678" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="empresa">Empresa (opcional)</Label>
                <Input id="empresa" name="empresa" placeholder="Ej. Constructora XYZ" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="producto">Producto de interés *</Label>
                <select
                  id="producto"
                  name="producto"
                  required
                  defaultValue=""
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="" disabled>Selecciona un producto</option>
                  <option>Puntal Ligero 1.80-3.20</option>
                  <option>Puntal Ligero 2.20-4.00</option>
                  <option>Puntal B40 2.31-4.00 (Reforzado)</option>
                  <option>Puntal B50 2.81-5.00 (Extra Fuerte)</option>
                  <option>Accesorios para cimbra</option>
                  <option>Viga H-20</option>
                  <option>Otro</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cantidad">Cantidad aproximada</Label>
                <Input id="cantidad" name="cantidad" placeholder="Ej. 100 piezas" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ubicacion">Ubicación de la obra</Label>
                <Input id="ubicacion" name="ubicacion" placeholder="Ej. Iztacalco, CDMX" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="mensaje">Mensaje adicional</Label>
                <Textarea id="mensaje" name="mensaje" rows={4} placeholder="Cuéntanos más sobre tu proyecto o si necesitas entrega urgente..." />
              </div>
              <div className="md:col-span-2">
                <Button type="submit" size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
                  <WhatsAppIcon className="mr-2 h-5 w-5" /> Enviar por WhatsApp
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Al enviar se abrirá WhatsApp con tu información lista para mandarnos.
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-card text-secondary-foreground border-t border-border/50">
        <div className="container mx-auto py-12 px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left items-start">
            <div className="md:col-span-1">
               <Image src="/images/dfac-logo.webp" alt="DFAC Accesorios para Cimbras Logo" width={393} height={134} className="h-10 w-auto mx-auto md:mx-0" />
              <a href="https://share.google/hwzR1S3CALFM9tOW" target="_blank" rel="noopener noreferrer" className="text-sm mt-4 text-muted-foreground hover:text-primary transition-colors block">Cuauhtémoc 105, San Pedro Iztacalco, Iztacalco, 08220 Ciudad de México, CDMX</a>
              <p className="text-sm text-muted-foreground">ventas@cimbrayaccesorios.com.mx</p>
              <div className="mt-4 rounded-lg overflow-hidden border border-border/50 h-[180px]">
                <iframe
                  title="Ubicación de DFAC en Google Maps"
                  src="https://maps.google.com/maps?q=Cuauht%C3%A9moc%20105%2C%20San%20Pedro%20Iztacalco%2C%20Iztacalco%2C%2008220%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div>
               <h3 className="font-bold text-lg mb-4 text-primary">Enlaces Rápidos</h3>
               <nav className="flex flex-col gap-2">
                 {navLinks.map(link => (
                   <a key={link.href} href={link.href} onClick={(e) => handleNavLinkClick(e, link.href)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                     {link.label}
                   </a>
                 ))}
               </nav>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-primary">Contacto Directo</h3>
              <div className="flex flex-col items-center md:items-start gap-2 text-sm">
                 <a href="tel:+525525989751" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>(55) 2598-9751</span>
                </a>
                 <a href="tel:+525541673745" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>(55) 4167-3745</span>
                </a>
                 <a href="tel:+525555715084" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>(55) 5571-5084</span>
                </a>
              </div>
            </div>
             <div>
              <h3 className="font-bold text-lg mb-4 text-primary">Síguenos</h3>
              <div className="flex justify-center md:justify-start gap-4">
                <a href="https://www.facebook.com/bandasdepvcymonosparacimbra/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <FacebookIcon className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://www.instagram.com/dfac_cimbra/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://www.tiktok.com/@accesorios.dfac" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <TikTokIcon className="h-6 w-6" />
                  <span className="sr-only">TikTok</span>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-xs text-muted-foreground mt-10 border-t border-border/50 pt-6">
            <p>&copy; {new Date().getFullYear()} DFAC. Todos los derechos reservados. | <a href="#" className="hover:text-primary">Aviso de Privacidad</a></p>
          </div>
        </div>
      </footer>

      <ContactModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
      <UrgentMaterialModal isOpen={isUrgentModalOpen} onOpenChange={setIsUrgentModalOpen} />
       <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3">
        <Button
          asChild
          className={cn(
            "rounded-full shadow-lg p-4 h-16 w-16 bg-green-500 hover:bg-green-600"
          )}
        >
          <a href="https://wa.me/5215549414017?text=Hola,%20me%20gustaría%20solicitar%20una%20cotización." target="_blank" rel="noopener noreferrer" onClick={(e) => {
            e.preventDefault();
            const url = "https://wa.me/5215549414017?text=Hola,%20me%20gustaría%20solicitar%20una%20cotización.";
            if (typeof window !== 'undefined' && typeof (window as any).gtag_report_conversion === 'function') {
              (window as any).gtag_report_conversion(url);
            } else {
              window.open(url, '_blank');
            }
          }}>
            <WhatsAppIcon className="h-7 w-7 text-white" />
            <span className="sr-only">Contactar por WhatsApp (línea 1)</span>
          </a>
        </Button>
        <Button
          asChild
          className={cn(
            "rounded-full shadow-lg p-4 h-16 w-16 bg-green-500 hover:bg-green-600"
          )}
        >
          <a href="https://wa.me/5215519538328?text=Hola,%20me%20gustaría%20solicitar%20una%20cotización." target="_blank" rel="noopener noreferrer" onClick={(e) => {
            e.preventDefault();
            const url = "https://wa.me/5215519538328?text=Hola,%20me%20gustaría%20solicitar%20una%20cotización.";
            if (typeof window !== 'undefined' && typeof (window as any).gtag_report_conversion === 'function') {
              (window as any).gtag_report_conversion(url);
            } else {
              window.open(url, '_blank');
            }
          }}>
            <WhatsAppIcon className="h-7 w-7 text-white" />
            <span className="sr-only">Contactar por WhatsApp (línea 2)</span>
          </a>
        </Button>
        <Button
          asChild
          className={cn(
            "rounded-full shadow-lg p-4 h-16 w-16"
          )}
        >
          <a href="tel:+525525989751">
            <Phone className="h-7 w-7" />
            <span className="sr-only">Llamar ahora</span>
          </a>
        </Button>
      </div>
    </div>
  );
}

    
