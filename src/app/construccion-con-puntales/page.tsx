
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Shield, Wrench, Scaling, CheckCircle, ArrowUpToLine, Weight, Ruler, ArrowLeft, MapPin } from 'lucide-react';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';

const WA_URL = 'https://wa.me/5215549414017?text=Hola,%20me%20interesa%20información%20sobre%20puntales%20para%20construcción.';
const WA_URL_2 = 'https://wa.me/5215519538328?text=Hola,%20me%20interesa%20información%20sobre%20puntales%20para%20construcción.';
const TEL = '+525525989751';
const TEL_DISPLAY = '55 2598 9751';

export const metadata: Metadata = {
  title: 'Construcción con Puntales | DFAC Accesorios para Cimbra',
  description:
    'Puntales metálicos certificados para construcción: telescópicos, reforzados y extra fuertes. Diferentes capacidades de carga y altura. Asesoría y cotización inmediata.',
};

const beneficios = [
  {
    icon: Shield,
    title: 'Resistencia Certificada',
    description: 'Fabricados en acero S235JR bajo norma europea UNE-EN 1065, con tablas de carga verificadas.',
  },
  {
    icon: Wrench,
    title: 'Durabilidad',
    description: 'Pintura por inmersión probada en cámara de humedad (ASTM D2247-87) para larga vida útil en obra.',
  },
  {
    icon: Scaling,
    title: 'Versatilidad',
    description: 'Altura regulable cada 100 mm: un mismo puntal cubre losas, trabes y cimbras de distintas alturas.',
  },
  {
    icon: CheckCircle,
    title: 'Seguridad',
    description: 'Sistema anti aplastamiento de manos y gancho de seguridad Ø14 mm entre tubo interior y exterior.',
  },
];

const modelos = [
  {
    nombre: 'Puntal Ligero 1.80 – 3.20 m',
    imagen: '/images/puntales/ligero-180-320.jpg',
    specs: [
      'Altura: 1.80 a 3.20 m',
      'Carga máxima: 2,800 kg',
      'Tubos: Ø 60 / Ø 48 mm',
      'Placas: 120 × 120 × 4.5 mm',
      'Acero S235 JR · UNE-EN 1065',
    ],
  },
  {
    nombre: 'Puntal Ligero 2.20 – 4.00 m',
    imagen: '/images/puntales/ligero-220-400.jpg',
    specs: [
      'Altura: 2.20 a 4.00 m',
      'Carga máxima: 2,200 kg',
      'Tubos: Ø 60 / Ø 56 mm',
      'Placas: 120 × 120 × 4.5 mm',
      'Acero S235 JR · UNE-EN 1065',
    ],
  },
  {
    nombre: 'Puntal B40 2.31 – 4.00 m (Reforzado)',
    imagen: '/images/puntales/b40-231-400.jpg',
    specs: [
      'Altura: 2.31 a 4.00 m',
      'Carga máxima: 3,500 kg',
      'Tubos: Ø 56 / Ø 48.3 mm',
      'Placas: 120 × 120 × 4.5 mm',
      'Acero S235 JR · UNE-EN 1065',
    ],
  },
  {
    nombre: 'Puntal B50 2.81 – 5.00 m (Extra Fuerte)',
    imagen: '/images/puntales/b50-281-500.jpg',
    specs: [
      'Altura: 2.81 a 5.00 m',
      'Carga máxima: 4,000 kg',
      'Tubos: Ø 60 / Ø 48 mm',
      'Placas: 120 × 120 × 6 mm',
      'Acero S355 JR · UNE-EN 1065',
    ],
  },
];

