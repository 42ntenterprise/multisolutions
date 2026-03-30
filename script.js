const CONFIG = {
  FORMSPREE_URL: 'https://formspree.io/f/xdawnkgn',
  GOOGLE_SHEETS_URL: '',
};

const NAV_SECTIONS = {
  inicio: [
    {
      id: 'hero',
      title: 'Visi&oacute;n general',
      copy: 'Mensaje central y propuesta de valor.',
    },
    {
      id: 'quienes-somos',
      title: 'Qui&eacute;nes somos',
      copy: 'Consultora, direcci&oacute;n t&eacute;cnica y forma de trabajo.',
    },
    {
      id: 'dolor',
      title: 'Problemas que resolvemos',
      copy: 'Dolores operativos, financieros y de reporting.',
    },
    {
      id: 'proceso',
      title: 'C&oacute;mo funciona',
      copy: 'Ruta desde el diagn&oacute;stico hasta la entrega.',
    },
    {
      id: 'cta-final',
      title: 'Siguiente paso',
      copy: 'Cierre de la p&aacute;gina y acceso a la evaluaci&oacute;n inicial.',
    },
  ],
  'quienes-somos': [
    {
      id: 'hero',
      title: 'Presentaci&oacute;n',
      copy: 'Contexto, enfoque y propuesta de la consultora.',
    },
    {
      id: 'quienes-somos',
      title: 'Nuestra historia',
      copy: 'Origen, visi&oacute;n y forma de trabajo.',
    },
    {
      id: 'diferenciadores',
      title: 'Diferenciadores',
      copy: 'Lo que vuelve distinta la experiencia 42NT.',
    },
    {
      id: 'autoridad',
      title: 'Equipo y autoridad',
      copy: 'Direcci&oacute;n t&eacute;cnica visible y respaldo profesional.',
    },
    {
      id: 'cta-final',
      title: 'Evaluaci&oacute;n inicial',
      copy: 'Puente directo hacia la siguiente conversaci&oacute;n.',
    },
  ],
  'como-trabajamos': [
    {
      id: 'hero',
      title: 'Panorama general',
      copy: 'Resumen del enfoque y del tipo de resultados que mostramos.',
    },
    {
      id: 'resultados-clave',
      title: 'Resultados clave',
      copy: 'Impacto esperado y m&eacute;tricas de referencia.',
    },
    {
      id: 'enfoque',
      title: 'Enfoque',
      copy: 'Metodolog&iacute;a y forma de ejecuci&oacute;n.',
    },
    {
      id: 'demo-referencial',
      title: 'Demo referencial',
      copy: 'Ejemplo de dashboard con lectura ejecutiva.',
    },
    {
      id: 'casos',
      title: 'Casos reales',
      copy: 'Evidencia por industria y tipo de problema.',
    },
    {
      id: 'cta-final',
      title: 'Solicitar demo',
      copy: 'Cierre con llamada a revisar un caso aplicable.',
    },
  ],
  'nuestros-servicios': [
    {
      id: 'hero',
      title: 'Resumen comercial',
      copy: 'Oferta general, entregables y orientaci&oacute;n de compra.',
    },
    {
      id: 'servicios',
      title: 'Servicios',
      copy: 'Oferta principal y alcance de cada soluci&oacute;n.',
    },
    {
      id: 'servicio-complementario',
      title: 'Servicio complementario',
      copy: 'Plan de crecimiento basado en datos.',
    },
    {
      id: 'precios',
      title: 'Precios',
      copy: 'Servicios y punto de partida visible.',
    },
    {
      id: 'faq',
      title: 'Preguntas frecuentes',
      copy: 'Dudas habituales antes de solicitar evaluaci&oacute;n.',
    },
    {
      id: 'cotizar',
      title: 'Solicitar evaluaci&oacute;n',
      copy: 'Formulario con contexto para revisar tu caso.',
    },
  ],
  soporte: [
    {
      id: 'hero',
      title: 'Visi&oacute;n general',
      copy: 'Contexto de continuidad, soporte y post-entrega.',
    },
    {
      id: 'continuidad',
      title: 'Continuidad',
      copy: 'Qu&eacute; cubre el soporte post-entrega.',
    },
    {
      id: 'tecnologia',
      title: 'Tecnolog&iacute;a',
      copy: 'Base t&eacute;cnica que sostiene continuidad y trazabilidad.',
    },
    {
      id: 'equipo-externo',
      title: 'Equipo externo',
      copy: 'Especialistas para ciberseguridad y administraci&oacute;n.',
    },
    {
      id: 'canal-soporte',
      title: 'Canal de soporte',
      copy: 'C&oacute;mo se clasifica y prioriza una solicitud.',
    },
    {
      id: 'solicitud-soporte',
      title: 'Enviar solicitud',
      copy: 'Formulario diferenciado para continuidad.',
    },
    {
      id: 'faq',
      title: 'Preguntas frecuentes',
      copy: 'Respuestas sobre soporte, propiedad y garant&iacute;as.',
    },
  ],
};

function normalizeNavPath(pathname = '') {
  return pathname.replace(/index\.html$/, '').replace(/\/+$/, '');
}

function getNavSlug(pathname = '') {
  const normalizedPath = normalizeNavPath(pathname);
  if (!normalizedPath) return 'inicio';

  const pathParts = normalizedPath.split('/').filter(Boolean);
  return pathParts[pathParts.length - 1] || 'inicio';
}

function buildNavSectionHref(baseHref, sectionId, currentSlug, targetSlug) {
  if (currentSlug === targetSlug) return `#${sectionId}`;
  return `${baseHref}#${sectionId}`;
}

