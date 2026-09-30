import { useEffect, useState, type ReactNode } from 'react';
import { BackToTop, BrandLogo, SiteFooter, routes } from '../../components/shared';
import { useTheme } from '../../lib/hooks';

export type LegalPageId = 'privacy' | 'terms' | 'cookies';

export type LegalSection = { id: string; heading: string; body: ReactNode };

/** Bracketed placeholder still to be filled in (e.g. "[Email address]"), highlighted so it's easy to spot. */
export function Ph({ children }: { children: string }) {
  return <span className="ph-tag">{children}</span>;
}

const PAGES: { id: LegalPageId; href: string; label: string }[] = [
  { id: 'privacy', href: routes.privacy, label: 'Privacy Policy' },
  { id: 'terms', href: routes.terms, label: 'Terms & Conditions' },
  { id: 'cookies', href: routes.cookies, label: 'Cookie Policy' },
];

/** Scroll-spy: the active section is the last one whose top has passed 140px from the viewport top. */
function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0] ?? '');
  useEffect(() => {
    const onScroll = () => {
      let current = ids[0] ?? '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - 140 <= 0) current = id;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids]);
  return activeId;
}

export function LegalLayout({ pageId, title, sections }: { pageId: LegalPageId; title: string; sections: LegalSection[] }) {
  const { isDark, toggleTheme } = useTheme();
  const [ids] = useState(() => sections.map((s) => s.id));
  const activeId = useActiveSection(ids);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="legal-header__inner">
          <a href={routes.home} className="legal-header__logo" aria-label="Agileborne home">
            <BrandLogo height={24} />
          </a>
          <nav className="legal-header__nav" aria-label="Legal">
            {PAGES.map((p) => (
              <a key={p.id} href={p.href} className="legal-header__link" aria-current={p.id === pageId ? 'page' : undefined}>
                {p.label}
              </a>
            ))}
            <button
              type="button"
              className="theme-switch"
              role="switch"
              aria-checked={isDark}
              aria-label="Dark mode"
              onClick={toggleTheme}
            >
              <span className="theme-switch__knob" />
            </button>
            <a href={`${routes.home}#get-started`} className="legal-header__cta">
              Get in touch →
            </a>
          </nav>
        </div>
      </header>

      <div className="legal-hero">
        <span className="legal-hero__eyebrow">Legal</span>
        <h1>{title}</h1>
        <p className="legal-hero__updated">
          Last updated: <Ph>[Date]</Ph>
        </p>
      </div>

      <div className="legal-content">
        <div className="legal-toc-mobile">
          <button
            type="button"
            className="legal-toc-mobile__button"
            aria-expanded={mobileTocOpen}
            aria-controls="legal-toc-mobile-list"
            onClick={() => setMobileTocOpen((o) => !o)}
          >
            <span>Contents</span>
            <span className="legal-toc-mobile__chevron" />
          </button>
          {mobileTocOpen && (
            <nav className="legal-toc-mobile__list" id="legal-toc-mobile-list" aria-label="Contents">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} aria-current={activeId === s.id || undefined} onClick={() => setMobileTocOpen(false)}>
                  {s.heading}
                </a>
              ))}
            </nav>
          )}
        </div>

        <nav className="legal-toc" aria-label="On this page">
          <span className="legal-toc__label">On this page</span>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} aria-current={activeId === s.id || undefined}>
              {s.heading}
            </a>
          ))}
        </nav>

        <main className="legal-main">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="legal-section">
              <h2>{s.heading}</h2>
              <div className="legal-body">{s.body}</div>
            </section>
          ))}
        </main>
      </div>

      <SiteFooter anchorBase={routes.home} />
      <BackToTop />
    </div>
  );
}
