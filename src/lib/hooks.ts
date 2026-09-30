import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'agileborne-theme';

function readTheme(): Theme {
  // The inline script in each page's <head> has already resolved saved/system preference.
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

/** Light/dark theme shared by every page; persisted to localStorage and applied on <html>. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Storage can be unavailable (private mode); the toggle still works for this visit.
      }
      return next;
    });
  }, []);

  return { theme, isDark: theme === 'dark', toggleTheme };
}

/** True once the page has scrolled past `threshold` px. */
export function useScrolledPast(threshold: number) {
  const [past, setPast] = useState(false);
  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return past;
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