function syncGlobalNav() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;

  const currentSlug = getNavSlug(window.location.pathname);

  nav.querySelectorAll('.nav-dropdown').forEach(dropdown => {
    const primaryLink = dropdown.querySelector('[data-nav-path]');
    const menu = dropdown.querySelector('.nav-dropdown-menu');
    if (!primaryLink || !menu) return;

    const rawHref = primaryLink.getAttribute('href') || '';
    const targetUrl = new URL(rawHref || './', window.location.href);
    const targetSlug = getNavSlug(targetUrl.pathname);
    const sections = NAV_SECTIONS[targetSlug];
    if (!sections || !sections.length) return;

    const menuLabel = (primaryLink.textContent || '').trim();
    const baseHref = rawHref.split('#')[0] || './';

    menu.setAttribute('role', 'menu');
    if (menuLabel) {
      menu.setAttribute('aria-label', `Submen&uacute; de ${menuLabel}`);
    }

    menu.innerHTML = sections.map(section => {
      const href = buildNavSectionHref(baseHref, section.id, currentSlug, targetSlug);
      return `
        <a class="nav-dropdown-link" href="${href}">
          <span class="nav-dropdown-link-title">${section.title}</span>
          <span class="nav-dropdown-link-copy">${section.copy}</span>
        </a>
      `;
    }).join('');
  });
}

function initScrollBar() {
  const bar = document.createElement('div');
  bar.id = 'scrollBar';
  document.body.prepend(bar);

  const updateBar = () => {
    const scrollTop = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const width = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
    bar.style.width = `${width}%`;
  };

  window.addEventListener('scroll', updateBar, { passive: true });
  updateBar();
}

function initNavHeight() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;

  const syncNavHeight = () => {
    const height = Math.ceil(nav.getBoundingClientRect().height);
    document.documentElement.style.setProperty('--nav-height', `${height || 92}px`);
  };

  syncNavHeight();
  window.addEventListener('resize', syncNavHeight, { passive: true });

  if (typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(syncNavHeight);
    observer.observe(nav);
  }
}

function initNavbar() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  const collapse = document.getElementById('navMenu');
  const toggler = nav.querySelector('.navbar-toggler');

  const syncNavUiState = isOpen => {
    if (!toggler) return;
    toggler.classList.toggle('is-open', isOpen);
    toggler.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('nav-is-open', isOpen);
  };

  const syncFallbackMenu = isOpen => {
    if (!collapse) return;
    collapse.classList.toggle('show', isOpen);
    syncNavUiState(isOpen);
  };

  if (collapse && toggler && typeof bootstrap === 'undefined') {
    syncNavUiState(collapse.classList.contains('show'));
    toggler.addEventListener('click', () => {
      syncFallbackMenu(!collapse.classList.contains('show'));
    });
  } else if (collapse && toggler) {
    syncNavUiState(collapse.classList.contains('show'));
    collapse.addEventListener('show.bs.collapse', () => syncNavUiState(true));
    collapse.addEventListener('hidden.bs.collapse', () => syncNavUiState(false));
  }

  const toggleScrolled = () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  };

  window.addEventListener('scroll', toggleScrolled, { passive: true });
  toggleScrolled();
}

function initActiveNav() {
  const currentPath = normalizeNavPath(window.location.pathname);
  document.querySelectorAll('[data-nav-path]').forEach(link => {
    const targetPath = new URL(link.getAttribute('href'), window.location.href)
      .pathname;
    const normalizedTargetPath = normalizeNavPath(targetPath);
    const isActive = currentPath === normalizedTargetPath;
    link.classList.toggle('is-active', isActive);
    link.closest('.nav-dropdown')?.classList.toggle('is-current', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    }
  });
}

function initNavDropdowns() {
  const nav = document.getElementById('mainNav');
  if (!nav) return;

  const collapse = document.getElementById('navMenu');
  const desktopQuery = window.matchMedia('(min-width: 992px)');
  const dropdowns = Array.from(nav.querySelectorAll('.nav-dropdown'));
  if (!dropdowns.length) return;
  const closeTimers = new WeakMap();
  let hoverSuspendTimer = null;

  const setOpen = (dropdown, isOpen) => {
    dropdown.classList.toggle('is-open', isOpen);
    const toggle = dropdown.querySelector('.nav-dropdown-toggle');
    toggle?.setAttribute('aria-expanded', String(isOpen));
  };

  const clearCloseTimer = dropdown => {
    const timer = closeTimers.get(dropdown);
    if (!timer) return;
    window.clearTimeout(timer);
    closeTimers.delete(dropdown);
  };

  const scheduleClose = dropdown => {
    clearCloseTimer(dropdown);
    const timer = window.setTimeout(() => {
      setOpen(dropdown, false);
      closeTimers.delete(dropdown);
    }, 140);
    closeTimers.set(dropdown, timer);
  };

  const suspendHover = () => {
    if (!desktopQuery.matches) return;
    nav.classList.add('nav-suspend-hover');
    if (hoverSuspendTimer) window.clearTimeout(hoverSuspendTimer);
    hoverSuspendTimer = window.setTimeout(() => {
      nav.classList.remove('nav-suspend-hover');
      hoverSuspendTimer = null;
    }, 420);
  };

  const closeAll = (except = null) => {
    dropdowns.forEach(dropdown => {
      clearCloseTimer(dropdown);
      if (dropdown !== except) setOpen(dropdown, false);
    });
  };

  const closeMobileNav = () => {
    if (!collapse || !collapse.classList.contains('show')) return;

    if (typeof bootstrap !== 'undefined') {
      bootstrap.Collapse.getOrCreateInstance(collapse).hide();
      return;
    }

    collapse.classList.remove('show');
    const toggler = nav.querySelector('.navbar-toggler');
    toggler?.classList.remove('is-open');
    toggler?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-is-open');
  };

  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.nav-dropdown-toggle');
    const menu = dropdown.querySelector('.nav-dropdown-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', event => {
      event.preventDefault();
      event.stopPropagation();
      const isOpen = dropdown.classList.contains('is-open');
      closeAll(dropdown);
      setOpen(dropdown, !isOpen);
    });

    dropdown.addEventListener('mouseenter', () => {
      if (!desktopQuery.matches) return;
      clearCloseTimer(dropdown);
      closeAll(dropdown);
      setOpen(dropdown, true);
    });

    dropdown.addEventListener('mouseleave', () => {
      if (!desktopQuery.matches) return;
      scheduleClose(dropdown);
    });

    dropdown.addEventListener('focusin', () => {
      if (!desktopQuery.matches) return;
      clearCloseTimer(dropdown);
      closeAll(dropdown);
      setOpen(dropdown, true);
    });

    dropdown.addEventListener('keydown', event => {
      if (event.key !== 'Escape') return;
      setOpen(dropdown, false);
      toggle.focus();
    });

    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        suspendHover();
        closeAll();
        closeMobileNav();
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      });
    });
  });

  document.addEventListener('click', event => {
    if (!nav.contains(event.target)) closeAll();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeAll();
  });

  const resetDropdowns = () => closeAll();
  if (collapse) {
    collapse.addEventListener('hidden.bs.collapse', resetDropdowns);
  }

  const handleBreakpointChange = () => closeAll();
  if (typeof desktopQuery.addEventListener === 'function') {
    desktopQuery.addEventListener('change', handleBreakpointChange);
  } else if (typeof desktopQuery.addListener === 'function') {
    desktopQuery.addListener(handleBreakpointChange);
  }
}

