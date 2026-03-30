# Project Overview

## Estado De Evidencia

| Tipo | Qué significa en esta documentación |
| --- | --- |
| Confirmado | Respaldado directamente por código, contenido o archivos del repositorio |
| Inferencia razonable | Deducción consistente con el repositorio, pero no declarada explícitamente |
| Pendiente de validar | Punto que requiere confirmación humana o definición del equipo |

## Visión General Del Proyecto

42NT Solutions es un sitio web multipágina enfocado en presentar una consultora especializada en Business Intelligence, automatización de reportes, integración de datos y soporte post-entrega. La estructura del sitio busca acompañar al visitante desde el entendimiento del problema hasta la solicitud de evaluación inicial, mostrando autoridad técnica, casos y oferta comercial visible.

El proyecto no está construido como aplicación web tradicional, sino como una solución estática con contenido estructurado por rutas. La estrategia principal es comercial: convertir visitas en oportunidades calificadas, con un discurso orientado a empresas medianas y decisores de áreas como Finanzas, Operaciones y Supply Chain.

## Contexto Del Problema

### Confirmado

- El sitio se dirige a organizaciones que operan con datos dispersos, reporting manual, cierres lentos de KPIs y falta de una versión confiable del dato.
- El contenido enfatiza fricciones de negocio antes que herramientas.

### Inferencia razonable

- El problema comercial de fondo no es solo “necesito dashboards”, sino baja madurez analítica y operativa que frena decisiones.
- El sitio intenta diferenciarse de proveedores genéricos reforzando visibilidad del criterio técnico y responsabilidad post-entrega.

## Objetivo General

Captar, calificar y convertir oportunidades comerciales para 42NT Solutions mediante un sitio corporativo que haga visible el problema, la metodología, la autoridad técnica, la oferta de servicios y la continuidad posterior a la implementación.

## Objetivos Específicos

- Explicar con claridad qué tipo de problemas resuelve 42NT Solutions.
- Mostrar una propuesta de valor concreta y orientada a negocio.
- Segmentar la navegación por intención del usuario.
- Presentar servicios y precios de referencia sin fricción comercial innecesaria.
- Mostrar casos reales anonimizados y resultados medidos.
- Dar confianza mediante autoridad técnica, metodología y soporte.
- Recibir leads con contexto suficiente para evaluación inicial.
- Separar solicitudes comerciales de solicitudes de soporte.

## Alcance Funcional

### Incluido

- Página de inicio con propuesta de valor, dolores y proceso.
- Página institucional “Quiénes somos”.
- Página “Cómo trabajamos” con resultados, demo y casos.
- Página “Nuestros servicios” con oferta, precios y formulario lead.
- Página “Soporte” con continuidad, tecnología, canal y formulario soporte.
- Navegación compartida entre rutas.
- FAQ comercial y FAQ de continuidad.
- Contacto por WhatsApp.

### No incluido en el núcleo productivo

- Backoffice o CMS.
- Gestión de contenido desde panel administrativo.
- Sistema de autenticación.
- Base de datos propia del sitio.
- API propia o capa backend detectada.
- Automatización de deploy, CI/CD o testing.

## Alcance Técnico

### Confirmado

- Sitio estático basado en HTML, CSS y JS.
- Un único archivo de estilos globales y un único archivo de comportamiento global para la versión principal.
- Dependencia de CDNs para UI y animaciones.
- Integraciones de formularios completamente client-side.

### Inferencia razonable

- El mantenimiento actual es manual y orientado a edición directa de archivos.
- La publicación esperada es simple y compatible con hosting estático.

## Exclusiones

- No se asume existencia de procesos internos, CRM o pipeline comercial más allá de los endpoints visibles.
- No se infiere una arquitectura de datos de clientes fuera de lo que el sitio declara como capacidad de la consultora.
- No se consideran parte del producto materiales exploratorios que puedan generarse fuera de esta raíz productiva.

## Estado De Madurez Del Proyecto

| Dimensión | Lectura | Estado |
| --- | --- | --- |
| Producto web | Funcional y con intención comercial clara | Confirmado |
| Contenido | Maduro a nivel narrativo y relativamente alineado por ruta | Confirmado |
| Arquitectura de código | Funcional, pero monolítica y con deuda | Confirmado |
| Operación | Sin tooling formal detectado | Confirmado |
| Escalabilidad editorial | Limitada por duplicación manual | Confirmado |
| Preparación para continuidad de terceros | Parcial antes de esta documentación | Confirmado |

## Dependencias Funcionales Y Técnicas

### Dependencias funcionales

- WhatsApp como canal de conversación inmediata.
- Dirección técnica visible de Fortunato Bravo N.
- Casos y mensajes de credibilidad comercial.
- Formularios para lead y soporte.

### Dependencias técnicas

- Bootstrap 5.3.3
- Bootstrap Icons
- Google Fonts
- AOS
- Chart.js
- Formspree
- Google Apps Script
- Recursos remotos de iconografía en la página de soporte

### Riesgos de dependencia

- Caída o cambio de CDNs.
- Cambio de endpoints de formularios.
- Cambios manuales desincronizados entre rutas.
- Información comercial o de contacto hardcodeada en múltiples archivos.

## Resumen De Valor Estratégico

El proyecto cumple una función más amplia que “presencia web”: ordena el posicionamiento comercial de 42NT Solutions, hace visible una promesa de valor basada en criterio técnico y continuidad, y traduce capacidades complejas de datos/BI en una narrativa comprensible para decisores de negocio.

Su valor estratégico radica en tres frentes:

- Reduce la fricción comercial inicial al explicar dolores, solución y próximos pasos.
- Aumenta confianza mostrando precio, metodología, casos y responsabilidad técnica.
- Separa soporte de ventas, lo que ayuda a profesionalizar la operación y la expectativa post-entrega.

## Pendiente De Validar

- Qué activos o páginas deben seguir siendo públicos y cuáles deben pasar a archivo interno.
- Qué evidencia comercial es placeholder y cuál corresponde a referencias reales anonimizadas.
- Si la ruta de soporte debe permanecer pública o reservada a clientes.
- Si futuros prototipos deben vivir en un repositorio separado o en un archivo interno fuera del sitio productivo.
