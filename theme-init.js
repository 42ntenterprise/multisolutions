(() => {
  const storageKey = '42nt-theme';
  let storedTheme = '';

  try {
    storedTheme = window.localStorage.getItem(storageKey) || '';
  } catch (error) {
    storedTheme = '';
  }

  const prefersDark =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const theme = storedTheme === 'dark' || storedTheme === 'light'
    ? storedTheme
    : (prefersDark ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.style.colorScheme = theme;
})();