function initAos() {
  if (typeof AOS !== 'undefined') {
    AOS.init({ once: true, duration: 700, offset: 48 });
  }
}

function initParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const heroSections = Array.from(document.querySelectorAll('.hero-section'));
  if (!heroSections.length) return;

  let ticking = false;

  const updateParallax = () => {
    const viewportHeight = window.innerHeight || 1;
    const scrollY = window.scrollY || 0;

    document.body.style.setProperty('--page-parallax', `${Math.max(-48, scrollY * -0.08)}px`);

    heroSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const progress = rect.top / viewportHeight;
      const offset = Math.max(-26, Math.min(26, progress * -22));
      section.style.setProperty('--hero-parallax-y', `${offset}px`);
    });

    ticking = false;
  };

  const requestTick = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateParallax);
  };

  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', requestTick, { passive: true });
  updateParallax();
}

function getLeadSource() {
  const params = new URLSearchParams(window.location.search);
  return {
    source: params.get('utm_source') || 'direct',
    medium: params.get('utm_medium') || '',
    campaign: params.get('utm_campaign') || '',
    referrer: document.referrer || '',
  };
}

function trackUiEvent(eventName, detail = {}) {
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: eventName, ...detail });
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, detail);
  }
}

function resolveCtaSource(trigger) {
  if (!trigger) return '';
  return (
    trigger.getAttribute('data-cta-source') ||
    trigger.closest('section[id]')?.id ||
    trigger.closest('[data-section-id]')?.getAttribute('data-section-id') ||
    window.location.pathname
  );
}

function ensureToastStack() {
  let stack = document.querySelector('.toast-stack');
  if (stack) return stack;

  stack = document.createElement('div');
  stack.className = 'toast-stack';
  document.body.appendChild(stack);
  return stack;
}

function showToast(message, type = 'success') {
  const stack = ensureToastStack();
  const toast = document.createElement('div');
  const mappedType = type === 'error' ? 'danger' : type;
  toast.className = `site-toast site-toast--${mappedType}`;
  toast.innerHTML = message;
  stack.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('is-visible'));

  window.setTimeout(() => {
    toast.classList.remove('is-visible');
    window.setTimeout(() => toast.remove(), 220);
  }, 5200);
}

function getDomainFromEmail(email) {
  const freeProviders = new Set([
    'gmail.com', 'gmail.cl',
    'yahoo.com', 'yahoo.es', 'yahoo.cl',
    'hotmail.com', 'hotmail.cl', 'hotmail.es',
    'outlook.com', 'outlook.cl', 'outlook.es',
    'live.com', 'live.cl',
    'icloud.com', 'me.com', 'mac.com',
    'protonmail.com', 'pm.me',
    'tutanota.com',
  ]);

  const parts = email.split('@');
  if (parts.length < 2) return '';
  const domain = parts[1].toLowerCase().trim();
  if (!domain.includes('.')) return '';
  return freeProviders.has(domain) ? 'correo personal' : domain;
}

function calcLeadScore(formData) {
  let score = 0;

  const cargoRol = formData.get('cargo_rol') || '';
  if (['CFO', 'Controller', 'Gerente de Finanzas'].includes(cargoRol)) score += 20;
  if (['Gerente de Operaciones', 'Jefe de Operaciones', 'Supply Chain'].includes(cargoRol)) score += 15;
  if (cargoRol === 'Gerencia General') score += 10;
  if (cargoRol === 'Otro') score += 5;

  const tamano = formData.get('tamano_empresa') || '';
  if (tamano === '200+') score += 35;
  if (tamano === '51-200') score += 25;
  if (tamano === '11-50') score += 12;
  if (tamano === '1-10') score += 5;

  const industria = formData.get('industria') || '';
  if (['Retail', 'Logística', 'Finanzas', 'Telecomunicaciones', 'Minería'].includes(industria)) score += 10;

  const urgency = formData.get('urgency') || '';
  if (urgency === 'esta-semana' || urgency === 'hoy') score += 30;
  if (urgency === '2-4-semanas' || urgency === '24-48h') score += 18;
  if (urgency === '1-3-meses') score += 8;

  const necesidad = (formData.get('necesidad') || '').trim();
  if (necesidad && necesidad !== 'Otro caso / evaluación especial') score += 10;
  if (necesidad === 'Otro caso / evaluación especial') score += 6;

  const whatsapp = (formData.get('whatsapp') || '').replace(/\D/g, '');
  if (whatsapp.length >= 8) score += 12;

  const desc = formData.get('descripcion') || '';
  const descLen = desc.trim().length;
  if (descLen > 120) score += 12;
  else if (descLen > 40) score += 7;

  const email = formData.get('email') || '';
  const domain = getDomainFromEmail(email);
  if (domain && domain !== 'correo personal') score += 8;

  const fuente = formData.get('fuente_datos') || '';
  if (fuente === 'ERP' || fuente === 'SQL / Base de datos') score += 5;

  return Math.min(score, 100);
}

