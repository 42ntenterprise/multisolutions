# Handoff

## Objetivo De Esta Guía

Permitir que otro miembro del equipo entienda rápidamente cómo está armado el proyecto, qué archivos tocar primero, qué riesgos existen al modificarlo y qué revisar antes de publicar cambios.

## Qué Entender Primero

1. El sitio principal es el conjunto de rutas públicas:
   - `inicio/`
   - `quienes-somos/`
   - `como-trabajamos/`
   - `nuestros-servicios/`
   - `soporte/`
2. `index.html` raíz solo redirige a `inicio/`.
3. `style.css` y `script.js` son el corazón compartido del sitio principal.
4. El repo contiene material auxiliar/prototípico que no debe asumirse como productivo sin validación.

## Archivos Clave

| Archivo | Qué controla | Riesgo al modificar |
| --- | --- | --- |
| `index.html` | Entrada y redirección | Bajo |
| `inicio/index.html` | Mensaje principal del negocio | Medio |
| `quienes-somos/index.html` | Confianza institucional y equipo | Medio |
| `como-trabajamos/index.html` | Casos, demo y evidencia | Alto |
| `nuestros-servicios/index.html` | Conversión principal y precios | Alto |
| `soporte/index.html` | Continuidad post-entrega | Alto |
| `style.css` | Estilo transversal del sitio | Muy alto |
| `script.js` | Navegación, formularios, tracking, filtros y demo | Muy alto |
| `robots.txt` | Indexación técnica | Medio |
| `sitemap.xml` | Descubrimiento SEO | Medio |

## Flujo Recomendado De Edición

### Si cambias copy o estructura de una página

- Edita primero el HTML de esa ruta.
- Verifica que IDs de secciones sigan consistentes con navegación y anclas.
- Prueba desktop y mobile.

### Si cambias navegación o layout compartido

- Revisa todas las rutas públicas.
- Revisa `NAV_SECTIONS` en `script.js`.
- Revisa compensación de scroll y dropdowns.

### Si cambias formularios

- Verifica nombres de campos.
- Revisa `setupLeadForms()` o `setupSupportForms()`.
- Comprueba contexto por query string y estados de éxito/error.

### Si cambias estilos globales

- Aísla el cambio por clase o por `body.page-*` cuando corresponda.
- Revisa al menos inicio, servicios y soporte antes de dar por cerrado el cambio.

## Riesgos Al Modificar

- Romper la sincronía entre navegación y IDs de sección.
- Desalinear navbar/footer entre páginas por duplicación manual.
- Afectar formularios al renombrar campos.
- Publicar placeholders o contenido experimental por error.
- Introducir más inconsistencias de encoding si no se normaliza UTF-8.

## Checklist Antes De Publicar Cambios

- Confirmar que el cambio corresponde a la versión productiva y no al prototipo.
- Revisar todas las rutas públicas afectadas.
- Verificar titles, descriptions y canonical si hubo cambio de contenido o URL.
- Probar formularios o, al menos, validar su estructura.
- Verificar CTAs a WhatsApp, LinkedIn y anchors internos.
- Revisar que no aparezcan textos corruptos (`Ã`, `Â`, etc.).
- Revisar vista mobile.

## Checklist Antes De Hacer Merge O Deploy

- `index.html` raíz sigue redirigiendo correctamente.
- No quedaron archivos experimentales nuevos mezclados con producción sin justificación.
- `sitemap.xml` está alineado si cambiaron rutas o prioridad pública.
- `robots.txt` sigue siendo coherente con la estrategia de indexación.
- No se rompieron assets compartidos ni rutas relativas.
- La documentación en `DOCUMENTATION/` sigue representando el estado real del repositorio.

## Recomendación De Lectura Para Un Nuevo Integrante

1. `README.md`
2. `DOCUMENTATION/PROJECT_OVERVIEW.md`
3. `DOCUMENTATION/ARCHITECTURE.md`
4. `DOCUMENTATION/PAGES_AND_CONTENT.md`
5. `DOCUMENTATION/TECHNICAL_DEBT.md`

## Pendiente De Validar Con El Equipo

- Qué se considera oficialmente “producción”.
- Qué archivos deben archivarse.
- Política de contenido placeholder y evidencia comercial.
- Responsables de formularios, seguimiento de leads y soporte.
