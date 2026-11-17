# Notas pendientes de publicación — DFAC Puntales

**Cada lunes:** copiar la nota correspondiente al archivo `src/lib/blog-data.ts` (antes del `];` de cierre), commit y push. Vercel despliega automáticamente.

**Plantilla:** cada nota ya trae slug, title, description, date, image, metaTitle, metaDescription y content listos. Sólo falta pegar.

---

## 📅 Nota 4 — Lunes 2026-11-23

```ts
{
  slug: 'cuantos-puntales-por-m2-de-losa',
  title: '¿Cómo calcular cuántos puntales necesito por m² de losa?',
  description:
    'Fórmula práctica 2026 para calcular la cantidad de puntales metálicos por m² de losa según espesor, altura y tipo de concreto. Ejemplos reales de obras en CDMX y Querétaro.',
  date: '2026-11-23',
  image: '/images/Galeria/WhatsApp Image 2025-08-27 at 1.27.01 PM.jpeg',
  metaTitle: 'Cómo calcular puntales por m² de losa 2026 | DFAC Puntales',
  metaDescription: 'Fórmula simple para calcular puntales por m² de losa. Ejemplos de 10, 12 y 15 cm de espesor. Guía DFAC para obras en CDMX, Edomex y Querétaro.',
  content: `
    <p class="mb-4 text-lg bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
      <strong>En corto:</strong> Como regla rápida, se coloca <strong>1 puntal cada 0.9 a 1.2 m²</strong> para losas residenciales de 10–12 cm. La fórmula exacta es <code>N = (Peso total losa × F.S.) / Carga admisible puntal</code>, donde el factor de seguridad recomendado por DFAC es 1.5.
    </p>
    <h2 class="text-2xl font-bold mt-8 mb-4">Fórmula paso a paso</h2>
    <ol class="list-decimal pl-6 mb-4 space-y-2">
      <li>Calcula el <strong>peso total de la losa por m²</strong>: espesor (m) × 2,400 kg/m³ de concreto + carga viva de obra (150 kg/m² por default).</li>
      <li>Multiplica por el <strong>área total de la losa</strong>.</li>
      <li>Aplica un <strong>factor de seguridad de 1.5</strong>.</li>
      <li>Divide entre la <strong>carga admisible del puntal a tu altura real</strong> (ver tabla DFAC).</li>
    </ol>
    <h2 class="text-2xl font-bold mt-8 mb-4">Ejemplos reales</h2>
    <ul class="list-disc pl-6 mb-4 space-y-2">
      <li>Losa residencial de 100 m² × 10 cm de espesor → <strong>80 puntales italianos estándar</strong>.</li>
      <li>Losa comercial de 200 m² × 15 cm → <strong>180 puntales españoles B40</strong>.</li>
      <li>Losa nave industrial 500 m² × 20 cm → <strong>500 puntales españoles B50 reforzados</strong>.</li>
    </ul>
    <p class="mb-4">Envíanos los planos o medidas y te hacemos el cálculo exacto por WhatsApp sin costo.</p>
    <div class="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mt-8">
      <p class="font-bold text-lg mb-2">¿Necesitas apoyo con el cálculo de tu obra?</p>
      <a href="\${WA_CTA}" target="_blank" rel="noopener noreferrer" class="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">Pedir cálculo gratis por WhatsApp</a>
    </div>
  `,
},
```

---

## 📅 Nota 5 — Lunes 2026-11-30

Título: **Puntal telescópico para losa: alturas, cargas y recomendaciones por tipo de obra**
Slug: `puntal-telescopico-para-losa-alturas-cargas`
Imagen: `/images/Galeria/WhatsApp Image 2025-08-27 at 1.27.02 PM.jpeg`
Enfoque: guía producto. TL;DR + tabla de alturas 1.80–5.00 m vs. carga admisible real. FAQ sobre ajuste fino, mantenimiento, pandeo. Mencionar CDMX, Edomex, Querétaro.

---

## 📅 Nota 6 — Lunes 2026-12-07

Título: **Carga admisible de un puntal metálico: tabla técnica por altura (DFAC)**
Slug: `carga-admisible-puntal-tabla-tecnica`
Imagen: `/images/Galeria/WhatsApp Image 2025-08-27 at 1.27.03 PM.jpeg`
Enfoque: contenido rico en datos, altísima citabilidad en LLMs. Tabla completa con 8–10 filas de altura (1.80, 2.00, 2.50, 3.00, 3.50, 4.00, 4.50, 5.00) × 4 tipos (italiano ligero, estándar, español B40, B50). Explicar pandeo con fórmula de Euler. Autor: "Equipo técnico DFAC".

---

## 📅 Nota 7 — Lunes 2026-12-14