function scoreLabel(score) {
  if (score >= 70) return 'CALIENTE';
  if (score >= 40) return 'TIBIO';
  return 'FRÍO';
}

function sendToFormspree(formData) {
  return fetch(CONFIG.FORMSPREE_URL, {
    method: 'POST',
    body: formData,
    headers: { Accept: 'application/json' },
  }).then(async response => {
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.error || `Formspree error ${response.status}`);
    }
    return response.json();
  });
}

function sendToGoogleSheets(payload = {}) {
  const endpoint = (CONFIG.GOOGLE_SHEETS_URL || '').trim();
  if (!endpoint) return Promise.resolve();

  const body = new URLSearchParams();

  Object.entries(payload).forEach(([key, value]) => {
    body.append(key, value == null ? '' : String(value));
  });

  return fetch(endpoint, {
    method: 'POST',
    mode: 'no-cors',
    keepalive: true,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: body.toString(),
  });
}

function getTimestampCL() {
  return new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' });
}

function sanitizeForSubject(str) {
  return (str || '').replace(/[^\w\s\-áéíóúñÁÉÍÓÚÑ]/g, '').trim().slice(0, 60);
}

function setButtonLoading(button, isLoading) {
  if (!button) return;

  if (isLoading) {
    button.disabled = true;
    button.setAttribute('aria-busy', 'true');
    button.setAttribute('aria-disabled', 'true');
    button.dataset.originalHtml = button.innerHTML;
    button.dataset.originalAriaLabel = button.getAttribute('aria-label') || '';
    button.setAttribute('aria-label', 'Enviando formulario');
    button.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-label="Enviando formulario"></span>Enviando...';
  } else {
    button.disabled = false;
    button.setAttribute('aria-busy', 'false');
    button.removeAttribute('aria-disabled');
    if (button.dataset.originalAriaLabel) {
      button.setAttribute('aria-label', button.dataset.originalAriaLabel);
    } else {
      button.removeAttribute('aria-label');
    }
    button.innerHTML = button.dataset.originalHtml || button.innerHTML;
  }
}

function markFormStarted(form, sourceOverride = '') {
  const startedAt = form.querySelector('[name="form_inicio_ts"]');
  const startedSource = form.querySelector('[name="form_inicio_origen"]');
  const originField = form.querySelector('[name="origen_cta"]');
  const resolvedSource = sourceOverride || originField?.value || startedSource?.value || window.location.pathname;

  if (startedAt && !startedAt.value) {
    startedAt.value = getTimestampCL();
  }

  if (startedSource && !startedSource.value) {
    startedSource.value = resolvedSource;
  }

  if (!form.dataset.formStartedTracked) {
    form.dataset.formStartedTracked = 'true';
    trackUiEvent('form_start', {
      form_kind: form.dataset.formKind || 'lead',
      form_source: resolvedSource,
    });
  }
}

function validateForm(form) {
  let isValid = true;
  let firstInvalid = null;

  form.querySelectorAll('[required]').forEach(field => {
    const value = typeof field.value === 'string' ? field.value.trim() : field.value;
    const valid = Boolean(value);
    field.classList.toggle('is-invalid', !valid);
    if (!valid && !firstInvalid) firstInvalid = field;
    if (!valid) isValid = false;
  });

  if (firstInvalid) {
    firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
    try {
      firstInvalid.focus({ preventScroll: true });
    } catch (error) {
      firstInvalid.focus();
    }
  }

  return isValid;
}

function clearInvalidOnInput(form) {
  form.querySelectorAll('.form-control, .form-select, .form-textarea').forEach(field => {
    field.addEventListener('input', () => field.classList.remove('is-invalid'));
    field.addEventListener('change', () => field.classList.remove('is-invalid'));
  });
}

function bindChoicePills(scope = document) {
  scope.querySelectorAll('.choice-pill').forEach(label => {
    const input = label.querySelector('input');
    if (!input) return;

    const sync = () => {
      const name = input.name;
      scope.querySelectorAll(`input[name="${name}"]`).forEach(item => {
        item.closest('.choice-pill')?.classList.toggle('is-selected', item.checked);
      });
    };

    input.addEventListener('change', sync);
    sync();
  });
}

function getLeadContextFromQuery() {
  const params = new URLSearchParams(window.location.search);
  return {
    need: params.get('need') || '',
    industry: params.get('industry') || '',
    caseName: params.get('case') || '',
    context: params.get('context') || '',
    origin: params.get('origin') || '',
    title: params.get('title') || '',
    sector: params.get('sector') || '',
  };
}

function applyLeadContext(form, context) {
  if (!form || !context) return;

  const needField = form.querySelector('[name="necesidad"]');
  const industryField = form.querySelector('[name="industria"]');
  const originField = form.querySelector('[name="origen_cta"]');
  const caseField = form.querySelector('[name="caso_interes"]');
  const contextField = form.querySelector('[name="demo_contexto"]');
  const banner = form.parentElement?.querySelector('[data-form-context]');
  const bannerTitle = banner?.querySelector('[data-form-context-title]');
  const bannerCopy = banner?.querySelector('[data-form-context-copy]');

  if (needField && context.need) {
    const option = [...needField.options].find(item => item.value === context.need);
    if (option) needField.value = context.need;
  }

  if (industryField && context.industry) {
    const option = [...industryField.options].find(item => item.value === context.industry);
    if (option) industryField.value = context.industry;
  }

  if (originField && context.origin) originField.value = context.origin;
  if (caseField && context.caseName) caseField.value = context.caseName;
  if (contextField && context.context) contextField.value = context.context;

  if (banner && (context.caseName || context.title || context.context)) {
    banner.hidden = false;
    if (bannerTitle) {
      bannerTitle.textContent = context.caseName
        ? `Contexto cargado: ${context.caseName}`
        : context.title || 'Contexto de solicitud cargado';
    }
    if (bannerCopy) {
      bannerCopy.textContent = context.context || 'Usaremos este contexto para personalizar la revisión inicial.';
    }
  }
}

