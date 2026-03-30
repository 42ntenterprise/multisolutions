# SEO And Metadata

## Estado General

La base SEO del sitio es buena para un proyecto estático sin framework: existen titles específicos, meta descriptions por ruta, canonicales en las páginas públicas, `robots.txt`, `sitemap.xml` y estructura semántica razonable. Sin embargo, la cobertura no es homogénea y hay oportunidades importantes en social metadata, schema y consistencia editorial.

## Revisión Por Página

| Ruta | Title | Meta description | Canonical | OG/Twitter | Schema | Observaciones |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | Sí | Sí | Sí | No | No | Correcto para redirect, con `noindex, follow` |
| `/inicio/` | Sí | Sí | Sí | Sí, completa | Sí (`ProfessionalService`) | Página más madura a nivel SEO |
| `/quienes-somos/` | Sí | Sí | Sí | OG parcial | No | Sin Twitter metadata |
| `/como-trabajamos/` | Sí | Sí | Sí | OG parcial | No | Sin Twitter metadata |
| `/nuestros-servicios/` | Sí | Sí | Sí | No detectado | No | Déficit importante para social sharing |
| `/soporte/` | Sí | Sí | Sí | No detectado | No | Déficit importante para social sharing |

## Titles

### Fortalezas detectadas

- Titles específicos por intención.
- Mención consistente de la marca.
- La home incluye geografía y propuesta de valor clara.

### Oportunidades

- Estandarizar patrón de títulos entre páginas internas.
- Evaluar si “Soporte y continuidad” y “Servicios, precios y evaluación inicial” pueden optimizarse más para búsqueda y comercial.

## Meta Descriptions

### Fortalezas detectadas

- Descriptions reales y alineadas al contenido de cada ruta.
- Home y servicios tienen promesa comercial fuerte.

### Oportunidades

- Unificar el nivel de especificidad entre páginas.
- Revisar redacción de soporte para incorporar intención de continuidad y propiedad del cliente con mayor potencial de clic.

## Headings

### Confirmado

- Todas las rutas principales tienen un `H1` claro.
- La jerarquía de `H2` y `H3` en general acompaña bien la estructura visual.

### Observaciones

- En FAQ se reutilizan múltiples `h2.accordion-header`, lo que es válido semánticamente, pero conviene vigilar la coherencia jerárquica global.
- Algunos `H1` o textos visibles muestran problemas de encoding, lo que puede afectar percepción y snippet quality.

## Canonical

### Confirmado

- Todas las páginas públicas principales incluyen `canonical`.
- La raíz apunta a `inicio/`.

### Riesgos

- Si las rutas cambian o se migra hosting, habrá que actualizar manualmente cada canonical.

## Open Graph Y Twitter

### Home

- Tiene `og:type`, `og:url`, `og:title`, `og:description`, `og:image`, `og:image:alt`, `og:locale`, `og:site_name`, `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` y `twitter:image:alt`.

### Internas

- `quienes-somos/` y `como-trabajamos/` tienen Open Graph parcial.
- `nuestros-servicios/` y `soporte/` no muestran metadatos sociales equivalentes en el análisis del repositorio.

### Recomendación

- Completar Open Graph y Twitter cards en todas las rutas públicas.
- Definir una imagen social por página con criterio editorial y consistencia visual.

## Estructura Semántica

### Buenas prácticas detectadas

- Uso de `header`, `nav`, `main`, `section`, `footer`.
- IDs por sección que permiten navegación anclada.
- Texto alternativo en gran parte de las imágenes relevantes.
- Skip link inyectado por JS para accesibilidad.

### Vacíos o riesgos

- No se detecta breadcrumb schema.
- No se detecta FAQ schema pese a haber bloques FAQ muy fuertes.
- No se detecta `Organization`/`Service` schema extendido más allá de la home.

## Robots Y Sitemap

### `robots.txt`

- Permite el rastreo general.
- Declara el sitemap.

### `sitemap.xml`

- Incluye las cinco páginas públicas principales.
- No incluye artefactos auxiliares.

### Observación

- Los `lastmod` del sitemap están en `2026-03-15`, pero varios archivos fueron modificados posteriormente. Hay desalineación técnica/documental.

## Buenas Prácticas Detectadas

- Canonical por ruta.
- Titles y descriptions con intención comercial clara.
- Home con schema `ProfessionalService`.
- Robots y sitemap existentes.
- URL pública consistente en canonicals y OG.

## Vacíos SEO Detectados

- Cobertura incompleta de Open Graph/Twitter en páginas internas.
- Falta de schema FAQ y schema por servicios.
- Posibles snippets dañados por problemas de mojibake.
- Activos y prototipos coexistiendo en repo principal sin política explícita.
- Dependencia manual para mantener canonicals, sitemap y metadatos.

## Oportunidades De Optimización Técnica

- Corregir encoding UTF-8.
- Completar metadatos sociales de servicios y soporte.
- Automatizar o al menos documentar actualización de `sitemap.xml`.
- Centralizar titles/descriptions si se introduce un sistema de templates.
- Revisar peso y formato de imágenes OG.

## Oportunidades De Optimización De Contenido

- Reforzar palabras clave de intención en páginas internas.
- Convertir algunas preguntas FAQ en piezas SEO más explícitas.
- Hacer más distinguibles los temas de cada página para evitar solapamiento narrativo.

## Pendiente De Validar

- Keywords objetivo formales por ruta.
- Estrategia de indexación para soporte.
- Si los casos anonimizados deben reforzarse con páginas individuales en el futuro.
