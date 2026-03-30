# Features

## Criterio De Clasificación

| Estado | Significado |
| --- | --- |
| Actual | Funciona o está representado hoy en el repositorio |
| Parcial | Existe, pero con cobertura, calidad o cierre incompleto |
| Inferida | Se desprende del repositorio, pero no está explícitamente confirmada |

## Inventario Completo De Funcionalidades Actuales

| Funcionalidad | Tipo | Estado | Evidencia principal | Oportunidad de mejora |
| --- | --- | --- | --- | --- |
| Redirección raíz a `inicio/` | Usuario/técnica | Actual | `index.html` raíz | Mantener solo como entrada técnica |
| Navegación multipágina | Usuario | Actual | Navbar compartida por ruta | Reducir duplicación HTML |
| Submenús por sección | Usuario/técnica | Actual | HTML + `NAV_SECTIONS` en `script.js` | Generar desde fuente única |
| Home con propuesta de valor | Usuario | Actual | `inicio/index.html` | Afinar pruebas sociales y claims |
| Diagnóstico rápido por dolor | Usuario | Actual | Cards de dolor en `inicio/` | Medir CTR por card |
| Sección de enfoque/metodología en home | Usuario | Actual | `inicio/index.html` | Convertir en puente más explícito a casos |
| Proceso en 4 etapas | Usuario | Actual | `inicio/index.html` | Añadir tiempos validados por tipo de proyecto |
| Página institucional | Usuario | Actual | `quienes-somos/index.html` | Resolver placeholders y encoding |
| Diferenciadores | Usuario | Actual | `quienes-somos/index.html` | Priorizar claims con prueba más fuerte |
| Showcase de equipo/autoridad | Usuario | Parcial | `quienes-somos/index.html` | Validar integrante placeholder |
| Página de casos/metodología | Usuario | Actual | `como-trabajamos/index.html` | Ampliar trazabilidad de medición |
| KPIs de resultados clave | Usuario | Actual | `como-trabajamos/index.html` | Vincular a evidencia o metodología |
| Demo referencial de dashboard | Usuario/técnica | Actual | `como-trabajamos/index.html` + `script.js` | Explicar mejor límites de demo ficticia |
| Casos anonimizados filtrables | Usuario/técnica | Actual | `como-trabajamos/index.html` + `setupCaseFilters()` | Agregar más industrias o casos |
| Página de servicios | Usuario | Actual | `nuestros-servicios/index.html` | Consolidar oferta y evitar saturación |
| Servicios con entregables claros | Usuario | Actual | `nuestros-servicios/index.html` | Añadir señales de alcance/no alcance |
| Servicio complementario | Usuario | Actual | `#servicio-complementario` | Validar si es paquete o consultoría |
| Paquetes y precios visibles | Usuario | Actual | `#precios` | Definir política de actualización |
| FAQ comercial | Usuario | Actual | `#faq` en servicios | Añadir schema FAQ |
| Formulario de evaluación inicial | Usuario/técnica | Actual | `data-form-kind="lead"` | Validar entregabilidad y compliance |
| Soporte post-entrega con canal propio | Usuario | Actual | `soporte/index.html` | Definir visibilidad pública/privada |
| Stack tecnológico explicado en soporte | Usuario | Actual | `#tecnologia` | Revisar si todas las tecnologías son reales |
| Equipo externo de soporte | Usuario | Parcial | `#equipo-externo` | Confirmar si son perfiles reales o placeholders |
| Canal de soporte clasificado por caso | Usuario | Actual | `#canal-soporte` | Incorporar SLA si existe |
| Formulario de soporte | Usuario/técnica | Actual | `data-form-kind="support"` | Verificar flujo interno de respuesta |
| FAQ de continuidad | Usuario | Actual | `soporte/index.html` | Añadir schema FAQ |
| Botón sticky de WhatsApp | Usuario | Actual | Varias rutas + CSS | Definir medición/atribución |
| SEO técnico base | Técnica | Actual | Canonical, robots, sitemap | Completar social metadata |
| Tracking de CTA y scroll | Técnica | Parcial | `trackUiEvent()`, observers | Falta implementación analítica visible |
| Lead scoring | Técnica | Actual | `calcLeadScore()` | Validar modelo con operación real |
| Prefill por query string | Técnica | Actual | `getLeadContextFromQuery()` | Documentar convención de parámetros |
| Envío dual de formularios | Técnica | Actual | Formspree + Google Script | Manejar observabilidad y errores |