function setupTrackedLinks() {
  document.querySelectorAll('[data-track-event], [data-cta-source]').forEach(link => {
    link.addEventListener('click', () => {
      trackUiEvent(link.getAttribute('data-track-event') || 'cta_click', {
        cta_source: resolveCtaSource(link),
        cta_target: link.getAttribute('href') || '',
        cta_label: (link.textContent || '').trim().slice(0, 100),
      });
    });
  });
}

function setupScrollTracking() {
  const formSection = document.getElementById('cotizar') || document.getElementById('solicitud-soporte');
  if (!formSection) return;

  let fired = false;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !fired) {
        fired = true;
        trackUiEvent('form_section_visible', {
          section_id: formSection.id,
          pagina: window.location.pathname,
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(formSection);

  // Track 50% and 90% page scroll depth
  const depths = [50, 90];
  const firedDepths = new Set();
  window.addEventListener('scroll', () => {
    const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (totalScrollable <= 0) return;
    const scrollPct = Math.round((window.scrollY / totalScrollable) * 100);
    depths.forEach(d => {
      if (scrollPct >= d && !firedDepths.has(d)) {
        firedDepths.add(d);
        trackUiEvent('scroll_depth', { depth_pct: d, pagina: window.location.pathname });
      }
    });
  }, { passive: true });
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();

      const navHeight =
        parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) ||
        document.getElementById('mainNav')?.offsetHeight ||
        92;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;
      window.scrollTo({ top, behavior: 'smooth' });

      document.querySelectorAll('.nav-dropdown.is-open').forEach(dropdown => {
        dropdown.classList.remove('is-open');
        dropdown.querySelector('.nav-dropdown-toggle')?.setAttribute('aria-expanded', 'false');
      });

      const collapse = document.getElementById('navMenu');
      if (collapse && collapse.classList.contains('show')) {
        if (typeof bootstrap !== 'undefined') {
          bootstrap.Collapse.getOrCreateInstance(collapse).hide();
        } else {
          collapse.classList.remove('show');
          const toggler = document.querySelector('#mainNav .navbar-toggler');
          toggler?.classList.remove('is-open');
          toggler?.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });
}

function setupOptionalToggles() {
  const toggles = document.querySelectorAll('#toggleOptional, [data-toggle-optional]');

  toggles.forEach(toggle => {
    const targetId = toggle.getAttribute('aria-controls') || toggle.getAttribute('data-toggle-optional') || 'optionalFields';
    const target = document.getElementById(targetId);
    if (!target) return;

    const icon = toggle.querySelector('i');

    const setOpen = isOpen => {
      target.hidden = !isOpen;
      toggle.setAttribute('aria-expanded', String(isOpen));
      if (icon) {
        icon.className = isOpen ? 'bi bi-dash-circle me-1' : 'bi bi-plus-circle me-1';
      }
    };

    setOpen(toggle.getAttribute('aria-expanded') === 'true');

    toggle.addEventListener('click', event => {
      event.preventDefault();
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      setOpen(!isOpen);
    });
  });
}

function setupCharCounters() {
  document.querySelectorAll('textarea[maxlength], textarea[name="descripcion"]').forEach(textarea => {
    const fallbackMax = textarea.name === 'descripcion' ? 500 : 0;
    const max = parseInt(textarea.getAttribute('maxlength') || fallbackMax, 10);
    if (!max) return;

    if (!textarea.hasAttribute('maxlength')) {
      textarea.setAttribute('maxlength', String(max));
    }

    let counter = textarea.closest('.col-12, .col-md-6, .col-lg-6')?.querySelector('.char-counter');

    if (!counter) {
      const wrapper = document.createElement('div');
      wrapper.className = 'd-flex justify-content-end mt-1';
      counter = document.createElement('small');
      counter.className = 'text-muted char-counter';
      wrapper.appendChild(counter);
      textarea.insertAdjacentElement('afterend', wrapper);
    }

    const update = () => {
      counter.textContent = `${textarea.value.length} / ${max}`;
    };

    textarea.addEventListener('input', update);
    update();
  });
}

function setupUrgencyOptions() {
  document.querySelectorAll('.urgency-option').forEach(option => {
    const input = option.querySelector('input');
    if (!input) return;

    const sync = () => {
      const group = document.querySelectorAll(`input[name="${input.name}"]`);
      group.forEach(item => {
        item.closest('.urgency-option')?.classList.toggle('selected', item.checked);
      });
    };

    input.addEventListener('change', sync);
    sync();
  });
}

function setupLeadForms() {
  const queryContext = getLeadContextFromQuery();

  document.querySelectorAll('[data-form-kind="lead"]').forEach(form => {
    clearInvalidOnInput(form);
    bindChoicePills(form);
    applyLeadContext(form, queryContext);

    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('focus', () => markFormStarted(form), { passive: true });
      field.addEventListener('input', () => markFormStarted(form));
      field.addEventListener('change', () => markFormStarted(form));
    });

    form.addEventListener('submit', async event => {
      event.preventDefault();
      markFormStarted(form);

      if (!validateForm(form)) {
        showToast('Completa los campos obligatorios para que podamos revisar tu caso.', 'danger');
        return;
      }

      const submitButton = form.querySelector('[type="submit"]');
      setButtonLoading(submitButton, true);

      const formData = new FormData(form);
      const leadSource = getLeadSource();
      const nombre = (formData.get('nombre') || '').trim();
      const cargoRol = (formData.get('cargo_rol') || '').trim();
      const empresa = (formData.get('empresa') || '').trim();
      const email = (formData.get('email') || '').trim();
      const detectedDomain = getDomainFromEmail(email);
      const timestamp = getTimestampCL();
      const origin = (formData.get('origen_cta') || '').trim();
      const caseInterest = (formData.get('caso_interes') || '').trim();
      const demoContext = (formData.get('demo_contexto') || '').trim();

      formData.set('empresa_detectada', detectedDomain);
      formData.set('utm_source', leadSource.source);
      formData.set('utm_medium', leadSource.medium);
      formData.set('utm_campaign', leadSource.campaign);
      formData.set('referrer', leadSource.referrer);
      formData.set('timestamp_cl', timestamp);
      formData.set('pagina', window.location.pathname);
      formData.set(
        '_subject',
        `Lead 42NT - ${sanitizeForSubject(formData.get('necesidad')) || 'sin necesidad'} - ${sanitizeForSubject(cargoRol) || 'sin rol'} - ${sanitizeForSubject(empresa) || 'sin empresa'}`
      );

      const sheetsPayload = {
        record_type: 'lead',
        sheet_name: 'Solicitud 42NT',
        timestamp,
        pagina: window.location.pathname,
        nombre,
        cargo_rol: cargoRol,
        empresa,
        empresa_detectada: detectedDomain,
        nombre_cargo: `${nombre}${cargoRol ? ' — ' + cargoRol : ''}`,
        email,
        whatsapp: formData.get('whatsapp') || '',
        industria: formData.get('industria') || '',
        tamano_empresa: formData.get('tamano_empresa') || '',
        necesidad: formData.get('necesidad') || '',
        fuente_datos: formData.get('fuente_datos') || '',
        numero_fuentes: formData.get('numero_fuentes') || '',
        urgencia: formData.get('urgency') || '',
        descripcion: formData.get('descripcion') || '',
        origen_cta: origin,
        caso_interes: caseInterest,
        demo_contexto: demoContext,
        form_inicio_ts: formData.get('form_inicio_ts') || '',
        form_inicio_origen: formData.get('form_inicio_origen') || '',
        utm_source: leadSource.source,
        utm_medium: leadSource.medium,
        utm_campaign: leadSource.campaign,
        referrer: leadSource.referrer,
        user_agent: navigator.userAgent,
      };

      try {
        await sendToFormspree(formData);
        sendToGoogleSheets(sheetsPayload).catch(error => console.warn('No se pudo registrar en Google Sheets.', error));

        form.hidden = true;
        form.parentElement?.querySelector('[data-form-success]')?.removeAttribute('hidden');

        trackUiEvent('form_submit_success', {
          form_kind: 'lead',
          form_source: origin || window.location.pathname,
          necesidad: formData.get('necesidad') || '',
          industria: formData.get('industria') || '',
        });

        showToast('Recibimos tu caso. Te responderemos en máximo 24 horas hábiles con revisión inicial y siguiente paso.', 'success');
      } catch (error) {
        console.error('Error al enviar lead:', error);

        trackUiEvent('form_submit_error', {
          form_kind: 'lead',
          form_source: origin || window.location.pathname,
          necesidad: formData.get('necesidad') || '',
        });

        const message = encodeURIComponent(
          `Hola 42NT, soy ${nombre || 'un prospecto'}${cargoRol ? `, ${cargoRol}` : ''}${empresa ? ` de ${empresa}` : ''}. Necesito ayuda con: ${formData.get('necesidad') || 'evaluación inicial'}.`
        );
        showToast(
          `No pudimos completar el envío. <a href="https://wa.me/56948827168?text=${message}" target="_blank" rel="noopener">Escríbenos por WhatsApp</a> y seguimos de inmediato.`,
          'danger'
        );
      } finally {
        setButtonLoading(submitButton, false);
      }
    });
  });
}

