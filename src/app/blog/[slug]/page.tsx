import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPost, getAllBlogSlugs } from '@/lib/blog-data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

const WA_CTA =
  'https://wa.me/5215549414017?text=Hola,%20me%20interesa%20información%20sobre%20puntales%20para%20construcción.';

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-[hsl(211,96%,25%)] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm mb-6"
          >
            &larr; Volver al blog
          </Link>
          <time
            dateTime={post.date}
            className="block text-sm text-white/60 mb-3"
          >
            {new Date(post.date + 'T12:00:00').toLocaleDateString('es-MX', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-3xl">
            {post.description}
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 md:py-14">
        <article className="max-w-4xl mx-auto">
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-10 shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
          </div>

          <div
            className="prose prose-lg max-w-none text-foreground
              prose-headings:text-foreground prose-p:text-muted-foreground
              prose-li:text-muted-foreground prose-strong:text-foreground
              prose-a:text-[hsl(211,96%,25%)] prose-a:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <section className="mt-16 bg-[hsl(211,96%,25%)] text-white rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para cotizar tus puntales?
            </h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Contáctanos por WhatsApp y recibe asesoría personalizada con
              cotización inmediata. Entrega en menos de 24 horas en toda la
              Ciudad de México y Zona Metropolitana.
            </p>
            <a
              href={WA_CTA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Cotizar por WhatsApp
            </a>
          </section>

          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[hsl(211,96%,25%)] font-semibold hover:underline"
            >
              &larr; Ver todos los artículos
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
