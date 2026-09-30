import type { ReactNode } from 'react';

function Line({ size, strokeWidth = 1.6, children }: { size: number; strokeWidth?: number; children: ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} aria-hidden="true">
      {children}
    </svg>
  );
}

const dot = { fill: 'currentColor', stroke: 'none' } as const;

// ---- Differentiators ("Not just developers") ----
export const DIFF_ICONS = {
  target: (
    <Line size={24}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" {...dot} />
    </Line>
  ),
  shield: (
    <Line size={24}>
      <path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </Line>
  ),
  sliders: (
    <Line size={24}>
      <line x1="5" y1="4" x2="5" y2="20" />
      <line x1="12" y1="4" x2="12" y2="20" />
      <line x1="19" y1="4" x2="19" y2="20" />
      <circle cx="5" cy="9" r="2" {...dot} />
      <circle cx="12" cy="15" r="2" {...dot} />
      <circle cx="19" cy="7" r="2" {...dot} />
    </Line>
  ),
  globe: (
    <Line size={24}>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </Line>
  ),
};

// ---- Service pillars (same order as PILLARS) ----
export const SERVICE_ICONS = [
  // Advisory — compass
  <Line size={26} key="advisory">
    <circle cx="12" cy="12" r="9" />
    <polygon points="15,9 13,13 9,15 11,11" {...dot} />
  </Line>,
  // UX/UI — screen with layout line
  <Line size={26} key="ux">
    <rect x="3" y="4" width="18" height="13" rx="1.5" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <path d="M7 11l2.5-2.5L11 10l3-3" />
  </Line>,
  // Development — code brackets
  <Line size={26} key="dev">
    <polyline points="8 5 3 12 8 19" />
    <polyline points="16 5 21 12 16 19" />
  </Line>,
  // Modernization — refresh
  <Line size={26} key="modern">
    <path d="M20 11a8 8 0 1 0-2.6 5.9" />
    <polyline points="20 5 20 11 14 11" />
  </Line>,
  // AI — chip
  <Line size={26} key="ai">
    <rect x="8" y="8" width="8" height="8" rx="1" />
    <line x1="12" y1="2" x2="12" y2="5" />
    <line x1="12" y1="19" x2="12" y2="22" />
    <line x1="2" y1="12" x2="5" y2="12" />
    <line x1="19" y1="12" x2="22" y2="12" />
    <line x1="4.9" y1="4.9" x2="7" y2="7" />
    <line x1="17" y1="17" x2="19.1" y2="19.1" />
    <line x1="4.9" y1="19.1" x2="7" y2="17" />
    <line x1="17" y1="7" x2="19.1" y2="4.9" />
  </Line>,
  // DevSec/MLOps — shield lock
  <Line size={26} key="devsec">
    <path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z" />
    <rect x="9.5" y="11" width="5" height="4" rx="0.7" />
    <path d="M10.3 11V9.5a1.7 1.7 0 0 1 3.4 0V11" />
  </Line>,
  // Optimization — gauge
  <Line size={26} key="optim">
    <circle cx="12" cy="13" r="8" />
    <line x1="12" y1="13" x2="15.5" y2="9.5" />
    <line x1="9" y1="4" x2="15" y2="4" />
  </Line>,
  // Enterprise & e-commerce — cart
  <Line size={26} key="ecom">
    <circle cx="9" cy="20" r="1.3" {...dot} />
    <circle cx="18" cy="20" r="1.3" {...dot} />
    <path d="M2 3h3l2.4 12.2a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L21 7H6" />
  </Line>,
];

// ---- Engagement models ----
export const ENGAGEMENT_ICONS = [
  // Team extension — people
  <Line size={26} key="team">
    <circle cx="9" cy="8" r="3" />
    <path d="M2.5 19c0-3 3-5.5 6.5-5.5s6.5 2.5 6.5 5.5" />
    <circle cx="17" cy="8.5" r="2.3" />
    <path d="M15.5 13.3c2.7 0.3 5 2.6 5 5.7" />
  </Line>,
  // Fixed budget — star
  <Line size={26} key="fixed">
    <path d="M12 2l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7z" />
  </Line>,
  // Offshore partner — globe
  <Line size={26} key="offshore">
    <circle cx="12" cy="12" r="9" />
    <ellipse cx="12" cy="12" rx="4" ry="9" />
    <line x1="3" y1="12" x2="21" y2="12" />
  </Line>,
  // Equity partnership — handshake
  <Line size={26} key="equity">
    <path d="M3 11l4-4 3 2 4-5 4 4-2 3" />
    <path d="M9 9l-4.5 4.5a1.8 1.8 0 0 0 2.5 2.5l1-1" />
    <path d="M13 12l3.5 3.5a1.8 1.8 0 0 0 2.5-2.5L15 9" />
  </Line>,
];

// ---- Get started steps ----
export const GET_STARTED_ICONS = [
  // Consultation — chat bubble
  <Line size={24} key="consult">
    <path d="M4 5h16v11H8l-4 4z" />
    <line x1="8" y1="9" x2="16" y2="9" />
    <line x1="8" y1="12.5" x2="13" y2="12.5" />
  </Line>,
  // Tailored next step — compass
  <Line size={24} key="next">
    <circle cx="12" cy="12" r="9" />
    <polygon points="15,9 13,13 9,15 11,11" {...dot} />
  </Line>,
  // Kick-off — rocket
  <Line size={24} key="kickoff">
    <path d="M12 2c3 3 4.5 6.5 4.5 10a4.5 4.5 0 0 1-9 0c0-3.5 1.5-7 4.5-10z" />
    <path d="M8.5 15.5c-2 1-3 2.8-3 4.5 1.7 0 3.5-1 4.5-3" />
    <path d="M15.5 15.5c2 1 3 2.8 3 4.5-1.7 0-3.5-1-4.5-3" />
    <circle cx="12" cy="10.5" r="1.4" {...dot} />
  </Line>,
];

// ---- Theme toggle ----
export const SunIcon = (
  <Line size={16} strokeWidth={2}>
    <circle cx="12" cy="12" r="4.5" />
    <line x1="12" y1="1.5" x2="12" y2="4.5" />
    <line x1="12" y1="19.5" x2="12" y2="22.5" />
    <line x1="4.2" y1="4.2" x2="6.3" y2="6.3" />
    <line x1="17.7" y1="17.7" x2="19.8" y2="19.8" />
    <line x1="1.5" y1="12" x2="4.5" y2="12" />
    <line x1="19.5" y1="12" x2="22.5" y2="12" />
    <line x1="4.2" y1="19.8" x2="6.3" y2="17.7" />
    <line x1="17.7" y1="6.3" x2="19.8" y2="4.2" />
  </Line>
);

export const MoonIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true">
    <path d="M20.5 14.5a8.5 8.5 0 1 1-9-11 7 7 0 0 0 9 11z" />
  </svg>
);
