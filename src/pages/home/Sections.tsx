import { useState, type FormEvent } from 'react';
import { DIFF_ICONS, ENGAGEMENT_ICONS, GET_STARTED_ICONS, SERVICE_ICONS } from '../../components/icons';
import {
  CLIENT_LOGOS,
  DIFFERENTIATORS,
  ENGAGEMENT_MODELS,
  FAQS,
  FRAMEWORK,
  GET_STARTED_STEPS,
  INDUSTRIES_ROW_1,
  INDUSTRIES_ROW_2,
  MARKETS,
  PILLARS,
  PROJECTS,
  STAGE_OPTIONS,
  STATS,
  TECH_ROW_1,
  TECH_ROW_2,
  TECH_ROW_3,
  TESTIMONIALS,
} from '../../data/home';

const CTA_LABEL = "Tell us where you're stuck →";
const CONTACT_EMAIL = 'hello@agileborne.com';

function SectionHead({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="section-head">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="h2">{title}</h2>
      {sub && <p className="subhead">{sub}</p>}
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__text">
          <h1 className="hero__title">Pakistan's Silicon Valley, Globally Delivered.</h1>
          <p className="hero__sub">
            Stuck on a software project? Agileborne is the engineering team trusted by enterprise-scale brands — now building
            for founders and businesses who need to move fast, without cutting corners. Tell us where you're stuck, and we'll
            show you the way forward.
          </p>
          <div className="hero__ctas">
            <a href="#get-started" className="btn-gold">
              {CTA_LABEL}
            </a>
            <a href="#how-we-work" className="btn-outline">
              See our process
            </a>
          </div>
        </div>
        <div className="hero__visual">
          <img className="hero__photo" src="/assets/images/hero-visual.webp" alt="Aerial view of Silicon Valley at golden hour" />
          <div className="hero__badge">
            <strong>98%</strong>
            <span>On-time delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function OurDna() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow="Our DNA" title="A team built on trust, not just talent." sub="Real engineers, handpicked over years, not sourced from a job board." />
        <div className="logo-grid">
          {CLIENT_LOGOS.map((l) => (
            <div className="logo-tile" key={l.file}>
              <img src={`/assets/logos/${l.file}.png`} alt={l.name} loading="lazy" />
            </div>
          ))}
        </div>
        <p className="dna-note">Track record carried in by individual team members from prior engagements — not Agileborne contracts.</p>
        <blockquote className="pull-quote">
          <p>"Our team members didn't just work with these brands — they helped shape their digital products."</p>
        </blockquote>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="section--dark">
      <div className="container">
        <SectionHead title="Small team. Big track record." sub="We didn't chase scale. We chased results." />
        <div className="stats-grid">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat__value">{s.value}</div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GlobalPresence() {
  return (
    <section className="section">
      <div className="container--narrow">
        <div className="section-head section-head--left">
          <h2 className="h2">Global experience. Real time zone overlap.</h2>
          <p className="subhead">We've worked with businesses across the globe — and we know how to move at your pace.</p>
        </div>
        <div className="presence">
          <div className="presence__text">
            <p className="body-copy">
              From Lahore, our teams run parallel schedules with partners across the Americas, Europe, the Middle East, and
              Australasia — building in overlapping working hours so nothing waits until tomorrow.
            </p>
            <ul className="presence__markets">
              {MARKETS.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
          <img className="presence__map" src="/assets/images/global-presence-map.webp" alt="World map showing connected team locations" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <section className="section section--alt">
      <div className="container--narrow">
        <div className="section-head section-head--left">
          <h2 className="h2">Most software projects don't fail on ideas. They fail on execution.</h2>
          <p className="subhead">Stuck looks different for everyone. We've seen every version of it.</p>
        </div>
        <p className="body-copy">
          A launch date that keeps slipping. An MVP that worked for ten users and buckled at ten thousand. A great idea with
          no technical co-founder to build it. A legacy system too fragile to touch and too critical to replace. Different
          symptoms, same root cause: execution that didn't keep pace with ambition.
        </p>
      </div>
    </section>
  );
}

export function ValueProposition() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead title="Not just developers. A team that owns the outcome." sub="Enterprise rigor. Startup speed. Founder-level accountability." />
        <p className="body-copy value-copy">
          We've sat where you're sitting — inside enterprise programs and early-stage builds alike. That's why we engage like
          a co-founder would: asking hard questions, flagging risk early, and staying accountable to the outcome, not just the
          sprint.
        </p>
        <div className="grid-4">
          {DIFFERENTIATORS.map((d) => (
            <div className="flip-card diff-card" key={d.title}>
              <div className="diff-card__icon">{DIFF_ICONS[d.icon]}</div>
              <h3 className="flip-card__title">{d.title}</h3>
              <p className="flip-card__desc">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="services" className="section section--alt">
      <div className="container">
        <SectionHead eyebrow="Our services" title="Eight pillars. One committed partner." sub="End-to-end capability — from first whiteboard sketch to enterprise-scale operations." />
        <div className="services-grid">
          {PILLARS.map((p, i) => {
            const isOpen = expanded === i;
            const panelId = `service-panel-${i}`;
            return (
              <div className={`flip-card service-card${isOpen ? ' service-card--expanded' : ''}`} key={p.title}>
                <div className="flip-card__icon">{SERVICE_ICONS[i]}</div>
                <span className="service-card__num">0{i + 1}</span>
                <h3 className="flip-card__title">{p.title}</h3>
                <p className="flip-card__desc">{p.desc}</p>
                <div className="service-card__footer">
                  {p.subservices.length > 0 ? (
                    <button
                      type="button"
                      className="service-card__toggle"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setExpanded(isOpen ? null : i)}
                    >
                      {isOpen ? 'Collapse' : 'Expand'}
                      <span className={`chevron${isOpen ? ' chevron--open' : ''}`} />
                    </button>
                  ) : (
                    <span className="service-card__core">Core service</span>
                  )}
                </div>
                {isOpen && (
                  <ul className="service-card__panel" id={panelId}>
                    {p.subservices.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Framework() {
  return (
    <section id="how-we-work" className="section">
      <div className="container">
        <SectionHead title="From concept to live product. Four phases. One promise." sub="Agility without cutting corners." />
        <ol className="stepper">
          {FRAMEWORK.map((s) => (
            <li className="stepper__item" key={s.number}>
              <div className="stepper__node" aria-hidden="true">
                <div className="stepper__line stepper__line--before" />
                <div className="stepper__circle">{s.number}</div>
                <div className="stepper__line stepper__line--after" />
              </div>
              <div className="stepper__text">
                <h3 className="stepper__title">{s.title}</h3>
                <p className="stepper__desc">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function EngagementModels() {
  return (
    <section className="section section--alt">
      <div className="container">
        <SectionHead
          title="We work the way that works for you."
          sub="Pick the model that matches your stage, your scope, and your appetite for risk — we'll meet you there."
        />
        <div className="grid-4">
          {ENGAGEMENT_MODELS.map((m, i) => (
            <div className="flip-card engage-card" key={m.title}>
              <div className="flip-card__icon">{ENGAGEMENT_ICONS[i]}</div>
              <h3 className="flip-card__title">{m.title}</h3>
              <p className="flip-card__desc">{m.desc}</p>
              <span className="engage-card__best">Best for: {m.bestFor}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Infinite marquee: the list is rendered twice back-to-back and translated -50% for a seamless loop. */
function Marquee({
  items,
  direction = 'left',
  slow = false,
  desktopOnly = false,
  pillClass = '',
  dotClass = '',
}: {
  items: string[];
  direction?: 'left' | 'right';
  slow?: boolean;
  desktopOnly?: boolean;
  pillClass?: string;
  dotClass?: string;
}) {
  const trackClass = ['marquee__track', direction === 'right' && 'marquee__track--right', slow && 'marquee__track--slow']
    .filter(Boolean)
    .join(' ');
  const pill = (label: string, dup: boolean) => (
    <li key={(dup ? 'dup-' : '') + label} className={`pill ${pillClass}${dup ? ' marquee__dup' : ''}`} aria-hidden={dup || undefined}>
      <span className={`pill__dot ${dotClass}`} />
      {label}
    </li>
  );
  return (
    <div className={`marquee${desktopOnly ? ' marquee--desktop-only' : ''}`}>
      <ul className={trackClass}>
        {items.map((i) => pill(i, false))}
        {items.map((i) => pill(i, true))}
      </ul>
    </div>
  );
}

export function Industries() {
  return (
    <section id="industries" className="section">
      <div className="container">
        <SectionHead title="Cross-sector expertise. Contextual solutions." sub="25+ industries. One team that already speaks your domain." />
      </div>
      <Marquee items={INDUSTRIES_ROW_1} />
      <Marquee items={INDUSTRIES_ROW_2} direction="right" desktopOnly dotClass="pill__dot--gold" />
    </section>
  );
}

export function TechStack() {
  return (
    <section className="section--dark">
      <div className="container">
        <SectionHead
          eyebrow="Technology stack"
          title="Built on the Tools That Power Serious Software."
          sub="No shortcuts, no outdated tooling — just the technologies serious products are actually built on."
        />
      </div>
      <Marquee items={TECH_ROW_1} pillClass="pill--tech" />
      <Marquee items={TECH_ROW_2} direction="right" pillClass="pill--tech" />
      <Marquee items={TECH_ROW_3} slow desktopOnly pillClass="pill--tech" />
    </section>
  );
}

export function ProofOfWork() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = PROJECTS[activeIdx];
  const total = String(PROJECTS.length).padStart(2, '0');

  return (
    <section id="proof-of-work" className="section section--alt">
      <div className="container">
        <div className="proof-head">
          <div>
            <h2 className="h2">Real products. Real industries. Real outcomes.</h2>
            <p className="subhead">A few of the problems we've solved, and where.</p>
          </div>
          <a href="#proof-of-work" className="proof-head__all">
            → View all projects
          </a>
        </div>
        <div className="proof-grid">
          <article className="project-detail" aria-live="polite">
            <img className="project-detail__img" src={active.image} alt={`${active.name} — ${active.area}`} />
            <div className="project-detail__meta">
              {active.area} · {active.industry}
            </div>
            <h3 className="project-detail__name">{active.name}</h3>
            <p className="project-detail__desc">{active.desc}</p>
            <ul className="project-detail__tech">
              {active.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="project-detail__counter">
              {String(activeIdx + 1).padStart(2, '0')} / {total}
            </div>
          </article>
          <div className="project-table">
            <div className="project-table__row project-table__head" aria-hidden="true">
              <span>Project</span>
              <span>Area</span>
              <span>Industry</span>
            </div>
            {PROJECTS.map((p, i) => (
              <button
                type="button"
                key={p.name}
                className={`project-table__row${i === activeIdx ? ' project-table__row--active' : ''}`}
                aria-current={i === activeIdx || undefined}
                onClick={() => setActiveIdx(i)}
              >
                <span className="project-table__name">{p.name}</span>
                <span className="project-table__cell">{p.area}</span>
                <span className="project-table__cell">{p.industry}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead title="Don't just take our word for it." sub="Real feedback from the businesses we've built for." />
        <div className="testimonial-grid">
          {TESTIMONIALS.map((t) => {
            const initials = t.attribution
              .split(',')[0]
              .split(' ')
              .map((w) => w[0])
              .join('')
              .slice(0, 2)
              .toUpperCase();
            return (
              <figure className="testimonial" key={t.attribution}>
                <div className="testimonial__mark" aria-hidden="true">
                  "
                </div>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <div className="testimonial__avatar" style={{ background: t.avatarBg }} aria-hidden="true">
                    {initials}
                  </div>
                  {t.attribution}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);

  // No backend yet: hand the enquiry to the visitor's mail client, addressed to Agileborne.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `What are you trying to build?\n${data.get('building') ?? ''}`,
      `What's blocking you right now?\n${data.get('blocker') ?? ''}`,
      `Where are you today?\n${data.get('stage') ?? ''}`,
      `Reply to: ${data.get('email') ?? ''}`,
    ].join('\n\n');
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Where we're stuck")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="contact-form__grid">
        <div className="field">
          <label htmlFor="gs-building">What are you trying to build?</label>
          <input id="gs-building" name="building" type="text" placeholder="A short description" required />
        </div>
        <div className="field">
          <label htmlFor="gs-blocker">What's blocking you right now?</label>
          <input id="gs-blocker" name="blocker" type="text" placeholder="Timeline, tech, team, budget..." />
        </div>
        <div className="field">
          <label htmlFor="gs-stage">Where are you today?</label>
          <select id="gs-stage" name="stage" defaultValue={STAGE_OPTIONS[0]}>
            {STAGE_OPTIONS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="gs-email">Email</label>
          <input id="gs-email" name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
        </div>
      </div>
      <button type="submit" className="btn-gold contact-form__submit">
        {CTA_LABEL}
      </button>
      {sent && (
        <p className="contact-form__status" role="status">
          Your email app should open with your details filled in. If it doesn't, write to us at{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      )}
    </form>
  );
}

export function GetStarted() {
  return (
    <section id="get-started" className="section section--alt">
      <div className="container--narrow">
        <SectionHead title="Your product deserves more than a vendor. It deserves a partner." sub="Let's build something worth talking about." />
        <ol className="gs-steps">
          {GET_STARTED_STEPS.map((s, i) => (
            <li className="gs-step" key={s.number}>
              <div className="gs-card">
                <div className="gs-card__badge">{s.number}</div>
                <div className="gs-card__icon">{GET_STARTED_ICONS[i]}</div>
                <h3 className="gs-card__title">{s.title}</h3>
                <p className="gs-card__desc">{s.desc}</p>
                <span className="gs-card__time">{s.time}</span>
              </div>
              {i < GET_STARTED_STEPS.length - 1 && <div className="gs-connector" aria-hidden="true" />}
            </li>
          ))}
        </ol>
        <ContactForm />
      </div>
    </section>
  );
}

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="section">
      <div className="container--narrow">
        <SectionHead title="Questions before you reach out?" sub="Straight answers, so you know what to expect before the first call." />
        <ul className="faq">
          {FAQS.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <li className="faq__item" key={f.q}>
                <button type="button" className="faq__q" aria-expanded={isOpen} aria-controls={`faq-${i}`} onClick={() => setOpenIdx(isOpen ? null : i)}>
                  {f.q}
                  <span className={`chevron${isOpen ? ' chevron--open' : ''}`} />
                </button>
                {isOpen && (
                  <p className="faq__a" id={`faq-${i}`}>
                    {f.a}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
