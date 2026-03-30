# Architecture

## Lectura Arquitectónica General

La arquitectura actual es la de un sitio estático multipágina con una base compartida de estilos y comportamiento. Cada ruta pública posee su propio `index.html`, pero la experiencia está unificada por:

- `style.css` como sistema visual central,
- `script.js` como capa de interacción compartida,
- `images/` como repositorio de activos,
- una misma convención narrativa y de CTA.

No existe un motor de plantillas, framework de componentes ni paso de compilación detectado.

## Capas Detectadas

| Capa | Archivo(s) principales | Responsabilidad |
| --- | --- | --- |
| Entrada | `index.html` | Redirección a `inicio/` |
| Presentación por ruta | `inicio/index.html`, `quienes-somos/index.html`, `como-trabajamos/index.html`, `nuestros-servicios/index.html`, `soporte/index.html` | Contenido y estructura semántica |
| Estilo global | `style.css` | Layout, componentes, responsive, variantes por página |
| Comportamiento global | `script.js` | Navegación, tracking, formularios, filtros, demo dashboard |
| SEO técnico | `robots.txt`, `sitemap.xml` | Descubrimiento e indexación |
| Activos | `images/` | Branding, hero, servicios, fotos y placeholders |
| Higiene del repo | Sitio productivo, documentación y configuración de publicación | Estructura depurada tras retirar prototipos y respaldos |

## Estructura De Páginas O Módulos

| Ruta/módulo | Rol | Componentes destacados |
| --- | --- | --- |
| `/` | Entrada técnica | Redirect inmediato a `inicio/`, `noindex` |
| `/inicio/` | Home comercial | Hero, dolores, enfoque, proceso, CTA final |
| `/quienes-somos/` | Confianza institucional | Historia, diferenciadores, autoridad/equipo |
| `/como-trabajamos/` | Evidencia y metodología | Resultados, enfoque, demo, casos filtrables |
| `/nuestros-servicios/` | Oferta y conversión | Servicios, pricing, FAQ, formulario lead |
| `/soporte/` | Continuidad post-entrega | Soporte, stack, equipo externo, formulario soporte |
| `style.css` | Sistema de UI | Tokens, layout, componentes compartidos y variantes por página |
| `script.js` | Lógica compartida | Navegación, formularios, tracking, filtros, dashboard |

## Flujo Entre Vistas O Secciones

### Flujo comercial principal

`inicio` -> reconocimiento del problema -> profundización en `como-trabajamos` o `nuestros-servicios` -> envío de formulario lead -> contacto posterior

### Flujo de confianza

`inicio` -> `quienes-somos` -> `como-trabajamos` -> `nuestros-servicios`

### Flujo de soporte

`soporte` -> clasificación de continuidad/incidencia/evolución -> formulario soporte -> contacto posterior

### Flujo técnico asistido por query params

Los enlaces desde cards, casos y paquetes inyectan contexto a `nuestros-servicios/#cotizar` mediante query strings como `need`, `industry`, `case`, `context` y `origin`. El formulario usa esos parámetros para:

- preseleccionar necesidad,
- mostrar contexto del caso solicitado,
- propagar fuente/origen de CTA,
- facilitar seguimiento comercial.

## Componentes Reutilizables Detectados

### Componentes de layout y navegación

- Navbar principal con dropdowns de secciones.
- Header fijo con estado “scrolled”.
- Footer compartido por ruta.
- Botón sticky de WhatsApp para mobile.

### Componentes de contenido

- `hero-section`
- `section-badge`
- `section-title` y `section-subtitle`
- cards de prueba/credibilidad
- CTA final compartido
- accordions FAQ
- cards de diferenciadores
- cards de servicios
- cards de casos
- módulos de autoridad/equipo

### Componentes interactivos

- navegación dinámica por secciones a través de `NAV_SECTIONS`
- smooth scroll con compensación por altura de navbar
- filtros de casos
- foco contextual sobre paquetes
- contador de caracteres
- toggles de campos opcionales
- banners contextuales de formulario
- dashboard demo generado por JS