Título: **Renta vs. compra de puntales en CDMX: ¿cuál conviene más en 2026?**
Slug: `renta-vs-compra-puntales-cdmx-2026`
Imagen: `/images/Galeria/WhatsApp Image 2025-08-27 at 1.27.04 PM.jpeg`
Enfoque: comparativo económico. Tabla con escenarios: obra 3 meses, 6 meses, 12 meses y flotilla permanente. Punto de equilibrio en meses. FAQ sobre amortización fiscal, depreciación, mantenimiento.

---

## 📅 Nota 8 — Lunes 2026-12-21

Título: **Puntales para obra residencial en Álvaro Obregón, Coyoacán y Tlalpan**
Slug: `puntales-alvaro-obregon-coyoacan-tlalpan`
Imagen: `/images/Galeria/WhatsApp Image 2025-08-27 at 1.27.05 PM.jpeg`
Enfoque: hyper-local geo SEO. Mencionar colonias específicas de cada alcaldía: Pedregal, Jardines del Pedregal, San Ángel, Coyoacán centro, Del Carmen, Tlalpan centro, Fuentes de Tepepan. Tipos recomendados, tiempos, restricciones por zona.

---

## 📅 Nota 9 — Lunes 2026-12-28

Título: **7 errores comunes al apuntalar una losa (y cómo evitarlos)**
Slug: `errores-comunes-apuntalar-losa`
Imagen: `/images/Galeria/WhatsApp Image 2025-08-27 at 1.27.06 PM.jpeg`
Enfoque: listicle, muy compartible. 7 errores: 1) puntal sobre suelo blando, 2) altura incorrecta, 3) sin plato base, 4) mal reapuntalamiento, 5) retiro prematuro de cimbra, 6) puntales sin certificar, 7) ignorar el pandeo a alturas grandes.

---

## 📅 Nota 10 — Lunes 2027-01-04

Título: **Renta de puntales en Querétaro: cobertura Bajío, precios y tiempos**
Slug: `renta-puntales-queretaro-bajio-2027`
Imagen: `/images/Galeria/WhatsApp Image 2025-08-27 at 1.27.07 PM.jpeg`
Enfoque: local Querétaro. Precios 2027, cobertura: Querétaro capital, El Marqués, Corregidora, San Juan del Río, Celaya, Irapuato, León, Salamanca. Tiempo de entrega 48 h. Almacén en Querétaro.

---

## 📅 Nota 11 — Lunes 2027-01-11

Título: **Checklist de seguridad para apuntalamiento en obra (NMX / NOM-031)**
Slug: `checklist-seguridad-apuntalamiento-obra`
Imagen: `/images/Galeria/WhatsApp Image 2025-08-27 at 1.27.08 PM.jpeg`
Enfoque: checklist descargable. 15–20 puntos: EPP, inspección previa, certificado del puntal, plato base, verticalidad, torque del tornillo, reapuntalamiento, etc. Referenciar NOM-031-STPS-2011 y NTC Concreto CDMX.

---

## 📅 Nota 12 — Lunes 2027-01-18

Título: **Puntal vs. cimbra vs. apuntalamiento: ¿qué usar y cuándo?**
Slug: `puntal-vs-cimbra-vs-apuntalamiento`
Imagen: `/images/Galeria/puntales-almacen-1.jpeg`
Enfoque: clarificador terminológico. Muchos confunden los 3 términos. Tabla comparativa + ejemplos de obra. Cierra el ciclo apuntando a los pilares 1, 2 y 6.

---

## Instrucciones para subir cada nota

1. Abrir `src/lib/blog-data.ts`.
2. Antes del `];` final del arreglo `blogPosts`, pegar la nueva entrada `{...}` completa (con la coma antes si no es la última).
3. Guardar.
4. Git add + commit con mensaje "feat(blog): nota X — [título corto]".
5. `git push`.
6. Vercel desplegará en 1–2 min.
7. Verificar en https://puntales.com.mx/blog/<slug>.
8. Enviar la URL a Google Search Console → Inspección de URL → Solicitar indexación.
9. Compartir en WhatsApp + LinkedIn + Facebook el mismo día.

---

## Datos técnicos consistentes (usar en todas las notas)

- **Entregas:** 24 h hábiles en CDMX y ZMVM, 48 h en Querétaro / Bajío.
- **Cobertura CDMX:** 16 alcaldías.
- **Cobertura Edomex:** Naucalpan, Tlalnepantla, Ecatepec, Nezahualcóyotl, Cuautitlán Izcalli, Atizapán, Huixquilucan, Tecámac, Chalco, Ixtapaluca, Texcoco.
- **Cobertura Querétaro/Bajío:** Querétaro capital, El Marqués, Corregidora, San Juan del Río, Celaya, Irapuato, León.
- **Teléfono/WhatsApp:** 55 4941 4017.
- **Norma de referencia:** UNE-EN 1065 + NTC-CDMX Concreto + NOM-031-STPS-2011.
- **Años de experiencia:** más de 15.
- **Mínimo renta:** 15 días.