function setupSupportForms() {
  document.querySelectorAll('[data-form-kind="support"]').forEach(form => {
    clearInvalidOnInput(form);
    bindChoicePills(form);

    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('focus', () => markFormStarted(form), { passive: true });
      field.addEventListener('input', () => markFormStarted(form));
      field.addEventListener('change', () => markFormStarted(form));
    });

    form.addEventListener('submit', async event => {
      event.preventDefault();
      markFormStarted(form);

      if (!validateForm(form)) {
        showToast('Completa los datos mínimos para que soporte pueda priorizar tu solicitud.', 'danger');
        return;
      }

      const submitButton = form.querySelector('[type="submit"]');
      setButtonLoading(submitButton, true);

      const formData = new FormData(form);
      const leadSource = getLeadSource();
      const timestamp = getTimestampCL();
      const nombre = (formData.get('nombre') || '').trim();
      const empresa = (formData.get('empresa') || '').trim();
      const tipoSoporte = (formData.get('tipo_soporte') || '').trim();
      const urgencia = (formData.get('urgency') || '').trim();
      const origin = (formData.get('origen_cta') || '').trim();

      formData.set('record_type', 'support');
      formData.set('utm_source', leadSource.source);
      formData.set('utm_medium', leadSource.medium);
      formData.set('utm_campaign', leadSource.campaign);
      formData.set('referrer', leadSource.referrer);
      formData.set('timestamp_cl', timestamp);
      formData.set('pagina', window.location.pathname);
      formData.set(
        '_subject',
        `Soporte 42NT — ${sanitizeForSubject(tipoSoporte) || 'sin tipo'} — ${sanitizeForSubject(empresa) || 'sin empresa'} — ${sanitizeForSubject(urgencia) || 'sin urgencia'}`
      );

      const sheetsPayload = {
        record_type: 'support',
        sheet_name: 'Soporte 42NT',
        timestamp,
        pagina: window.location.pathname,
        nombre,
        empresa,
        email: formData.get('email') || '',
        whatsapp: formData.get('whatsapp') || '',
        cliente_status: formData.get('cliente_status') || '',
        proyecto: formData.get('proyecto') || '',
        tipo_soporte: tipoSoporte,
        impacto: formData.get('impacto') || '',
        urgency: urgencia,
        descripcion: formData.get('descripcion') || '',
        origen_cta: origin,
        form_inicio_ts: formData.get('form_inicio_ts') || '',
        form_inicio_origen: formData.get('form_inicio_origen') || '',
        utm_source: leadSource.source,
        utm_medium: leadSource.medium,
        utm_campaign: leadSource.campaign,
        referrer: leadSource.referrer,
        user_agent: navigator.userAgent,
      };

      try {
        await sendToFormspree(formData);
        sendToGoogleSheets(sheetsPayload).catch(error => console.warn('No se pudo registrar soporte en Google Sheets.', error));

        form.hidden = true;
        form.parentElement?.querySelector('[data-form-success]')?.removeAttribute('hidden');

        trackUiEvent('form_submit_success', {
          form_kind: 'support',
          form_source: origin || window.location.pathname,
          tipo_soporte: tipoSoporte,
        });

        showToast('Solicitud de soporte recibida. Revisaremos prioridad, impacto y siguiente paso dentro del horario hábil.', 'success');
      } catch (error) {
        console.error('Error al enviar soporte:', error);
        const message = encodeURIComponent(
          `Hola 42NT, necesito soporte para ${empresa || 'mi proyecto'}. Tipo: ${tipoSoporte || 'soporte general'}. Urgencia: ${urgencia || 'sin definir'}.`
        );
        showToast(
          `No pudimos completar el envío. <a href="https://wa.me/56948827168?text=${message}" target="_blank" rel="noopener">Habla con soporte por WhatsApp</a>.`,
          'danger'
        );
      } finally {
        setButtonLoading(submitButton, false);
      }
    });
  });
}