## Organización De Assets

### Producción principal

- `images/Logo 42NT Solutions*.png`: branding y favicon
- `images/*.jpg` y `images/*.png`: imágenes de héroe, servicios, equipo y soporte
- `images/*.svg`: íconos y variantes visuales

### Observaciones

- Existen variantes duplicadas por extensión (`.jpg`, `.png`, `.svg`) para un mismo concepto.
- Los nombres de archivo usan una mezcla de espacios, mayúsculas, tildes y convenciones heterogéneas.
- La página de soporte también usa iconografía remota, por lo que no todo el sistema visual está autocontenido.

## Relación Entre HTML, CSS Y JS

### HTML

- Contiene la estructura, copy y CTAs específicos de cada ruta.
- Repite manualmente navbar, footer y gran parte de la estructura compartida.

### CSS

- Define un sistema visual relativamente robusto a partir de variables CSS.
- Agrupa estilos base, componentes globales y variantes específicas por `body.page-*`.
- Está muy concentrado en un solo archivo de gran tamaño.

### JS

- Opera como “capa de comportamiento transversal”.
- No renderiza páginas completas, pero sí reescribe submenús, enriquece navegación y controla formularios.
- Conecta intención comercial con medición, tracking y contexto.

## Convenciones Estructurales Del Proyecto

### Confirmadas

- Una carpeta por ruta pública, cada una con `index.html`.
- `body` usa clases tipo `page-home`, `page-about`, `page-work`, `page-services`, `page-support`.
- Componentes visuales reutilizan clases semánticas y utilitarias.
- Query string para transferir contexto entre páginas.
- Canonical por ruta pública.

### Inferencias razonables

- La estructura actual es resultado de una evolución desde una landing única hacia un sitio orientado por intención de usuario.
- El control de versiones visuales se hace mediante `?v=...` manual en CSS y JS.

## Posibles Puntos De Acoplamiento

| Punto de acoplamiento | Riesgo |
| --- | --- |
| Navbar y footer repetidos en múltiples HTML | Cambios manuales inconsistentes entre rutas |
| `NAV_SECTIONS` en `script.js` | Dependencia entre IDs de secciones y navegación |
| `style.css` único | Alto impacto transversal ante cambios menores |
| Formularios y endpoints hardcodeados | Riesgo operativo si cambian servicios externos |
| Query params entre páginas | Rotura silenciosa si cambian nombres de parámetros |
| Clases CSS muy específicas por página | Complejidad creciente y dificultad de refactor |

## Riesgos Arquitectónicos Detectados

- Monolito CSS/JS difícil de escalar.
- Duplicación estructural alta en HTML.
- Mezcla de archivos productivos con prototipos y artefactos auxiliares.
- Dependencia de múltiples recursos remotos sin estrategia de fallback.
- Problemas visibles de encoding en textos y algunos archivos fuente.
- Ausencia de entorno de build, lint o pruebas que detecten regresiones.

## Recomendaciones De Ordenamiento

### Prioridad alta

- Separar producción de prototipos/artefactos de trabajo.
- Corregir codificación UTF-8 de todos los archivos de texto.
- Extraer navbar y footer a un mecanismo de reutilización o generación.
- Dividir `style.css` y `script.js` en módulos lógicos.

### Prioridad media

- Normalizar nombres de archivos e imágenes.
- Centralizar constantes de contacto, URLs y metadatos.
- Establecer una política clara para páginas internas/experimentales.

### Prioridad baja

- Introducir build liviano solo si mejora mantenibilidad sin sobredimensionar el proyecto.
- Optimizar imágenes duplicadas y activos no usados.

## Estado De Evidencia Arquitectónica

### Confirmado

- Sitio estático multipágina con núcleo en cinco rutas públicas.
- Base compartida de CSS/JS.
- Formularios con lógica común.
- Navegación orientada por intención y por secciones.

### Pendiente de validar

- Si el repositorio seguirá estático puro o migrará a templating/framework.
- Si los prototipos seguirán conviviendo con producción.
