# Style Guide

## Lectura Del Sistema Visual Detectado

El sitio principal utiliza un lenguaje visual tecnológico-corporativo con base clara, acentos cian/aqua, superficies translúcidas y sensación de precisión. La experiencia combina una estética moderna de consultoría tecnológica con recursos de confianza comercial: badges, tarjetas, iconografía explicativa y CTAs muy visibles.

## Paleta De Colores Detectada

Valores principales extraídos de `style.css`.

| Token | Color | Uso detectado |
| --- | --- | --- |
| `--navy` | `#091a2a` | Titulares, fondos profundos, texto fuerte |
| `--navy-2` | `#102940` | Variantes de superficie y profundidad |
| `--navy-3` | `#183754` | Elementos intermedios |
| `--cyan` | `#00bbff` | CTA principal, detalles, foco visual |
| `--cyan-soft` | `#00ced1` | Variaciones de acento |
| `--aqua` | `#7fffd4` | Highlight secundario |
| `--bg-light` | `#f5f9fd` | Fondo claro principal |
| `--bg-soft` | `#eef6fb` | Fondo suave de secciones |
| `--text` | `#1f2d3d` | Texto base |
| `--text-muted` | `#5c6f84` | Texto secundario |
| `--success` | `#25d366` | Señales asociadas a WhatsApp/éxito |

## Tipografías

| Familia | Uso |
| --- | --- |
| Sora | Headings, badges, componentes de alto énfasis |
| DM Sans | Texto base, párrafos, formularios |

### Observaciones

- La combinación transmite modernidad y precisión.
- Hay fuerte dependencia de Google Fonts.
- El sitio productivo actual se apoya con consistencia en Sora + DM Sans.

## Lineamientos Visuales Detectados

- Hero de gran altura con overlay, imagen y tarjetas flotantes.
- Fondos claros con gradientes suaves y textura de grilla/fondo decorativo.
- Cards blancas o translúcidas con bordes suaves.
- Gradientes en CTAs principales y algunos textos destacados.
- Uso sistemático de bordes redondeados amplios.
- Sombra sutil-media para profundidad.
- AOS para animaciones de entrada.

## Estilo De Componentes

### Navegación

- Navbar fija.
- Estados hover/open/current.
- CTA destacado en la barra.

### CTAs

- Primario: gradiente azul/cian, alto contraste.
- Secundario: contorno o tratamiento más suave.
- WhatsApp: verde o referencia visual compatible con canal.

### Cards

- Estructura consistente con icono + título + copy + micro-prueba.
- Uso extensivo de cards para servicios, casos, diferenciadores, resultados, FAQ y soporte.

### Formularios

- Inputs claros, agrupación por contexto y urgencia.
- Banners contextuales de alta visibilidad.
- Estados de éxito integrados en la misma página.

## Tono Comunicacional Del Sitio

### Rasgos predominantes

- Consultivo
- Directo
- Técnico, pero no excesivamente técnico
- Comercial con foco en negocio
- Orientado a claridad, control y confianza

### Patrones de copy

- Problema -> impacto -> siguiente paso.
- Menos énfasis en la herramienta, más énfasis en la decisión.
- Uso de frases concretas y promesas operativas: “24h”, “entregables claros”, “sin letra chica”, “sin dependencia futura”.

## Observaciones Sobre Branding

### Confirmado

- La marca visible es 42NT Solutions.
- Existe un set de logos y favicon dedicado.
- La marca se asocia a dirección técnica visible y continuidad.

### Inferencia razonable

- El branding actual ya superó una etapa previa más genérica/prototípica tipo “DataBI Pro”.
- La diferenciación buscada combina seriedad corporativa con cercanía técnica.

### Riesgos de branding

- Convivencia en el mismo repo de marca 42NT y prototipo “DataBI Pro”.
- Algunos placeholders o activos no definitivos pueden erosionar la percepción de solidez.
- Problemas de encoding afectan percepción de calidad de marca.

## Lineamientos De Consistencia Recomendados

- Mantener una sola paleta primaria basada en navy/cyan/aqua.
- Reservar el verde para WhatsApp o señales de éxito.
- Usar Sora solo para jerarquía alta y elementos de énfasis.
- Mantener CTAs con jerarquía clara: uno principal y uno secundario por bloque.
- Evitar introducir nuevas variantes visuales sin justificación de sistema.
- Consolidar iconografía remota en un criterio estable.

## Criterios Recomendados Para Futuras Iteraciones

### Diseño

- Priorizar simplificación sin perder carácter.
- Reducir variantes innecesarias de card si no añaden significado.
- Revisar densidad visual en páginas largas.

### Contenido

- Alinear tono técnico-comercial en todas las páginas.
- Evitar placeholders visibles en piezas institucionales.
- Reforzar pruebas concretas donde ya existen claims fuertes.

### Marca

- Separar definitivamente material de prototipo externo a la identidad 42NT.
- Formalizar un set de activos “oficiales” y otro “experimentales”.
