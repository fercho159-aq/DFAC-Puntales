import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'DFAC Accesorios para Cimbras – Selector de Puntales',
  description: 'Selector Interactivo de Puntales de Acero para Construcción. Encuentra el modelo y la carga máxima para tu proyecto.',
  keywords: ['puntales', 'cimbras', 'construcción', 'accesorios', 'DFAC', 'carga máxima'],
  verification: {
    google: 'hFKKVqkD3MYzeJKgCa8TCDdQj8JO1NN1RZJcY8TzDqA',
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
