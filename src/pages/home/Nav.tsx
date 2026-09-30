import { useCallback, useEffect, useRef, useState } from 'react';
import { BrandLogo } from '../../components/shared';
import { MoonIcon, SunIcon } from '../../components/icons';
import { PILLARS } from '../../data/home';
import { scrollToTop } from '../../lib/hooks';

const NAV_LINKS = [
  { href: '#how-we-work', label: 'How we work' },
  { href: '#industries', label: 'Industries' },
  { href: '#proof-of-work', label: 'Proof of work' },
];

const CTA_LABEL = "Tell us where you're stuck →";

type Props = { isDark: boolean; onToggleTheme: () => void };

function ThemeToggle({ isDark, onToggleTheme }: Props) {
  return (
    <button type="button" className="theme-toggle" onClick={onToggleTheme} aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
      {isDark ? SunIcon : MoonIcon}
    </button>
  );
}

function MegaMenu() {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const closeTimer = useRef<number | undefined>(undefined);

  // A short close delay stops the menu collapsing when the cursor cuts diagonally toward it.
  const show = () => {
    window.clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hideSoon = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 200);
  };
  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const active = PILLARS[activeIdx];

  return (
    <div
      className="mega"
      onMouseEnter={show}
      onMouseLeave={hideSoon}
      onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button type="button" className="mega__trigger" aria-expanded={open} aria-haspopup="true" onClick={() => setOpen((o) => !o)}>
        Services
        <span className={`chevron${open ? ' chevron--open' : ''}`} />
      </button>
      {open && (
        <>
          <div className="mega__bridge" />
          <div className="mega__panel">
            <div className="mega__sidebar">
              {PILLARS.map((p, i) => (
                <button
                  type="button"
                  key={p.title}
                  className={`mega__pillar${i === activeIdx ? ' mega__pillar--active' : ''}`}
                  onMouseEnter={() => setActiveIdx(i)}
                  onFocus={() => setActiveIdx(i)}
                >
                  0{i + 1} {p.title}
                </button>
              ))}
            </div>
            <div className="mega__detail">
              <div className="mega__detail-title">{active.title}</div>
              {active.subservices.length > 0 ? (
                <ul className="mega__subs">
                  {active.subservices.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              ) : (
                <div className="mega__desc">{active.desc}</div>
              )}
            </div>
            <div className="mega__aside">
              <div className="mega__aside-title">Not sure where you fit?</div>
              <div className="mega__aside-sub">Tell us what's broken.</div>
              <a href="#get-started" onClick={() => setOpen(false)}>
                Get started →
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
      <div className="mobile-menu__top">
        <img className="brand-logo" src="/assets/agileborne-logo-dark.png" alt="Agileborne" style={{ height: 24 }} />
        <button type="button" className="mobile-menu__close" onClick={onClose} aria-label="Close menu">
          <span />
          <span />
        </button>
      </div>
      <div className="mobile-menu__list">
        <button type="button" className="mobile-menu__item" aria-expanded={servicesOpen} onClick={() => setServicesOpen((o) => !o)}>
          Services <span className={`chevron${servicesOpen ? ' chevron--open' : ''}`} />
        </button>
        {servicesOpen && (
          <ul className="mobile-menu__subs">
            {PILLARS.map((p, i) => (
              <li key={p.title}>
                0{i + 1} {p.title}
              </li>
            ))}
          </ul>
        )}
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} className="mobile-menu__item" onClick={onClose}>
            {l.label}
          </a>
        ))}
      </div>
      <a href="#get-started" className="btn-gold mobile-menu__cta" onClick={onClose}>
        {CTA_LABEL}
      </a>
    </div>
  );
}

export function Nav({ isDark, onToggleTheme }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <header className="nav">
        <div className="nav__inner">
          <button type="button" className="nav__logo" onClick={scrollToTop} aria-label="Agileborne — back to top">
            <BrandLogo height={26} />
          </button>
          <nav className="nav__links" aria-label="Main">
            <MegaMenu />
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav__link">
                {l.label}
              </a>
            ))}
            <ThemeToggle isDark={isDark} onToggleTheme={onToggleTheme} />
            <a href="#get-started" className="btn-gold nav__cta">
              {CTA_LABEL}
            </a>
          </nav>
          <div className="nav__compact">
            <ThemeToggle isDark={isDark} onToggleTheme={onToggleTheme} />
            <button type="button" className="hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu" aria-expanded={mobileOpen}>
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      {mobileOpen && <MobileMenu onClose={closeMobile} />}
    </>
  );
}
