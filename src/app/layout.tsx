import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://puntales.com.mx'),
  title: {
    default: 'Puntales Metálicos para Construcción en CDMX | DFAC',
    template: '%s | DFAC Puntales',
  },
  description: 'Venta y renta de puntales metálicos certificados para construcción en CDMX y Zona Metropolitana. 4 modelos: ligeros, reforzados y extra fuertes. Entrega en 24 horas.',
  keywords: ['puntales', 'puntales metalicos', 'puntales para construccion', 'renta de puntales', 'cimbra', 'CDMX', 'DFAC'],
  verification: {
    google: 'hFKKVqkD3MYzeJKgCa8TCDdQj8JO1NN1RZJcY8TzDqA',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: 'DFAC Puntales',
    description: 'Puntales metálicos certificados para construcción en CDMX. Venta y renta con entrega en 24 horas.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'DFAC - Puntales Metálicos para Construcción',
              description: 'Venta y renta de puntales metálicos certificados para construcción en CDMX y Zona Metropolitana.',
              url: 'https://puntales.com.mx',
              telephone: ['+525525989751', '+525541673745', '+525555715084'],
              email: 'ventas@cimbrayaccesorios.com.mx',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Cuauhtémoc 105, San Pedro Iztacalco',
                addressLocality: 'Iztacalco',
                addressRegion: 'Ciudad de México',
                postalCode: '08220',
                addressCountry: 'MX',
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00',
              },
            }),
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased min-h-screen")}>
        {children}
        <Toaster />
        <Script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js" async />

        {/* Google tag (gtag.js) - GA4 + Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CJD81JCC2E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CJD81JCC2E');
            gtag('config', 'AW-987044751');
          `}
        </Script>
        {/* Google Ads WhatsApp conversion */}
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.open(url, '_blank');
                }
              };
              gtag('event', 'conversion', {
                'send_to': 'AW-987044751/EqbqCPHnpdEcEI-31NYD',
                'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
      </body>
    </html>
  );
}