## Funcionalidades Visibles Para Usuario

### Inicio

- Mensaje central orientado a “Power BI y automatización de reportes en Chile”.
- CTA a evaluación inicial.
- CTA a WhatsApp.
- Mapa de dolores comunes.
- Explicación del proceso de trabajo.

### Confianza y autoridad

- Historia y visión de la consultora.
- Diferenciadores explícitos.
- Dirección técnica visible.
- Equipo ampliado, aunque con señales de placeholder en un perfil.

### Evidencia

- Casos anonimizados.
- Demo de dashboard.
- Métricas antes/después.
- Filtro por sector.

### Oferta

- Cuatro servicios principales.
- Un servicio complementario de crecimiento.
- Precios desde valores visibles.
- FAQ comercial.

### Continuidad

- Ruta específica para soporte y postventa.
- Separación del formulario de soporte respecto del comercial.
- Explicación de propiedad, NDA y continuidad.

## Funcionalidades Técnicas Internas

- Construcción dinámica de submenús por ruta usando `NAV_SECTIONS`.
- Scroll progress bar.
- Cálculo dinámico de `--nav-height`.
- Navbar con estados `scrolled`, `is-open`, `is-current`.
- Parallax suave en hero.
- Preparación para `gtag`.
- Captura de origen de CTA.
- Observación de profundidad de scroll.
- Normalización y validación de formularios.
- Scoring interno de leads.
- Toasts de confirmación.
- Campos opcionales expandibles.
- Contador de caracteres en textareas.
- Demo Chart.js con dataset sintético.

## Funcionalidades Incompletas O Parciales

| Funcionalidad | Qué existe | Qué falta |
| --- | --- | --- |
| Analítica | Hooks de tracking y eventos | No se detecta carga explícita de GA/gtag en HTML principal |
| Gestión de contenido | Edición directa en HTML | No existe CMS ni fuente única reutilizable |
| Componentización | Clases compartidas y JS global | No hay parciales ni sistema de templates |
| Social SEO | Home y algunas páginas con OG | Servicios y soporte están incompletos |
| Autoridad/equipo | Un perfil muy desarrollado, otro parece placeholder | Validación editorial y credenciales |
| Evidencia comercial | Casos y métricas presentes | Falta política clara de anonimización y actualización |

## Funcionalidades Inferidas Pero No Confirmadas

- Captura y seguimiento comercial posterior a través de Google Sheets.
- Uso del sitio como parte activa del funnel de venta consultiva.
- Publicación en GitHub Pages productivo.
- Uso de los casos como disparadores de demos personalizadas en reuniones comerciales.

## Oportunidades De Mejora Por Funcionalidad

### Conversión

- Medir CTR por CTA, dolor, caso y paquete.
- Alinear mejor la promesa de “respuesta en 24h” con el flujo real de seguimiento.
- Simplificar el formulario lead si la conversión es baja.

### Confianza

- Validar placeholders y corregir nombres de equipo.
- Reforzar evidencia con criterios de medición más explícitos.
- Incluir testimonios o logos reales si la política comercial lo permite.

### Soporte

- Definir SLA o expectativa de respuesta por categoría.
- Clarificar si el formulario de soporte es solo para clientes o también para prospectos con dudas técnicas.

### Técnica

- Extraer configuración a una capa central.
- Agregar monitoreo de errores de formularios.
- Incorporar pruebas manuales documentadas por flujo crítico.