const especificacionesTecnicas = [
  {
    nombre: 'Puntal Telescópico 1.80 – 3.00 m',
    fabricacion: 'Fabricado bajo norma europea en Italia',
    altura: '1.80 a 3.00 m',
    resistenciaMin: { altura: '1.80 m', carga: '1,800 kg' },
    resistenciaMax: { altura: '3.00 m', carga: '801 kg' },
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
    icon: Ruler,
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

const usos = [
  'Apuntalamiento de losas y trabes durante el colado',
  'Soporte temporal de cimbra para muros y columnas',
  'Reapuntalamiento en edificaciones de varios niveles',
  'Apeo y estabilización en remodelaciones y reforzamientos',
];

export default function ConstruccionConPuntalesPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <Image src="/images/dfac-logo.webp" alt="DFAC Accesorios para Cimbras Logo" width={393} height={134} className="h-10 w-auto" />
          </Link>
          <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" /> Volver al inicio
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 md:py-24 px-4 bg-secondary/30">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Construcción con Puntales</h1>
            <p className="mt-6 text-lg text-muted-foreground">
              En DFAC contamos con puntales metálicos certificados con diferentes capacidades de carga y
              altura. Son elementos verticales que se adaptan a cada etapa de tu obra: desde el colado de
              losas hasta el reapuntalamiento de estructuras.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2 h-5 w-5" /> Cotizar por WhatsApp (línea 1)
                </a>
              </Button>
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                <a href={WA_URL_2} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2 h-5 w-5" /> Cotizar por WhatsApp (línea 2)
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${TEL}`}>
                  <Phone className="mr-2 h-5 w-5" /> {TEL_DISPLAY}
                </a>
              </Button>
            </div>
          </div>
          <div className="relative h-[340px] md:h-[420px] bg-white rounded-xl shadow-lg overflow-hidden">
            <Image
              src="/images/puntales/b50-281-500.jpg"
              alt="Puntal metálico extensible DFAC"
              fill
              className="object-contain p-8"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Qué es un puntal + beneficios */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold">¿Qué es un Puntal?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Un puntal es un accesorio en forma de tubo telescópico que se utiliza en la construcción como
              soporte vertical temporal. Sostiene cimbras, losas y trabes mientras el concreto alcanza su
              resistencia, garantizando la seguridad de la estructura y del personal en obra.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {beneficios.map((b) => (
              <Card key={b.title} className="text-center shadow-md">
                <CardHeader>
                  <b.icon className="w-10 h-10 text-primary mx-auto" />
                  <CardTitle className="text-lg mt-2">{b.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{b.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modelos */}
      <section className="py-16 md:py-24 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Nuestros Modelos de Puntales</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Cuatro capacidades para cubrir cualquier requerimiento de altura y carga en tu proyecto.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {modelos.map((m) => (
              <Card key={m.nombre} className="flex flex-col overflow-hidden shadow-lg hover:shadow-primary/20 transition-shadow">
                <div className="relative h-[240px] bg-white">
                  <Image src={m.imagen} alt={m.nombre} fill className="object-contain p-4" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg mb-3">{m.nombre}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground flex-grow">
                    {m.specs.map((s) => (
                      <li key={s} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {s}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-5 bg-green-500 hover:bg-green-600 text-white">
                    <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon className="mr-2 h-4 w-4" /> Cotizar este modelo
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ficha técnica */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Ficha Técnica: Puntal Telescópico</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tabla de resistencias por altura con base en el documento de certificación enviado por fábrica,
              para que conozcas exactamente la capacidad de carga de cada modelo.
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

      {/* Usos */}
      <section className="py-16 md:py-24 px-4 bg-secondary/30">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative h-[320px] bg-white rounded-xl shadow-lg overflow-hidden order-last md:order-first">
            <Image
              src="/images/puntales/ligero-180-320.jpg"
              alt="Puntal telescópico DFAC para apuntalamiento"
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Usos en Obra</h2>
            <ul className="mt-6 space-y-4">
              {usos.map((u) => (
                <li key={u} className="flex items-start gap-3 text-lg text-muted-foreground">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 shrink-0" /> {u}
                </li>
              ))}
            </ul>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-lg bg-secondary/40">
                <ArrowUpToLine className="w-6 h-6 text-primary mx-auto" />
                <p className="mt-2 font-bold">Hasta 5.00 m</p>
                <p className="text-xs text-muted-foreground">de altura</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/40">
                <Weight className="w-6 h-6 text-primary mx-auto" />
                <p className="mt-2 font-bold">Hasta 4,000 kg</p>
                <p className="text-xs text-muted-foreground">de carga</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/40">
                <Ruler className="w-6 h-6 text-primary mx-auto" />
                <p className="mt-2 font-bold">Ajuste 100 mm</p>
                <p className="text-xs text-muted-foreground">de precisión</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 md:py-24 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold">¿Necesitas más Información?</h2>
          <p className="mt-4 text-lg opacity-90">
            Nuestro equipo te brinda asesoría personalizada para elegir el puntal correcto según las cargas
            y alturas de tu proyecto. Entrega express en obra.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="mr-2 h-5 w-5" /> Enviar WhatsApp (línea 1)
              </a>
            </Button>
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
              <a href={WA_URL_2} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="mr-2 h-5 w-5" /> Enviar WhatsApp (línea 2)
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={`tel:${TEL}`}>
                <Phone className="mr-2 h-5 w-5" /> Llamar {TEL_DISPLAY}
              </a>
            </Button>
          </div>
          <p className="mt-6 flex items-center justify-center gap-2 text-sm opacity-80">
            <MapPin className="w-4 h-4" /> Entregas en todo México
          </p>
        </div>
      </section>
    </div>
  );
}
