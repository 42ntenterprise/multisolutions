# Roadmap

## Criterios De Prioridad

| Criterio | Qué evalúa |
| --- | --- |
| Técnico | Riesgo de ruptura, mantenibilidad, deuda estructural |
| Visual | Impacto en percepción de calidad y consistencia |
| Funcional | Conversión, continuidad operativa y claridad de uso |
| Comercial | Confianza, evidencia, posicionamiento y velocidad de respuesta |

## Quick Wins

| Mejora | Tipo | Impacto |
| --- | --- | --- |
| Corregir mojibake en HTML, JS y Python | Técnico/visual | Muy alto |
| Mantener separados producción y material exploratorio | Técnico | Alto |
| Documentar claramente qué rutas son productivas | Técnico/comercial | Alto |
| Actualizar `sitemap.xml` con fechas reales | SEO/técnico | Medio |
| Completar OG/Twitter en servicios y soporte | SEO/comercial | Alto |
| Revisar placeholders de equipo y “quiénes nos han elegido” | Comercial/brand | Alto |

## Mejoras Críticas

| Mejora | Motivo | Prioridad |
| --- | --- | --- |
| Separar producción de prototipos y artefactos de trabajo | Evita errores de continuidad y publicación | Crítica |
| Corregir codificación UTF-8 | Problema visible para usuarios y buscadores | Crítica |
| Centralizar navegación, footer y configuración compartida | Reduce deuda estructural | Crítica |
| Verificar y asegurar endpoints de formularios | Impacta operación comercial | Crítica |

## Mejoras Importantes

| Mejora | Motivo |
| --- | --- |
| Modularizar `style.css` | Mejorar mantenibilidad |
| Modularizar `script.js` | Reducir acoplamiento funcional |
| Definir política de assets e imágenes | Reducir duplicación y peso |
| Formalizar checklist de publicación | Reducir errores manuales |
| Completar schema y SEO interno | Mejorar visibilidad y consistencia |
| Clarificar política editorial para casos y anonimización | Alinear comercial y legalmente |

## Mejoras Opcionales

| Mejora | Valor esperado |
| --- | --- |
| Incorporar generador estático o templating ligero | Mejor mantenimiento sin sobrecargar stack |
| Implementar analítica visible y panel de conversiones | Mejor decisión comercial |
| Añadir automatización de validación de enlaces/metadatos | Mejor control de calidad |
| Optimizar y versionar assets | Mejor rendimiento |
| Crear páginas individuales por caso/servicio | Potencial SEO y ventas |

## Backlog De Mejoras

### Fase 0 - Higiene inmediata

- Corregir encoding.
- Validar contenido placeholder.
- Aislar archivos no productivos.
- Revisar consistencia de branding.

### Fase 1 - Estabilización

- Centralizar configuración compartida.
- Reducir duplicación HTML.
- Documentar proceso de edición/publicación.
- Revisar formularios y tracking.

### Fase 2 - Escalabilidad técnica

- Dividir CSS por dominios funcionales.
- Dividir JS por módulos.
- Normalizar assets.
- Ordenar estructura del repositorio.

### Fase 3 - Optimización comercial y SEO

- Completar social metadata.
- Agregar schema FAQ/Service.
- Afinar copy por intención de búsqueda.
- Medir comportamiento de CTAs y formularios.

### Fase 4 - Evolución del producto web

- Evaluar templating estático o framework ligero.
- Incorporar casos expandibles o recursos descargables.
- Profesionalizar pipeline de revisión/deploy.

## Orden Sugerido De Implementación

1. Estabilizar lo que ya está visible al público.
2. Separar lo productivo de lo experimental.
3. Bajar el costo de cambio estructural.
4. Recién después optimizar SEO, analítica y nuevas páginas.

## Recomendaciones Por Fase

### Fase 0

No agregar nuevas páginas ni nuevos servicios antes de resolver encoding, placeholders y frontera entre producción/prototipo.

### Fase 1

Atacar componentes compartidos y configuraciones hardcodeadas. El objetivo es que cualquier cambio de marca, CTA o contacto se haga una sola vez.

### Fase 2

Reducir complejidad técnica sin perder la simplicidad del stack. El proyecto no necesita una sobrearquitectura, pero sí orden.

### Fase 3

Con la base estable, invertir en SEO y conversión tendrá mejor retorno y menor riesgo de inconsistencias.
