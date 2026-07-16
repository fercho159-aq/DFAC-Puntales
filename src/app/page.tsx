
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import PuntalSelector from '@/components/puntal-selector';
import { Phone, MessageSquare, Menu, X, CheckCircle, Shield, Users, Truck, Clock, PackageCheck, Quote, Wrench, Layers, Anchor, Waves, Building2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactModal } from '@/components/contact-modal';
import { UrgentMaterialModal } from '@/components/urgent-material-modal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Autoplay from "embla-carousel-autoplay";
import { FacebookIcon } from '@/components/icons';
import { Instagram } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PuntalesDestacados } from '@/components/puntales-destacados';


const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#puntales-destacados', label: 'Puntales' },
  { href: '#accesorios', label: 'Accesorios' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#galeria', label: 'Galería' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#modelos', label: 'Cotizador' },
  { href: '#contacto', label: 'Contacto' },
];

const clientes = [
  { name: 'BBVA', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/15/BBVA_Bancomer_logo.svg' },
  { name: 'Aeropuerto Internacional Felipe Ángeles', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/60/010aeropuerto-felipe-angeles-2.jpg' },
  { name: 'Secretaría de Marina', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/SEMAR_Logo_2019.svg/2560px-SEMAR_Logo_2019.svg.png' },
  { name: 'UNAM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Escudo-UNAM-escalable.svg/1024px-Escudo-UNAM-escalable.svg.png' },
];

const beneficios = [
  {
    icon: Truck,
    title: 'Entrega en Menos de 24h',
    description: 'Recibe tu material en obra con nuestra garantía de entrega express para no detener tu proyecto.'
  },
  {
    icon: Shield,
    title: 'Seguridad en Obra',
    description: 'Nuestros puntales cumplen con las más altas normas de seguridad para garantizar la protección en tu proyecto.'
  },
  {
    icon: CheckCircle,
    title: 'Montaje Rápido',
    description: 'Diseñados para un ensamblaje y desmontaje eficiente, optimizando los tiempos de trabajo.'
  },
  {
    icon: Users,
    title: 'Durabilidad Comprobada',
    description: 'Fabricados con acero de alta calidad que asegura una larga vida útil y resistencia a la corrosión.'
  }
];

const featuredProducts = [
    {
        name: 'Junta Ortogonal 4 Tornillos',
        description: 'Asegura uniones firmes y estables a 90 grados en andamios. Esencial para la seguridad estructural.',
        image: 'https://www.gbmitaly.com/resources/images/giunti/GO04.jpg',
        hint: 'scaffolding clamp',
        icon: Wrench
    },
    {
        name: 'Junta Giratoria 2 Tornillos',
        description: 'Permite uniones en ángulos variables con total seguridad. Perfecta para estructuras complejas y versátiles.',
        image: 'https://m.media-amazon.com/images/I/511uP1r-GrL._UF894,1000_QL80_.jpg',
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
        image: '/images/Productos/Vigas.webp',
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
    { src: '/images/Galeria/WhatsApp Image 2025-08-27 at 1.27.08 PM.jpeg', alt: 'Puntales en obra de gran altura', hint: 'construction site', className: 'col-span-12 sm:col-span-6 md:col-span-4' },
    { src: '/images/Galeria/WhatsApp Image 2025-08-27 at 1.27.07 PM.jpeg', alt: 'Almacén de puntales metálicos', hint: 'construction equipment', className: 'col-span-12 sm:col-span-6 md:col-span-4' },
    { src: '/images/Galeria/WhatsApp Image 2025-08-27 at 1.27.06 PM.jpeg', alt: 'Detalle de puntal de acero reforzado', hint: 'steel props', className: 'col-span-12 sm:col-span-6 md:col-span-4' },
    { src: '/images/Galeria/WhatsApp Image 2025-08-27 at 1.27.05 PM.jpeg', alt: 'Trabajadores ajustando puntales', hint: 'construction workers', className: 'col-span-12 sm:col-span-6' },
    { src: '/images/Galeria/WhatsApp Image 2025-08-27 at 1.27.04 PM.jpeg', alt: 'Vista panorámica de cimbra con puntales', hint: 'formwork structure', className: 'col-span-12 sm:col-span-6' },
    { src: '/images/Galeria/WhatsApp Image 2025-08-27 at 1.27.03 PM.jpeg', alt: 'Puntales listos para entrega', hint: 'building materials', className: 'col-span-12' },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
            <Image src="/images/Recurso-2.png.webp" alt="DFAC Accesorios para Cimbras Logo" width={180} height={40} className="h-10 w-auto" />
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
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <section id="inicio" className="w-full bg-card">
           <div className="container mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)] py-16 lg:py-0">
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter !leading-tight">
                          La <span className="text-primary">Solución Rápida</span> y Segura para tu Construcción
                      </h1>
                      <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl">
                          Puntales, accesorios y todo lo que necesitas para tu obra, con entrega garantizada en menos de 24 horas. Calidad que construye confianza.
                      </p>
                      <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 w-full md:w-auto">
                          <Button size="lg" onClick={() => {
                            const el = document.getElementById('modelos');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }}>
                              <ArrowRight className="mr-2 h-5 w-5"/> Iniciar Cotización
                          </Button>
                          <Button size="lg" variant="outline">
                               Ver Catálogo
                          </Button>
                      </div>
                  </div>
                  <div className="w-full h-[300px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl shadow-primary/20">
                    <video
                      className="w-full h-full object-cover"
                      src="/videos/VIDEO-2025-08-05-12-37-33.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      Tu navegador no soporta el tag de video.
                    </video>
                  </div>
              </div>
           </div>
        </section>
        
        <section id="beneficios" className="py-16 md:py-24">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {keyFeatures.map((feature, index) => (
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
                            <CardHeader className="p-0">
                                <Image 
                                    src={product.image}
                                    alt={product.name}
                                    width={600}
                                    height={400}
                                    className="object-cover aspect-[3/2] w-full"
                                    data-ai-hint={product.hint}
                                />
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
        
        <section id="clientes" className="py-16 md:py-24 bg-card">
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
                    width={800}
                    height={800}
                    className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
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

        <PuntalesDestacados />
        
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
                    className="object-cover w-full h-full"
                    data-ai-hint="construction workers"
                  />
            </div>
          </div>
        </section>

        <section id="modelos" className="py-16 md:py-24 hidden">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold">Encuentra y Cotiza tu Puntal Ideal</h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Utiliza nuestra herramienta interactiva para seleccionar el modelo que necesitas. Ajusta la altura y descubre al instante la capacidad de carga. ¡Obtener una cotización nunca fue tan fácil!
              </p>
            </div>
            <PuntalSelector />
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


        <section id="contacto" className="py-16 md:py-24 text-center bg-gradient-to-r from-primary to-orange-400 text-white">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">¿Listo para Optimizar tu Obra?</h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Contacta ahora y recibe tu material en menos de 24 horas. ¡Garantizado!
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6">
              <Button size="lg" variant="secondary" onClick={() => setIsModalOpen(true)}>
                <MessageSquare className="mr-2 h-5 w-5"/> Solicitar Cotización
              </Button>
              <a href="tel:+525525989751" className="flex items-center gap-2 hover:underline text-lg font-semibold">
                <Phone className="w-5 h-5" />
                <span>Llámanos: (55) 2598-9751</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card text-secondary-foreground border-t border-border/50">
        <div className="container mx-auto py-12 px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left items-start">
            <div className="md:col-span-1">
               <Image src="/images/Recurso-2.png.webp" alt="DFAC Accesorios para Cimbras Logo" width={180} height={40} className="h-10 w-auto mx-auto md:mx-0" />
              <p className="text-sm mt-4 text-muted-foreground">Cuauhtémoc 105, San Pedro Iztacalco, Iztacalco, 08220 Ciudad de México, CDMX</p>
              <p className="text-sm text-muted-foreground">ventas@cimbrayaccesorios.com.mx</p>
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
            <MessageSquare className="h-7 w-7 text-white" />
            <span className="sr-only">Contactar por WhatsApp</span>
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

    