function setupLeadTriggers() {
  document.querySelectorAll('[data-select-necesidad]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const need = trigger.getAttribute('data-select-necesidad') || '';
      const industry = trigger.getAttribute('data-case-industry') || '';
      const caseName = trigger.getAttribute('data-case-origin') || '';
      const context = trigger.getAttribute('data-case-context') || '';
      const origin = resolveCtaSource(trigger);

      document.querySelectorAll('[data-form-kind="lead"]').forEach(form => {
        applyLeadContext(form, {
          need,
          industry,
          caseName,
          context,
          origin,
          title: trigger.getAttribute('data-form-context-title') || '',
        });
      });
    });
  });
}

function setupCaseFilters() {
  const context = getLeadContextFromQuery();
  const buttons = [...document.querySelectorAll('[data-case-filter]')];
  const cards = [...document.querySelectorAll('[data-case-sector]')];
  if (!buttons.length || !cards.length) return;

  const applyFilter = filter => {
    buttons.forEach(button => {
      button.classList.toggle('is-active', button.getAttribute('data-case-filter') === filter);
    });

    cards.forEach(card => {
      const matches = filter === 'todos' || card.getAttribute('data-case-sector') === filter;
      card.hidden = !matches;
    });
  };

  buttons.forEach(button => {
    button.addEventListener('click', () => applyFilter(button.getAttribute('data-case-filter') || 'todos'));
  });

  applyFilter(context.sector || 'todos');
}

function focusPackageCard(cardId) {
  if (!cardId) return;
  document.querySelectorAll('.package-card').forEach(card => card.classList.remove('package-card--focused'));
  const card = document.getElementById(cardId);
  if (!card) return;
  card.classList.add('package-card--focused');
}

