# 42NT Solutions

## Resumen Ejecutivo

Repositorio de un sitio web estático multipágina para 42NT Solutions, orientado a captación comercial, construcción de confianza técnica y separación explícita entre la conversación de ventas y el soporte post-entrega.

El código actual muestra una versión funcional y navegable del sitio, con contenido comercial real, formularios operativos, estructura SEO por ruta y una base visual consistente. No se detectó pipeline de build ni framework de aplicación; la solución se apoya en HTML, CSS y JavaScript compartidos.

## Qué Es Este Proyecto

| Aspecto | Detalle | Estado |
| --- | --- | --- |
| Nombre detectado | 42NT Solutions | Confirmado |
| Tipo de proyecto | Sitio web corporativo/comercial multipágina | Confirmado |
| Propósito | Presentar servicios de BI, automatización, integración de datos y soporte, y convertir visitas en leads calificados | Confirmado |
| Problema que resuelve | Falta de claridad comercial/técnica para empresas con reporting manual, KPIs inconsistentes y baja visibilidad operativa | Confirmado |
| Propuesta de valor | “Un solo número confiable para decidir”, con dirección técnica visible, precios referenciales, casos y continuidad post-entrega | Confirmado |
| Público objetivo | Empresas medianas en Chile; especialmente líderes de Finanzas, Operaciones, Supply Chain y Gerencia General | Confirmado |
| Canal principal de conversión | Formulario de evaluación inicial y WhatsApp | Confirmado |
| Publicación objetivo | GitHub Pages bajo `42ntenterprise.github.io/Solutions` | Inferencia razonable |

## Alcance Del Repositorio

### Incluido

- Sitio público con rutas: `inicio/`, `quienes-somos/`, `como-trabajamos/`, `nuestros-servicios/` y `soporte/`.
- Página raíz con redirección a `inicio/`.
- Activos visuales locales en `images/`.
- Estilos globales en `style.css`.
- Comportamiento global en `script.js`.
- SEO base con `robots.txt` y `sitemap.xml`.
- Formularios de lead y soporte con integraciones client-side.

### Limpieza reciente del repositorio

- Se retiraron prototipos heredados, respaldos intermedios y activos huérfanos que no participaban del sitio activo.
- La raíz del proyecto ahora refleja solo la versión productiva, la documentación y la configuración de publicación.

## Stack Tecnológico Detectado

| Capa | Tecnología | Uso detectado |
| --- | --- | --- |
| Estructura | HTML estático | Páginas y contenido por ruta |
| Estilos | CSS custom + variables CSS | Sistema visual principal |
| Layout/UI | Bootstrap 5.3.3 (CDN) | Grilla, navbar, accordion, utilidades |
| Iconografía | Bootstrap Icons (CDN) | Iconos UI |
| Tipografía | Sora + DM Sans (Google Fonts) | Headings y body copy |
| Animaciones | AOS (CDN) | Entradas y scroll reveals |
| Visualización | Chart.js (CDN) | Dashboard demo |
| Integraciones | Formspree + Google Apps Script | Envío de formularios |
| Publicación | Sitio estático sin build detectado | Hosting compatible con GitHub Pages |

## Estructura General Del Repositorio

```text
.
|-- 404.html
|-- _headers
|-- index.html
|-- netlify.toml
|-- README.md
|-- style.css
|-- script.js
|-- robots.txt
|-- sitemap.xml
|-- inicio/
|   `-- index.html
|-- quienes-somos/
|   `-- index.html
|-- como-trabajamos/
|   `-- index.html
|-- nuestros-servicios/
|   `-- index.html
|-- soporte/
|   `-- index.html
|-- images/
|   `-- activos visuales y logos
`-- DOCUMENTATION/
```

## Cómo Visualizar El Proyecto

### Opción recomendada

Servir el repositorio con cualquier servidor estático local. No se detectó paso de build.

### Opción mínima

Abrir `index.html`, que redirige a `inicio/`.

### Consideraciones

- Los recursos CSS/JS externos dependen de conectividad a CDN.
- Los formularios dependen de Formspree y Google Apps Script.
- Para validar navegación, CTAs, prefills por query string y formularios, conviene probar con servidor estático y no solo con doble clic sobre archivos.

## Estado Actual Del Proyecto

| Estado | Lectura |
| --- | --- |
| Madurez | MVP comercial avanzado / sitio funcional en etapa de consolidación |
| Contenido | Alto nivel de desarrollo comercial y técnico en copy |
| Navegación | Funcional, con rutas temáticas y submenús por sección |
| Diseño | Consistente y bastante trabajado |
| Operación | Sin build, tests ni tooling de mantenimiento detectado |
| Documentación | No se detectó base documental previa en Markdown; este repositorio queda documentado desde esta entrega |

## Funcionalidades Principales Detectadas

- Navegación multipágina con submenús por secciones.
- Hero y CTA principal por intención de usuario.
- Ruta comercial de servicios con precios visibles.
- Ruta de evidencia con demo y casos anonimizados filtrables.
- Ruta de autoridad/identidad de la consultora.
- Ruta de soporte separada de ventas.
- Formularios con captura de contexto, scoring y doble envío.
- Prefill del formulario a través de query parameters.
- Tracking UI preparado para `gtag` cuando exista.
- Dashboard demo generado en cliente con Chart.js.
- SEO base por ruta, canonicales y social metadata parcial.

## Roadmap Resumido

- Corregir problemas de codificación de caracteres.
- Separar claramente producción, prototipos y artefactos auxiliares.
- Reducir duplicación HTML en navegación y footer.
- Modularizar `style.css` y `script.js`.
- Completar metadatos sociales y schema en páginas internas.
- Formalizar proceso de publicación, revisión y mantenimiento.

## Próximas Mejoras Sugeridas

- Establecer una frontera explícita entre “sitio productivo” y “material exploratorio”.
- Extraer componentes repetidos o adoptar plantillas parciales.
- Normalizar nombres de archivos y activos.
- Agregar validación operativa de endpoints de formularios.
- Incorporar un checklist SEO/técnico antes de publicar.
- Definir un criterio editorial para placeholders, anonimización y evidencia comercial.

## Notas De Mantenimiento

- `style.css` y `script.js` son archivos críticos y de alto acoplamiento.
- Los formularios comerciales y de soporte comparten parte importante de la lógica de envío y tracking.
- El repositorio ya fue depurado de prototipos heredados y respaldos sueltos; conviene mantener cualquier material exploratorio futuro fuera de la raíz productiva.
- Cambios en URLs, teléfonos, perfiles públicos o endpoints deben revisarse en todas las páginas, formularios y metadatos.
- Consultar `DOCUMENTATION/` antes de modificar arquitectura, contenidos, SEO o flujos de conversión.
