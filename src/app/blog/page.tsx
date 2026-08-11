import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Blog | DFAC Accesorios para Cimbra',
  description:
    'Artículos sobre puntales, cimbra y construcción en la Ciudad de México. Guías técnicas, consejos de seguridad y novedades del sector.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-[hsl(211,96%,25%)] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Blog
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Guías, consejos y artículos técnicos sobre puntales y cimbra para
            construcción en la Ciudad de México y Zona Metropolitana.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-card border border-border/50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <time
                  dateTime={post.date}
                  className="text-sm text-muted-foreground"
                >
                  {new Date(post.date + 'T12:00:00').toLocaleDateString('es-MX', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <h2 className="text-xl font-bold mt-2 group-hover:text-[hsl(211,96%,25%)] transition-colors">
                  {post.title}
                </h2>
                <p className="mt-3 text-muted-foreground text-sm line-clamp-3">
                  {post.description}
                </p>
                <span className="inline-block mt-4 text-[hsl(211,96%,25%)] font-semibold text-sm group-hover:underline">
                  Leer más &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[hsl(211,96%,25%)] font-semibold hover:underline"
          >
            &larr; Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  );
}