function setupPackageFocus() {
  document.querySelectorAll('[data-package-focus]').forEach(trigger => {
    trigger.addEventListener('click', event => {
      const targetId = trigger.getAttribute('data-package-focus');
      focusPackageCard(targetId);

      if (trigger.getAttribute('href') === '#paquetes' || trigger.getAttribute('href') === '#evaluacion-comercial') {
        const target = document.getElementById(targetId) || document.querySelector(trigger.getAttribute('href'));
        if (target) {
          event.preventDefault();
          const navHeight = document.getElementById('mainNav')?.offsetHeight || 82;
          const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }

      const need = trigger.getAttribute('data-select-necesidad');
      if (need) {
        document.querySelectorAll('[data-form-kind="lead"]').forEach(form => {
          applyLeadContext(form, {
            need,
            origin: resolveCtaSource(trigger),
          });
        });
      }
    });
  });

  const currentNeed = getLeadContextFromQuery().need;
  const packageMap = {
    'Diagnóstico de Datos': 'paquete-diagnostico',
    'Dashboard Gerencial': 'paquete-dashboard',
    'Integración de Datos': 'paquete-integracion',
    'Pronóstico de Negocio': 'paquete-pronostico',
    'Proyecto a medida': 'paquete-medida',
  };

  if (currentNeed && packageMap[currentNeed]) {
    focusPackageCard(packageMap[currentNeed]);
  }
}

function initExecutiveDemoDashboard() {
  const canvas = document.getElementById('demo-dashboard-canvas');
  const skeletonEl = document.getElementById('demo-chart-skeleton');
  const kpiGrid = document.getElementById('demo-kpi-grid');
  const updatedEl = document.getElementById('demo-updated-at');

  if (!canvas || !skeletonEl || !kpiGrid || typeof Chart === 'undefined') return;
  if (canvas.dataset.chartReady === 'true') return;

  canvas.dataset.chartReady = 'true';

  const DAYS = 30;
  const today = new Date();
  const monthlySalesTarget = 142800000;
  const targetAchievement = 0.934;
  const monthlyGoalTarget = monthlySalesTarget / targetAchievement;
  const previousMonthSales = monthlySalesTarget / 1.083;
  const stockCoverageDays = 15;
  const pendingOrders = 47;
  const baseGoals = [];
  const baseSales = [];
  const labels = [];

  const formatClp = value =>
    '$' + value.toLocaleString('es-CL', { maximumFractionDigits: 0 });

  const formatPercent = value =>
    value.toLocaleString('es-CL', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }) + '%';

  for (let i = 0; i < DAYS; i += 1) {
    const date = new Date(today);
    date.setDate(today.getDate() - (DAYS - 1 - i));

    const weekday = date.getDay();
    const weekendFactor = weekday === 0 ? 0.76 : weekday === 6 ? 0.88 : 1;
    const goalWave = 1 + Math.sin(i / 4.2) * 0.07 + Math.cos(i / 6.1) * 0.03;
    const dailyGoal = 5050000 * weekendFactor * goalWave;

    const salesFactor =
      0.91 +
      Math.sin((i + 2) / 3.6) * 0.05 +
      (i > 22 ? 0.04 : 0) -
      (i === 11 ? 0.08 : 0) +
      (i === 24 ? 0.05 : 0);
    const dailySales = dailyGoal * Math.max(0.79, Math.min(1.05, salesFactor));

    baseGoals.push(dailyGoal);
    baseSales.push(dailySales);
    labels.push(
      date.toLocaleDateString('es-CL', {
        day: '2-digit',
        month: 'short',
      })
    );
  }

  const goalFactor = monthlyGoalTarget / baseGoals.reduce((acc, value) => acc + value, 0);
  const salesFactor = monthlySalesTarget / baseSales.reduce((acc, value) => acc + value, 0);

  const goals = baseGoals.map(value => Math.round(value * goalFactor));
  const sales = baseSales.map(value => Math.round(value * salesFactor));

  const updatedDate = today.toLocaleDateString('es-CL', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  if (updatedEl) {
    updatedEl.textContent = `Dataset demo 42NT - Actualizacion simulada cada hora - ${updatedDate}`;
  }

  const kpis = [
    {
      label: 'Ventas del mes',
      value: formatClp(monthlySalesTarget),
      meta: '+8,3% vs mes anterior',
      tone: 'up',
    },
    {
      label: 'Cumplimiento vs meta',
      value: formatPercent(targetAchievement * 100),
      meta: 'Meta mensual en seguimiento',
      tone: 'neutral',
    },
    {
      label: 'Cobertura de stock',
      value: `${stockCoverageDays} dias`,
      meta: 'Objetivo: 18 dias',
      tone: 'neutral',
    },
    {
      label: 'Pedidos pendientes',
      value: pendingOrders.toLocaleString('es-CL'),
      meta: 'Priorizacion operativa del dia',
      tone: 'down',
    },
    {
      label: 'Variacion mensual',
      value: `+${formatPercent(((monthlySalesTarget - previousMonthSales) / previousMonthSales) * 100)}`,
      meta: 'Mejor ritmo que el mes anterior',
      tone: 'up',
    },
  ];

  kpiGrid.innerHTML = kpis.map(item => `
    <div class="demo-kpi-card">
      <span class="demo-kpi-label">${item.label}</span>
      <strong class="demo-kpi-value">${item.value}</strong>
      <span class="demo-kpi-meta ${item.tone}">${item.meta}</span>
    </div>
  `).join('');

  skeletonEl.style.display = 'none';
  canvas.style.display = 'block';

  new Chart(canvas.getContext('2d'), {
    data: {
      labels,
      datasets: [
        {
          type: 'bar',
          label: 'Ventas diarias',
          data: sales,
          backgroundColor: 'rgba(0,187,255,0.52)',
          borderColor: 'rgba(0,187,255,0.85)',
          borderWidth: 1,
          borderRadius: 8,
          maxBarThickness: 18,
        },
        {
          type: 'line',
          label: 'Meta diaria',
          data: goals,
          borderColor: '#ff8a65',
          backgroundColor: 'rgba(255,138,101,0.18)',
          borderWidth: 2.5,
          pointRadius: 0,
          pointHoverRadius: 4,
          tension: 0.32,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(8,18,31,0.94)',
          borderColor: 'rgba(0,187,255,0.16)',
          borderWidth: 1,
          displayColors: true,
          callbacks: {
            label: context => `${context.dataset.label}: ${formatClp(context.parsed.y)}`,
          },
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: 'rgba(180,210,255,0.68)',
            font: { size: 11 },
            maxRotation: 0,
            autoSkip: true,
            maxTicksLimit: 8,
          },
          border: { color: 'rgba(255,255,255,0.08)' },
        },
        y: {
          grid: { color: 'rgba(255,255,255,0.06)' },
          ticks: {
            color: 'rgba(180,210,255,0.68)',
            font: { size: 11 },
            callback: value =>
              `${(value / 1000000).toLocaleString('es-CL', {
                minimumFractionDigits: 1,
                maximumFractionDigits: 1,
              })}M`,
          },
          border: { color: 'rgba(255,255,255,0.08)' },
        },
      },
      animation: {
        duration: 700,
        easing: 'easeOutQuart',
      },
    },
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Inject skip-to-content link for keyboard accessibility
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'skip-link';
  skipLink.textContent = 'Saltar al contenido';
  document.body.prepend(skipLink);

  initScrollBar();
  initNavHeight();
  initNavbar();
  syncGlobalNav();
  initActiveNav();
  initNavDropdowns();
  initAos();
  initParallax();
  setupTrackedLinks();
  setupScrollTracking();
  setupSmoothScroll();
  setupCharCounters();
  setupOptionalToggles();
  setupUrgencyOptions();
  setupLeadTriggers();
  setupLeadForms();
  setupSupportForms();
  setupCaseFilters();
  setupPackageFocus();
  initExecutiveDemoDashboard();
});
