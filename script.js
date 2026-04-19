/* ============================================================
   Shared configuration
   ============================================================ */

const CONFIG = {
  endpoints: {
    formspreeUrl: 'https://formspree.io/f/xdawnkgn',
  },
  contact: {
    whatsappDigits: '56932516492',
    whatsappUrl: 'https://wa.me/56932516492',
  },
  forms: {
    minSubmitAgeMs: 1500,
    hiddenStartedAtName: 'form_started_epoch_ms',
    honeypotName: 'website',
    fieldLimits: {
      nombre: { maxlength: 120, minlength: 2 },
      empresa: { maxlength: 160, minlength: 2 },
      email: { maxlength: 254 },
      proyecto: { maxlength: 160 },
      descripcion: { maxlength: 500, minlength: 20 },
      origen_cta: { maxlength: 120 },
      caso_interes: { maxlength: 120 },
      demo_contexto: { maxlength: 240 },
      form_inicio_origen: { maxlength: 120 },
    },
  },
  routes: {
    inicio: '/inicio/',
    quienesSomos: '/quienes-somos/',
    comoTrabajamos: '/como-trabajamos/',
    nuestrosServicios: '/nuestros-servicios/',
    soporte: '/soporte/',
  },
  theme: {
    storageKey: '42nt-theme',
    light: 'light',
    dark: 'dark',
    metaColors: {
      light: '#f7f7f4',
      dark: '#121417',
    },
  },
};

let executiveDemoChart = null;

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

/* ============================================================
   Helpers / utilities
   ============================================================ */

function focusSafely(element, options = { preventScroll: true }) {
  if (!element) return;

  try {
    element.focus(options);
  } catch (error) {
    element.focus();
  }
}

