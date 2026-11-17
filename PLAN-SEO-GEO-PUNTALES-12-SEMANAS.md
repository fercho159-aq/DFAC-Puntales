# Plan editorial SEO + GEO + AI — DFAC Puntales (12 semanas)

**Período:** Lunes 2 de noviembre 2026 → Lunes 18 de enero 2027
**Cadencia:** 1 nota por semana, publicada cada lunes
**Dominios:** puntales.com.mx (principal) y puntales.mx (secundario / Bajío)

---

## Estrategia en 1 párrafo

Posicionar a DFAC como la **referencia experta en puntales metálicos en CDMX, Zona Metropolitana y Bajío**, tanto en Google como en respuestas de IA (ChatGPT, Perplexity, Google AI Overviews, Gemini). Cada nota está diseñada para ser **extraíble por LLMs**: TL;DR al inicio, tablas con cifras, FAQ con Schema, menciones de colonias/municipios, autor con credencial y CTA a WhatsApp.

---

## Pilares de contenido

| Pilar | Intención | Notas |
|---|---|---|
| **A — Fundamentos y tipos** | TOFU / definicional | Semanas 1, 2, 5, 12 |
| **B — Local / renta** | MOFU-BOFU / geo | Semanas 3, 7, 8, 10 |
| **C — Técnico / autoridad** | BOFU / cita de IA | Semanas 4, 6, 9, 11 |

---

## Calendario de publicación

| # | Fecha (lunes) | Título | Pilar | Keyword principal | Meta |
|---|---|---|---|---|---|
| 1 | **2026-11-02** | ¿Qué es un puntal metálico? Tipos, usos y capacidades (guía 2026) | A | puntal metálico | pillar foundational |
| 2 | **2026-11-09** | Puntal italiano vs. español: diferencias, carga y cuál elegir | A | puntal italiano vs español | comparativo |
| 3 | **2026-11-16** | Renta de puntales en CDMX: precios 2026, cobertura y tiempos de entrega | B | renta puntales CDMX | local money |
| 4 | 2026-11-23 | ¿Cómo calcular cuántos puntales necesito por m² de losa? | C | calcular puntales losa | technical how-to |
| 5 | 2026-11-30 | Puntal telescópico para losa: alturas, cargas y recomendaciones por tipo de obra | A | puntal telescópico losa | product guide |
| 6 | 2026-12-07 | Carga admisible de un puntal metálico: tabla técnica por altura (DFAC) | C | carga admisible puntal | data-rich |
| 7 | 2026-12-14 | Renta vs. compra de puntales en CDMX: ¿cuál conviene más en 2026? | B | renta vs compra puntales | decision |
| 8 | 2026-12-21 | Puntales para obra residencial en Álvaro Obregón, Coyoacán y Tlalpan | B | puntales Álvaro Obregón Coyoacán Tlalpan | hyper-local |
| 9 | 2026-12-28 | 7 errores comunes al apuntalar una losa (y cómo evitarlos) | C | errores apuntalar losa | listicle |
| 10 | 2027-01-04 | Renta de puntales en Querétaro: cobertura Bajío, precios y tiempos | B | renta puntales Querétaro | local Bajío |
| 11 | 2027-01-11 | Checklist de seguridad para apuntalamiento en obra (NMX / NOM-031) | C | seguridad apuntalamiento | checklist |
| 12 | 2027-01-18 | Puntal vs. cimbra vs. apuntalamiento: ¿qué usar y cuándo? | A | puntal vs cimbra | clarificador |

---

## Estructura obligatoria de cada nota (para GEO + SEO)

1. **H1** = título con keyword exacta
2. **TL;DR** (40–60 palabras) en el primer `<p>` respondiendo la pregunta del título → los LLMs lo citan textual
3. **Tabla** con datos numéricos específicos (altura, carga, precio, zona) → Perplexity/ChatGPT las parsean
4. **H2 con la keyword long-tail** (ej. "¿Cuánto cuesta rentar puntales en CDMX?")
5. **Listas con cifras concretas** ("2,500 kg a 3 m", "48 horas de entrega")
6. **FAQ** (3-5 preguntas) + **Schema FAQPage** JSON-LD
7. **Menciones geográficas específicas**: colonias, municipios, estados, zonas con alta demanda
8. **Autor con credencial** ("Equipo técnico DFAC — más de 15 años en cimbra y apuntalamiento en CDMX")
9. **CTA WhatsApp** al final con mensaje pre-llenado
10. **Enlaces internos**: a otro pilar y a una ficha de producto
11. **Imagen con ALT descriptivo** con la keyword

---

## Señales adicionales (fuera del blog)

- **Google Business Profile**: 3 publicaciones mensuales con fotos de obra reales + 1 reseña nueva/semana (meta: 30 reseñas con la palabra "puntal" en 12 semanas)
- **Schema JSON-LD** en homepage: Organization + LocalBusiness + Service (ya presente, ampliar)
- **Backlinks**: pedir 1 reseña/mención en directorio de construcción al mes (Construrama, Obralink, foros CMIC)
- **Citación externa**: publicar 1 caso de obra en LinkedIn por mes con link al blog
- **Sitemap + GSC**: enviar cada nota a Google Search Console el mismo día de publicación

---

## Métricas de éxito (a los 90 días)

- 3–5 keywords top-3 Google local en "puntales CDMX" + variantes
- Aparecer en ≥ 1 respuesta de ChatGPT / Perplexity para queries como "renta de puntales CDMX" o "qué puntal usar para 3 metros"
- +40–80 % crecimiento de GBP (vistas, clics a web, llamadas)
- 15+ sesiones orgánicas nuevas/día desde el blog
- 5+ cotizaciones vía WhatsApp atribuibles al blog

---

## Autor por default (usar en todas las notas)

> **Equipo técnico DFAC — Más de 15 años proveyendo puntales metálicos para obras residenciales, comerciales e industriales en CDMX, Estado de México y Querétaro. Especialistas en cimbra, apuntalamiento y accesorios certificados.**

## CTA WhatsApp (constante `WA_CTA` en blog-data.ts)

```
https://wa.me/5215549414017?text=Hola,%20me%20interesa%20información%20sobre%20puntales%20para%20construcción.
```

---

## Estado actual

- ✅ Notas 1, 2, 3 publicadas (blog-data.ts)
- 📄 Notas 4-12 en `NOTAS-PENDIENTES-PUNTALES.md` listas para publicar
- ⏰ Recordatorio semanal cada **lunes 8:03 AM** (scheduled task)
