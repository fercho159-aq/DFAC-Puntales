
"use client";

import React, { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import HTMLFlipBook from 'react-pageflip';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Loader2, Download } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

interface FlipbookProps {
  pdfUrl: string;
}

const PageCover = React.forwardRef<HTMLDivElement, { children: React.ReactNode }>(({ children }, ref) => {
  return (
    <div ref={ref} className="bg-card border shadow-md flex justify-center items-center">
      <div className="text-center p-4">
        {children}
      </div>
    </div>
  );
});
PageCover.displayName = 'PageCover';

const PdfPage = React.forwardRef<HTMLDivElement, { children: React.ReactNode }>(({ children }, ref) => {
    return (
      <div ref={ref} className="bg-background border shadow-sm">
        {children}
      </div>
    );
});
PdfPage.displayName = 'PdfPage';

export function Flipbook({ pdfUrl }: FlipbookProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [width, setWidth] = useState(0);
  const flipBook = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const fileOptions = useMemo(() => ({
    url: pdfUrl,
    withCredentials: false
  }), [pdfUrl]);

  const options = useMemo(() => ({
    cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
    cMapPacked: true,
  }), []);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      'pdfjs-dist/build/pdf.worker.min.mjs',
      import.meta.url,
    ).toString();
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setIsLoading(false);
  };

  const handleFlip = useCallback((e: any) => {
    setCurrentPage(e.data);
  }, []);

  const goToPrevPage = () => {
    if (flipBook.current) {
      flipBook.current.pageFlip().flipPrev();
    }
  };

  const goToNextPage = () => {
    if (flipBook.current) {
      flipBook.current.pageFlip().flipNext();
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.clientWidth);
    }
    const handleResize = () => {
      if(containerRef.current) {
        setWidth(containerRef.current.clientWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const bookWidth = Math.min(width, 1000);
  const bookHeight = bookWidth * 1.414;

  return (
    <div className="w-full flex flex-col items-center space-y-4">
      <div ref={containerRef} className="w-full max-w-5xl md:aspect-[2/1.414] relative">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-card rounded-lg shadow-lg z-10">
            <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
            <p className="text-muted-foreground">Cargando catálogo...</p>
          </div>
        )}
        <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Document
          file={fileOptions}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => {
            console.error('Failed to load PDF', error);
            setIsLoading(false);
          }}
          options={options}
          loading="" 
        >
          <HTMLFlipBook
            width={bookWidth / 2}
            height={bookHeight / 2}
            size="stretch"
            minWidth={150}
            maxWidth={500}
            minHeight={212}
            maxHeight={707}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            onFlip={handleFlip}
            ref={flipBook}
            className="rounded-lg shadow-2xl mx-auto"
          >
            <PageCover>
                <h2 className="text-2xl font-bold text-primary">Catálogo de Productos</h2>
                <p className="text-muted-foreground mt-2">DFAC - Accesorios para Cimbra</p>
            </PageCover>

            {Array.from(new Array(numPages || 0), (el, index) => (
              <PdfPage key={`page_${index + 1}`}>
                <Page
                  pageNumber={index + 1}
                  width={bookWidth / 2}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </PdfPage>
            ))}

            <PageCover>
                <h2 className="text-xl font-bold">Fin del Catálogo</h2>
                <p className="text-muted-foreground mt-2">Contáctanos para más información.</p>
                <Button asChild className="mt-4">
                    <a href="#contacto">Contactar</a>
                </Button>
            </PageCover>
          </HTMLFlipBook>
        </Document>
        </div>
      </div>
      
      {!isLoading && numPages && (
        <div className="flex items-center justify-center space-x-4">
          <Button variant="outline" size="icon" onClick={goToPrevPage} disabled={currentPage === 0}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium text-muted-foreground">
            Página {currentPage} de {numPages}
          </span>
          <Button variant="outline" size="icon" onClick={goToNextPage} disabled={currentPage >= numPages -1}>
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button asChild>
              <a href={pdfUrl} download="DFAC_Catalogo.pdf">
                <Download className="mr-2 h-4 w-4" />
                Descargar
              </a>
          </Button>
        </div>
      )}
    </div>
  );
}