function getCssVar(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function hexToRgb(hex) {
  const sanitized = (hex || '').replace('#', '').trim();
  if (!/^[0-9a-fA-F]{6}$/.test(sanitized)) return null;

  return {
    r: parseInt(sanitized.slice(0, 2), 16),
    g: parseInt(sanitized.slice(2, 4), 16),
    b: parseInt(sanitized.slice(4, 6), 16),
  };
}

function rgbaFromHex(hex, alpha) {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
}

function buildWhatsappUrl(message = '') {
  if (!message) return CONFIG.contact.whatsappUrl;
  return `${CONFIG.contact.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

function sanitizeContextValue(value, maxLength = 240) {
  return String(value || '')
    .replace(/[\u0000-\u001F\u007F]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength);
}

function applyFieldConstraints(scope = document) {
  Object.entries(CONFIG.forms.fieldLimits).forEach(([name, rules]) => {
    scope.querySelectorAll(`[name="${name}"]`).forEach(field => {
      if (rules.maxlength && !field.hasAttribute('maxlength')) {
        field.setAttribute('maxlength', String(rules.maxlength));
      }

      if (rules.minlength && !field.hasAttribute('minlength') && field.type !== 'hidden') {
        field.setAttribute('minlength', String(rules.minlength));
      }
    });
  });
}

function normalizeFormFields(form) {
  form.querySelectorAll('input, select, textarea').forEach(field => {
    if (typeof field.value !== 'string') return;
    if (field.type === 'hidden' || field.type === 'checkbox' || field.type === 'radio') return;
    field.value = field.value.trim();
  });
}

function createHiddenField(form, name, value = '') {
  const input = document.createElement('input');
  input.type = 'hidden';
  input.name = name;
  input.value = value;
  form.prepend(input);
  return input;
}

function ensureFormSecurityFields(form) {
  if (!form) return;

  let startedAt = form.querySelector(`[name="${CONFIG.forms.hiddenStartedAtName}"]`);
  if (!startedAt) {
    startedAt = createHiddenField(form, CONFIG.forms.hiddenStartedAtName, String(Date.now()));
  } else if (!startedAt.value) {
    startedAt.value = String(Date.now());
  }

  if (!form.querySelector('[data-honeypot-field]')) {
    const wrapper = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');

    wrapper.setAttribute('data-honeypot-field', 'true');
    wrapper.setAttribute('aria-hidden', 'true');
    wrapper.style.position = 'absolute';
    wrapper.style.left = '-10000px';
    wrapper.style.width = '1px';
    wrapper.style.height = '1px';
    wrapper.style.overflow = 'hidden';

    label.textContent = 'No completar';
    input.type = 'text';
    input.name = CONFIG.forms.honeypotName;
    input.tabIndex = -1;
    input.autocomplete = 'off';

    wrapper.append(label, input);
    form.appendChild(wrapper);
  }
}

function getFormGuardMessage(form) {
  ensureFormSecurityFields(form);

  const honeypot = form.querySelector(`[name="${CONFIG.forms.honeypotName}"]`);
  if (honeypot && honeypot.value.trim()) {
    return 'No pudimos validar el formulario. Recarga la página y vuelve a intentarlo.';
  }

  const startedAt = Number(form.querySelector(`[name="${CONFIG.forms.hiddenStartedAtName}"]`)?.value || 0);
  if (startedAt && Date.now() - startedAt < CONFIG.forms.minSubmitAgeMs) {
    return 'Espera un segundo para completar la verificación y vuelve a enviar el formulario.';
  }

  return '';
}

/* ============================================================
   Theme handling
   ============================================================ */

function ensureThemeMetaTag() {
  let meta = document.querySelector('meta[name="theme-color"]');
  if (meta) return meta;

  meta = document.createElement('meta');
  meta.setAttribute('name', 'theme-color');
  document.head.appendChild(meta);
  return meta;
}

function getStoredTheme() {
  try {
    const theme = window.localStorage.getItem(CONFIG.theme.storageKey);
    return theme === CONFIG.theme.dark || theme === CONFIG.theme.light ? theme : '';
  } catch (error) {
    return '';
  }
}

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? CONFIG.theme.dark
    : CONFIG.theme.light;
}

function getActiveTheme() {
  return document.documentElement.getAttribute('data-theme') === CONFIG.theme.dark
    ? CONFIG.theme.dark
    : CONFIG.theme.light;
}

function resolveThemePreference() {
  return getStoredTheme() || document.documentElement.getAttribute('data-theme') || getSystemTheme();
}

function syncThemeColorMeta(theme) {
  const meta = ensureThemeMetaTag();
  meta.setAttribute('content', CONFIG.theme.metaColors[theme] || CONFIG.theme.metaColors.light);
}

function decodeHtmlEntities(value = '') {
  const parser = new DOMParser();
  const doc = parser.parseFromString(value, 'text/html');
  return doc.documentElement.textContent || '';
}

function createThemeToggleItem() {
  const item = document.createElement('li');
  item.className = 'nav-item nav-item-theme';

  const button = document.createElement('button');
  button.className = 'theme-toggle';
  button.type = 'button';
  button.dataset.themeToggle = '';
  button.setAttribute('aria-pressed', 'false');

  const iconWrapper = document.createElement('span');
  iconWrapper.className = 'theme-toggle-icon';
  iconWrapper.setAttribute('aria-hidden', 'true');

  const icon = document.createElement('i');
  icon.className = 'bi bi-moon-stars-fill';
  iconWrapper.appendChild(icon);

  const copyWrapper = document.createElement('span');
  copyWrapper.className = 'theme-toggle-copy';

  const label = document.createElement('span');
  label.className = 'theme-toggle-label';
  label.textContent = 'Tema';

  const state = document.createElement('span');
  state.className = 'theme-toggle-state';
  state.textContent = 'Claro';

  copyWrapper.append(label, state);
  button.append(iconWrapper, copyWrapper);
  item.appendChild(button);

  return item;
}

function createNavDropdownLink(href, section) {
  const link = document.createElement('a');
  link.className = 'nav-dropdown-link';
  link.href = href;

  const title = document.createElement('span');
  title.className = 'nav-dropdown-link-title';
  title.textContent = decodeHtmlEntities(section.title);

  const copy = document.createElement('span');
  copy.className = 'nav-dropdown-link-copy';
  copy.textContent = decodeHtmlEntities(section.copy);

  link.append(title, copy);
  return link;
}

function ensureThemeToggle() {
  document.querySelectorAll('#mainNav .navbar-nav').forEach(navList => {
    if (navList.querySelector('.nav-item-theme')) return;

    const toggleItem = createThemeToggleItem();
    const languageItem = navList.querySelector('.nav-item-language');
    if (languageItem) {
      languageItem.before(toggleItem);
      return;
    }

    navList.appendChild(toggleItem);
  });
}

function updateThemeToggleUi(theme) {
  const isDark = theme === CONFIG.theme.dark;

  document.querySelectorAll('[data-theme-toggle]').forEach(button => {
    const icon = button.querySelector('.theme-toggle-icon i');
    const state = button.querySelector('.theme-toggle-state');

    button.setAttribute('aria-pressed', String(isDark));
    button.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    button.setAttribute('title', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');

    if (state) state.textContent = isDark ? 'Oscuro' : 'Claro';

    if (icon) {
      icon.className = isDark ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
    }
  });
}

function applyTheme(theme, { persist = false, emit = true } = {}) {
  const resolvedTheme = theme === CONFIG.theme.dark ? CONFIG.theme.dark : CONFIG.theme.light;

  document.documentElement.setAttribute('data-theme', resolvedTheme);
  document.documentElement.style.colorScheme = resolvedTheme;
  syncThemeColorMeta(resolvedTheme);
  updateThemeToggleUi(resolvedTheme);

  if (persist) {
    try {
      window.localStorage.setItem(CONFIG.theme.storageKey, resolvedTheme);
    } catch (error) {
      console.warn('No se pudo guardar la preferencia de tema.', error);
    }
  }

  if (emit) {
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: resolvedTheme } }));
  }
}

function toggleTheme() {
  const nextTheme = getActiveTheme() === CONFIG.theme.dark ? CONFIG.theme.light : CONFIG.theme.dark;
  applyTheme(nextTheme, { persist: true });
}

function bindThemeToggle() {
  document.querySelectorAll('[data-theme-toggle]').forEach(button => {
    if (button.dataset.themeToggleBound === 'true') return;
    button.dataset.themeToggleBound = 'true';

    button.addEventListener('click', () => toggleTheme());
  });
}

function initTheme() {
  ensureThemeMetaTag();
  ensureThemeToggle();
  applyTheme(resolveThemePreference(), { emit: false });
  bindThemeToggle();

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const syncWithSystem = event => {
    if (getStoredTheme()) return;
    applyTheme(event.matches ? CONFIG.theme.dark : CONFIG.theme.light, { persist: false });
  };

  if (typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', syncWithSystem);
  } else if (typeof mediaQuery.addListener === 'function') {
    mediaQuery.addListener(syncWithSystem);
  }
}

/* ============================================================
   Navigation
   ============================================================ */

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
      menu.setAttribute('aria-label', `Submenú de ${menuLabel}`);
    }

    const links = sections.map(section => {
      const href = buildNavSectionHref(baseHref, section.id, currentSlug, targetSlug);
      return createNavDropdownLink(href, section);
    });

    menu.replaceChildren(...links);
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

/* ============================================================
   Tracking / attribution
   ============================================================ */

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

function getToastPresentation(type = 'success') {
  const mappedType = type === 'error' ? 'danger' : type;

  if (mappedType === 'danger') {
    return {
      mappedType,
      title: 'No se pudo completar',
      icon: 'bi-exclamation-triangle-fill',
      role: 'alert',
      live: 'assertive',
    };
  }

  return {
    mappedType,
    title: 'Listo',
    icon: 'bi-check-circle-fill',
    role: 'status',
    live: 'polite',
  };
}

function showToast(message, type = 'success', options = {}) {
  const stack = ensureToastStack();
  const toast = document.createElement('div');
  const presentation = getToastPresentation(type);
  const iconWrap = document.createElement('span');
  const icon = document.createElement('i');
  const copy = document.createElement('div');
  const title = document.createElement('strong');
  const messageWrap = document.createElement('div');

  toast.className = `site-toast site-toast--${presentation.mappedType}`;
  toast.setAttribute('role', presentation.role);
  toast.setAttribute('aria-live', presentation.live);

  iconWrap.className = 'site-toast__icon';
  iconWrap.setAttribute('aria-hidden', 'true');
  icon.className = `bi ${presentation.icon}`;
  iconWrap.appendChild(icon);

  copy.className = 'site-toast__copy';
  title.className = 'site-toast__title';
  title.textContent = presentation.title;
  messageWrap.className = 'site-toast__message';
  messageWrap.textContent = message;

  if (options.action?.href && options.action?.label) {
    messageWrap.appendChild(document.createTextNode(' '));
    const action = document.createElement('a');
    action.href = options.action.href;
    action.textContent = options.action.label;
    if (options.action.target) action.target = options.action.target;
    if (options.action.rel) action.rel = options.action.rel;
    messageWrap.appendChild(action);
  }

  if (options.suffix) {
    messageWrap.appendChild(document.createTextNode(options.suffix));
  }

  copy.append(title, messageWrap);
  toast.append(iconWrap, copy);
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

/* ============================================================
   Forms
   ============================================================ */

function scoreLabel(score) {
  if (score >= 70) return 'CALIENTE';
  if (score >= 40) return 'TIBIO';
  return 'FRÍO';
}

function sendToFormspree(formData) {
  return fetch(CONFIG.endpoints.formspreeUrl, {
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
    if (!button.__originalContentNodes) {
      button.__originalContentNodes = Array.from(button.childNodes).map(node => node.cloneNode(true));
    }
    button.dataset.originalAriaLabel = button.getAttribute('aria-label') || '';
    button.setAttribute('aria-label', 'Enviando formulario');

    const spinner = document.createElement('span');
    spinner.className = 'spinner-border spinner-border-sm me-2';
    spinner.setAttribute('role', 'status');
    spinner.setAttribute('aria-label', 'Enviando formulario');

    button.replaceChildren(spinner, document.createTextNode('Enviando...'));
  } else {
    button.disabled = false;
    button.setAttribute('aria-busy', 'false');
    button.removeAttribute('aria-disabled');
    if (button.dataset.originalAriaLabel) {
      button.setAttribute('aria-label', button.dataset.originalAriaLabel);
    } else {
      button.removeAttribute('aria-label');
    }

    if (button.__originalContentNodes) {
      button.replaceChildren(...button.__originalContentNodes.map(node => node.cloneNode(true)));
    }
  }
}

function createDemoKpiCard(item) {
  const card = document.createElement('div');
  card.className = 'demo-kpi-card';

  const label = document.createElement('span');
  label.className = 'demo-kpi-label';
  label.textContent = item.label;

  const value = document.createElement('strong');
  value.className = 'demo-kpi-value';
  value.textContent = item.value;

  const meta = document.createElement('span');
  meta.className = `demo-kpi-meta ${item.tone}`;
  meta.textContent = item.meta;

  card.append(label, value, meta);
  return card;
}

function ensureFieldIdsAndLabels(scope = document) {
  let fieldCounter = 0;

  scope.querySelectorAll('label.form-label').forEach(label => {
    const field = label.parentElement?.querySelector('input, select, textarea');
    if (!field) return;

    if (!field.id) {
      const slug = (field.name || 'field').replace(/[^\w-]+/g, '-').replace(/^-+|-+$/g, '') || 'field';
      field.id = `${slug}-${++fieldCounter}`;
    }

    if (!label.htmlFor) {
      label.htmlFor = field.id;
    }
  });
}

function syncAccordionAccessibility(scope = document) {
  scope.querySelectorAll('.accordion-button[data-bs-target]').forEach((button, index) => {
    const targetSelector = button.getAttribute('data-bs-target');
    if (!targetSelector) return;

    const panel = document.querySelector(targetSelector);
    if (!panel) return;

    if (!button.id) button.id = `accordion-button-${index + 1}`;
    if (!panel.id) panel.id = targetSelector.replace('#', '') || `accordion-panel-${index + 1}`;

    button.setAttribute('aria-controls', panel.id);
    button.setAttribute('aria-expanded', String(panel.classList.contains('show')));
    panel.setAttribute('aria-labelledby', button.id);

    if (panel.dataset.accordionA11yBound === 'true') return;
    panel.dataset.accordionA11yBound = 'true';

    panel.addEventListener('show.bs.collapse', () => button.setAttribute('aria-expanded', 'true'));
    panel.addEventListener('hide.bs.collapse', () => button.setAttribute('aria-expanded', 'false'));
  });
}

function decorateFormSuccessBanners(scope = document) {
  scope.querySelectorAll('[data-form-success]').forEach((banner, index) => {
    if (!banner.id) banner.id = `form-success-${index + 1}`;
    banner.setAttribute('role', 'status');
    banner.setAttribute('aria-live', 'polite');
    banner.setAttribute('aria-hidden', String(banner.hasAttribute('hidden')));
    if (!banner.hasAttribute('tabindex')) banner.tabIndex = -1;
  });
}

function enhanceSharedAccessibility() {
  ensureFieldIdsAndLabels();
  syncAccordionAccessibility();
  decorateFormSuccessBanners();
}

function revealSuccessState(form) {
  if (!form) return;

  form.hidden = true;
  const successBanner = form.parentElement?.querySelector('[data-form-success]');
  if (!successBanner) return;

  successBanner.removeAttribute('hidden');
  successBanner.setAttribute('aria-hidden', 'false');
  focusSafely(successBanner);
}

function markFormStarted(form, sourceOverride = '') {
  ensureFormSecurityFields(form);

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
  normalizeFormFields(form);

  let isValid = true;
  let firstInvalid = null;

  form.querySelectorAll('input, select, textarea').forEach(field => {
    if (!field.willValidate) return;

    const valid = field.checkValidity();
    field.classList.toggle('is-invalid', !valid);
    field.setAttribute('aria-invalid', String(!valid));
    if (!valid && !firstInvalid) firstInvalid = field;
    if (!valid) isValid = false;
  });

  if (firstInvalid) {
    firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
    focusSafely(firstInvalid);
  }

  return isValid;
}

function clearInvalidOnInput(form) {
  form.querySelectorAll('.form-control, .form-select, .form-textarea').forEach(field => {
    field.addEventListener('input', () => {
      field.classList.remove('is-invalid');
      field.setAttribute('aria-invalid', 'false');
    });
    field.addEventListener('change', () => {
      field.classList.remove('is-invalid');
      field.setAttribute('aria-invalid', 'false');
    });
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

  const safeContext = {
    need: sanitizeContextValue(context.need, 120),
    industry: sanitizeContextValue(context.industry, 80),
    caseName: sanitizeContextValue(context.caseName, 120),
    context: sanitizeContextValue(context.context, 240),
    origin: sanitizeContextValue(context.origin, 120),
    title: sanitizeContextValue(context.title, 120),
  };

  const needField = form.querySelector('[name="necesidad"]');
  const industryField = form.querySelector('[name="industria"]');
  const originField = form.querySelector('[name="origen_cta"]');
  const caseField = form.querySelector('[name="caso_interes"]');
  const contextField = form.querySelector('[name="demo_contexto"]');
  const banner = form.parentElement?.querySelector('[data-form-context]');
  const bannerTitle = banner?.querySelector('[data-form-context-title]');
  const bannerCopy = banner?.querySelector('[data-form-context-copy]');

  if (needField && safeContext.need) {
    const option = [...needField.options].find(item => item.value === safeContext.need);
    if (option) needField.value = safeContext.need;
  }

  if (industryField && safeContext.industry) {
    const option = [...industryField.options].find(item => item.value === safeContext.industry);
    if (option) industryField.value = safeContext.industry;
  }

  if (originField && safeContext.origin) originField.value = safeContext.origin;
  if (caseField && safeContext.caseName) caseField.value = safeContext.caseName;
  if (contextField && safeContext.context) contextField.value = safeContext.context;

  if (banner && (safeContext.caseName || safeContext.title || safeContext.context)) {
    banner.hidden = false;
    if (bannerTitle) {
      bannerTitle.textContent = safeContext.caseName
        ? `Contexto cargado: ${safeContext.caseName}`
        : safeContext.title || 'Contexto de solicitud cargado';
    }
    if (bannerCopy) {
      bannerCopy.textContent = safeContext.context || 'Usaremos este contexto para personalizar la revisión inicial.';
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

function setupWhatsappFields() {
  document.querySelectorAll('input[name="whatsapp"]').forEach(input => {
    input.setAttribute('inputmode', 'numeric');
    input.setAttribute('pattern', '[0-9]*');
    input.setAttribute('autocomplete', 'tel-national');
    input.setAttribute('maxlength', input.getAttribute('maxlength') || '15');

    const sanitize = () => {
      const digitsOnly = (input.value || '').replace(/\D/g, '');
      if (input.value !== digitsOnly) input.value = digitsOnly;
    };

    input.addEventListener('input', sanitize);
    input.addEventListener('blur', sanitize);
    sanitize();
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
    ensureFormSecurityFields(form);
    applyLeadContext(form, queryContext);

    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('focus', () => markFormStarted(form), { passive: true });
      field.addEventListener('input', () => markFormStarted(form));
      field.addEventListener('change', () => markFormStarted(form));
    });

    form.addEventListener('submit', async event => {
      event.preventDefault();
      markFormStarted(form);

      const guardMessage = getFormGuardMessage(form);
      if (guardMessage) {
        showToast(guardMessage, 'danger');
        return;
      }

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
      const leadScore = calcLeadScore(formData);
      const leadLabel = scoreLabel(leadScore);
      const whatsapp = (formData.get('whatsapp') || '').replace(/\D/g, '');

      formData.set('empresa_detectada', detectedDomain);
      formData.set('nombre_cargo', [nombre, cargoRol].filter(Boolean).join(' — '));
      formData.set('lead_score', String(leadScore));
      formData.set('lead_label', leadLabel);
      formData.set('whatsapp', whatsapp);
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

      try {
        await sendToFormspree(formData);

        revealSuccessState(form);

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

        const message = `Hola 42NT, soy ${nombre || 'un prospecto'}${cargoRol ? `, ${cargoRol}` : ''}${empresa ? ` de ${empresa}` : ''}. Necesito ayuda con: ${formData.get('necesidad') || 'evaluación inicial'}.`;
        showToast('No pudimos completar el envío.', 'danger', {
          action: {
            href: buildWhatsappUrl(message),
            label: 'Escríbenos por WhatsApp',
            target: '_blank',
            rel: 'noopener',
          },
          suffix: ' y seguimos de inmediato.',
        });
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
    ensureFormSecurityFields(form);

    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('focus', () => markFormStarted(form), { passive: true });
      field.addEventListener('input', () => markFormStarted(form));
      field.addEventListener('change', () => markFormStarted(form));
    });

    form.addEventListener('submit', async event => {
      event.preventDefault();
      markFormStarted(form);

      const guardMessage = getFormGuardMessage(form);
      if (guardMessage) {
        showToast(guardMessage, 'danger');
        return;
      }

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
      const whatsapp = (formData.get('whatsapp') || '').replace(/\D/g, '');

      formData.set('record_type', 'support');
      formData.set('whatsapp', whatsapp);
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

      try {
        await sendToFormspree(formData);

        revealSuccessState(form);

        trackUiEvent('form_submit_success', {
          form_kind: 'support',
          form_source: origin || window.location.pathname,
          tipo_soporte: tipoSoporte,
        });

        showToast('Solicitud de soporte recibida. Revisaremos prioridad, impacto y siguiente paso dentro del horario hábil.', 'success');
      } catch (error) {
        console.error('Error al enviar soporte:', error);
        const message = `Hola 42NT, necesito soporte para ${empresa || 'mi proyecto'}. Tipo: ${tipoSoporte || 'soporte general'}. Urgencia: ${urgencia || 'sin definir'}.`;
        showToast('No pudimos completar el envío.', 'danger', {
          action: {
            href: buildWhatsappUrl(message),
            label: 'Habla con soporte por WhatsApp',
            target: '_blank',
            rel: 'noopener',
          },
          suffix: '.',
        });
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

/* ============================================================
   Filters / packages
   ============================================================ */

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

/* ============================================================
   Charts / demo
   ============================================================ */

function getExecutiveDemoPalette() {
  const isDarkTheme = getActiveTheme() === CONFIG.theme.dark;
  const brandLink = getCssVar('--brand-link') || '#4c9dff';
  const brandButtonStrong = getCssVar('--brand-button-strong') || '#17498a';
  const warning = getCssVar('--warning') || '#f59e0b';

  return {
    barBackground: isDarkTheme ? rgbaFromHex(brandLink, 0.42) : rgbaFromHex(brandButtonStrong, 0.76),
    barBorder: isDarkTheme ? rgbaFromHex(brandLink, 0.9) : rgbaFromHex(brandButtonStrong, 0.98),
    lineBorder: rgbaFromHex(warning, isDarkTheme ? 0.94 : 0.98),
    lineBackground: rgbaFromHex(warning, isDarkTheme ? 0.18 : 0.14),
    tickColor: 'rgba(216,227,240,0.72)',
    gridColor: isDarkTheme ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.12)',
    borderColor: isDarkTheme ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.14)',
    tooltipBackground: isDarkTheme ? 'rgba(12,15,20,0.96)' : 'rgba(8,18,31,0.94)',
    tooltipBorder: rgbaFromHex(brandLink, isDarkTheme ? 0.24 : 0.18),
  };
}

function applyExecutiveDemoChartTheme(chart) {
  if (!chart) return;

  const palette = getExecutiveDemoPalette();
  chart.data.datasets[0].backgroundColor = palette.barBackground;
  chart.data.datasets[0].borderColor = palette.barBorder;
  chart.data.datasets[1].borderColor = palette.lineBorder;
  chart.data.datasets[1].backgroundColor = palette.lineBackground;
  chart.options.plugins.tooltip.backgroundColor = palette.tooltipBackground;
  chart.options.plugins.tooltip.borderColor = palette.tooltipBorder;
  chart.options.scales.x.border.color = palette.borderColor;
  chart.options.scales.y.border.color = palette.borderColor;
  chart.options.scales.y.grid.color = palette.gridColor;
  chart.options.scales.x.ticks.color = palette.tickColor;
  chart.options.scales.y.ticks.color = palette.tickColor;
  chart.update('none');
}

function initExecutiveDemoDashboard() {
  const canvas = document.getElementById('demo-dashboard-canvas');
  const skeletonEl = document.getElementById('demo-chart-skeleton');
  const kpiGrid = document.getElementById('demo-kpi-grid');
  const updatedEl = document.getElementById('demo-updated-at');

  if (!canvas || !skeletonEl || !kpiGrid || typeof Chart === 'undefined') return;
  if (canvas.dataset.chartReady === 'true') {
    applyExecutiveDemoChartTheme(executiveDemoChart);
    return;
  }

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

  const formatClp = value => '$' + value.toLocaleString('es-CL', { maximumFractionDigits: 0 });
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

  if (updatedEl) {
    const updatedDate = today.toLocaleDateString('es-CL', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
    updatedEl.textContent = `Dataset demo 42NT - Actualización simulada cada hora - ${updatedDate}`;
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
      value: `${stockCoverageDays} días`,
      meta: 'Objetivo: 18 días',
      tone: 'neutral',
    },
    {
      label: 'Pedidos pendientes',
      value: pendingOrders.toLocaleString('es-CL'),
      meta: 'Priorización operativa del día',
      tone: 'down',
    },
    {
      label: 'Variación mensual',
      value: `+${formatPercent(((monthlySalesTarget - previousMonthSales) / previousMonthSales) * 100)}`,
      meta: 'Mejor ritmo que el mes anterior',
      tone: 'up',
    },
  ];

  kpiGrid.replaceChildren(...kpis.map(createDemoKpiCard));

  skeletonEl.style.display = 'none';
  canvas.style.display = 'block';

  executiveDemoChart = new Chart(canvas.getContext('2d'), {
    data: {
      labels,
      datasets: [
        {
          type: 'bar',
          label: 'Ventas diarias',
          data: sales,
          borderWidth: 1,
          borderRadius: 8,
          maxBarThickness: 18,
        },
        {
          type: 'line',
          label: 'Meta diaria',
          data: goals,
          borderWidth: 3,
          pointRadius: 0,
          pointHoverRadius: 5,
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

  applyExecutiveDemoChartTheme(executiveDemoChart);
}

document.addEventListener('DOMContentLoaded', () => {
  // Inject skip-to-content link for keyboard accessibility
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'skip-link';
  skipLink.textContent = 'Saltar al contenido';
  document.body.prepend(skipLink);

  initTheme();
  initScrollBar();
  initNavHeight();
  initNavbar();
  syncGlobalNav();
  initActiveNav();
  initNavDropdowns();
  initAos();
  initParallax();
  applyFieldConstraints();
  enhanceSharedAccessibility();
  setupTrackedLinks();
  setupScrollTracking();
  setupSmoothScroll();
  setupCharCounters();
  setupWhatsappFields();
  setupOptionalToggles();
  setupUrgencyOptions();
  setupLeadTriggers();
  setupLeadForms();
  setupSupportForms();
  setupCaseFilters();
  setupPackageFocus();
  initExecutiveDemoDashboard();

  window.addEventListener('themechange', () => {
    applyExecutiveDemoChartTheme(executiveDemoChart);
  });
});

