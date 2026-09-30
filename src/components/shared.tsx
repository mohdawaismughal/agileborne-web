import { scrollToTop, useScrolledPast } from '../lib/hooks';

export const routes = {
  home: '/',
  privacy: '/privacy-policy/',
  terms: '/terms-and-conditions/',
  cookies: '/cookie-policy/',
};

/** Navy wordmark in light mode, white-text variant in dark mode. Pure CSS swap, so no flash on load. */
export function BrandLogo({ height }: { height: number }) {
  return (
    <>
      <img className="brand-logo brand-logo--light" src="/assets/agileborne-logo.png" alt="Agileborne" style={{ height }} />
      <img className="brand-logo brand-logo--dark" src="/assets/agileborne-logo-dark.png" alt="Agileborne" style={{ height }} />
    </>
  );
}

export function BackToTop() {
  const visible = useScrolledPast(500);
  if (!visible) return null;
  return (
    <button type="button" className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
      ↑
    </button>
  );
}

/** `anchorBase` is '' on the homepage (same-page anchors) and '/' elsewhere. */
export function SiteFooter({ anchorBase }: { anchorBase: string }) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__cta">
          <p>Your product deserves more than a vendor. It deserves a partner.</p>
          <a href={`${anchorBase}#get-started`}>Get in touch →</a>
        </div>
        <div className="site-footer__grid">
          <div className="site-footer__col">
            <a href={routes.home} aria-label="Agileborne home">
              <img className="brand-logo" src="/assets/agileborne-logo-dark.png" alt="Agileborne" style={{ height: 24 }} />
            </a>
            <p className="site-footer__tagline">Pakistan's Silicon Valley, globally delivered.</p>
          </div>
          <div className="site-footer__col">
            <span className="site-footer__heading">Reach us</span>
            <span>agileborne.com</span>
            <a href="mailto:hello@agileborne.com">hello@agileborne.com</a>
            <span>Lahore, Pakistan</span>
          </div>
          <nav className="site-footer__col" aria-label="Quick links">
            <span className="site-footer__heading">Quick links</span>
            <a href={`${anchorBase}#services`}>Services</a>
            <a href={`${anchorBase}#how-we-work`}>How we work</a>
            <a href={`${anchorBase}#industries`}>Industries</a>
            <a href={`${anchorBase}#proof-of-work`}>Proof of work</a>
          </nav>
          <nav className="site-footer__col" aria-label="Legal">
            <span className="site-footer__heading">Legal</span>
            <a href={routes.privacy}>Privacy policy</a>
            <a href={routes.terms}>Terms of service</a>
            <a href={routes.cookies}>Cookie policy</a>
            <span className="site-footer__note">
              Client experience referenced above reflects work performed by individual team members prior to joining
              Agileborne.
            </span>
          </nav>
        </div>
        <div className="site-footer__copy">© 2026 Agileborne. All rights reserved.</div>
      </div>
    </footer>
  );
}
