# Technical Debt

## Resumen Ejecutivo

La deuda técnica visible no está en la funcionalidad base del sitio, que es suficiente para operar, sino en la mantenibilidad, consistencia y escalabilidad del repositorio. La solución actual funciona como un monolito estático bien resuelto visualmente, pero con alto costo de cambio manual.

## Inconsistencias De Nombres

| Hallazgo | Impacto | Prioridad |
| --- | --- | --- |
| Nombres de archivos con espacios y acentos | Dificulta automatización y manipulación de assets | Media |
| Mezcla de `.jpg`, `.png` y `.svg` para el mismo concepto | Aumenta ambigüedad y peso del repo | Media |
| Convivencia de marca 42NT y “DataBI Pro” | Confunde propósito del repositorio | Alta |
| Convenciones heterogéneas en nombres de assets | Reduce claridad operativa y complica automatización | Alta |

## Código Duplicado

### Confirmado

- Navbar repetida manualmente en cada página pública.
- Footer repetido manualmente en cada página pública.
- Parte de la lógica y la estructura visual se repite entre rutas productivas por no existir templates o parciales.

### Impacto

- Cualquier cambio de navegación, marca o contacto exige edición múltiple.
- Aumenta la probabilidad de desalineación entre páginas.

## Secciones Difíciles De Mantener

| Sección/archivo | Motivo |
| --- | --- |
| `style.css` | Archivo muy grande, mezcla base + componentes + overrides por página |
| `script.js` | Concentración de navegación, tracking, formularios, contexto comercial y charts |
| Páginas HTML principales | Contenido compartido repetido y copy extenso embebido |
| Soporte y servicios | Alta densidad de contenido, CTAs y estructuras repetidas |

## Problemas De Escalabilidad

- No existe separación clara entre componentes reutilizables y contenido por ruta.
- No existe pipeline de build ni templates.
- La actualización de metadatos, contacto y branding es manual.
- El crecimiento de nuevas páginas agravará la duplicación estructural.

## Deuda Técnica Visible

| Ítem | Descripción | Prioridad |
| --- | --- | --- |
| Mojibake / encoding | Textos con `Ã`, `Â` y secuencias corruptas visibles | Crítica |
| Monolito CSS | Estilo único de gran tamaño y alto acoplamiento | Alta |
| Monolito JS | Comportamiento global sin modularización | Alta |
| Repetición HTML | Navbar/footer/estructura replicados | Alta |
| Integraciones hardcodeadas | Endpoints y datos de contacto embebidos | Alta |
| Recursos remotos heterogéneos | Iconos y logos desde múltiples proveedores externos | Media |
| Sin pruebas ni linting | Mayor riesgo de regresiones silenciosas | Media |
| Versionado manual por query string | Difícil de gobernar a mediano plazo | Media |
| Activos experimentales mezclados | Frontera difusa entre producción y exploración | Alta |

## Deuda Documental

### Estado antes de esta entrega

- No se detectó README principal ni base documental estructurada en Markdown.
- No había guía de arquitectura, handoff ni roadmap formal.

### Estado después de esta entrega

- La deuda documental queda sustancialmente reducida.
- Permanece pendiente validar decisiones de producto/operación que el repositorio por sí solo no puede confirmar.

## Riesgos De Continuidad

- Un tercero puede romper navegación o formularios al editar una sola página y no propagar cambios.
- La presencia de placeholders o artefactos alternativos puede llevar a publicar contenido incorrecto.
- Sin proceso de revisión, una corrección visual puede afectar múltiples rutas.
- La mezcla de contenido productivo y experimental dificulta la gobernanza del repositorio.

## Priorización De Mejoras

| Prioridad | Mejora | Justificación |
| --- | --- | --- |
| P0 | Corregir encoding de todos los archivos de texto | Afecta percepción, SEO y calidad |
| P1 | Separar producción de prototipos/artefactos auxiliares | Reduce riesgo operativo |
| P1 | Centralizar navbar/footer/configuración compartida | Baja costo de mantenimiento |
| P1 | Modularizar CSS y JS | Mejora escalabilidad |
| P2 | Normalizar assets y convenciones de nombres | Ordena repositorio |
| P2 | Completar social metadata y schema | Mejora SEO y distribución |
| P3 | Introducir tooling ligero de validación | Reduce regresiones futuras |

## Hallazgos Confirmados, Inferidos Y Pendientes

### Confirmado

- Duplicación real de archivos y estructuras.
- Encoding inconsistente.
- Monolito de CSS y JS.
- Mezcla de producción y exploración.

### Inferencia razonable

- La arquitectura creció orgánicamente desde una landing única.
- El equipo priorizó avance comercial sobre mantenibilidad estructural.

### Pendiente de validar

- Qué archivos auxiliares deben archivarse o conservarse.
- Qué claims, perfiles o referencias comerciales son definitivos.
