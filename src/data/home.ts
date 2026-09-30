// Copy for the homepage, taken verbatim from the approved Claude Design prototype.

export type Pillar = {
  title: string;
  desc: string;
  /** Sub-services shown in the card's expand panel and the nav mega menu. Empty = "Core service". */
  subservices: string[];
};

export const PILLARS: Pillar[] = [
  {
    title: 'Advisory and consulting',
    desc: 'Technology strategy, product discovery, and technical due diligence for teams deciding what to build next.',
    subservices: [],
  },
  {
    title: 'UX and UI design',
    desc: 'Research-led design systems that make complex products feel obvious to use.',
    subservices: [
      'Mobile App Design — iOS and Android, crafted for engagement',
      'Web App Design — Responsive, conversion-optimized',
      'SaaS App Design — Complex workflows made simple',
      'Business App Design — Internal tools that boost productivity',
      'Bespoke Design — Custom UI/UX for unique problems',
    ],
  },
  {
    title: 'Development solutions',
    desc: 'Web, mobile, and custom software built by senior engineers, end to end.',
    subservices: [
      'MVP Development — Tight, focused MVPs that learn fast',
      'SaaS Development — Multi-tenant, scale-ready architectures',
      'Web & Mobile — Native and cross-platform apps',
      'Bespoke Software — No off-the-shelf shortcuts',
      'Cloud Solutions — AWS, Azure, GCP — secure and scalable',
    ],
  },
  {
    title: 'Modernization',
    desc: 'Migrating and re-architecting legacy systems without breaking what already works.',
    subservices: ['Web, Mobile, SaaS, and cloud replatforming'],
  },
  {
    title: 'Artificial intelligence',
    desc: 'Practical AI — from LLM features to automation — grounded in real business outcomes.',
    subservices: [
      'AI Agent Development — Autonomous agents that reason and act',
      'AI-Powered Automation — Replace repetitive processes intelligently',
      'Generative AI — GenAI built where it creates real value',
      'AI Visual Analysis — Computer vision for QC, imaging, and more',
      'AI Forecasting — Predictive models on your actual data',
    ],
  },
  {
    title: 'DevSec and MLOps',
    desc: "Secure pipelines and production-grade infrastructure for teams that can't afford downtime.",
    subservices: [],
  },
  {
    title: 'Optimization services',
    desc: 'Performance, cost, and reliability tuning for systems already in production.',
    subservices: ['Audits, QA, and ongoing care that keeps products improving.'],
  },
  {
    title: 'Enterprise and e-commerce',
    desc: 'ERP, payments, and marketplace systems built for scale and compliance.',
    subservices: ['ERP integration', 'Payment systems', 'Marketplace development', 'Inventory and fulfillment systems'],
  },
];

export const CLIENT_LOGOS = [
  { name: 'Emirates', file: 'emirates' },
  { name: 'Mastercard', file: 'mastercard' },
  { name: 'Visa', file: 'visa' },
  { name: 'Volkswagen', file: 'volkswagen' },
  { name: 'Majid Al Futtaim', file: 'majid-al-futtaim' },
  { name: 'MoneyGram', file: 'moneygram' },
  { name: 'UPS', file: 'ups' },
  { name: 'The White House', file: 'whitehouse' },
  { name: 'ATFX', file: 'atfx' },
  { name: 'New Balance', file: 'new-balance' },
  { name: 'Harvard University', file: 'harvard' },
  { name: 'Cobase', file: 'cobase' },
];

export const STATS = [
  { value: '5+', label: 'Years delivering results, since 2021' },
  { value: '25+', label: 'Industries served globally' },
  { value: '6', label: 'Countries with active teams' },
  { value: '100%', label: 'Handpicked talent only' },
];

export const MARKETS = ['Americas', 'Europe', 'Middle East / Gulf', 'Australasia'];

export const DIFFERENTIATORS = [
  { title: 'Outcome-led delivery', desc: 'We measure ourselves against your goals, not just sprint velocity.', icon: 'target' },
  { title: 'Compliance-first engineering', desc: 'Security and regulatory rigor built in from day one, not bolted on.', icon: 'shield' },
  { title: 'Flexible engagement', desc: 'From single-sprint fixes to long-term partnerships — you choose the shape.', icon: 'sliders' },
  { title: 'Cross-industry breadth', desc: 'Patterns learned across 25+ industries, applied to your specific context.', icon: 'globe' },
] as const;

export const FRAMEWORK = [
  { number: '01', title: 'Discover', desc: 'Align on goals, constraints, and what success actually looks like.' },
  { number: '02', title: 'Design', desc: 'Architect the solution and validate it with real users before we build.' },
  { number: '03', title: 'Build', desc: 'Ship in tight, accountable sprints with full visibility into progress.' },
  { number: '04', title: 'Scale', desc: 'Support growth, uptime, and iteration long after launch.' },
];

export const ENGAGEMENT_MODELS = [
  { title: 'Team Extension', desc: 'Embed our engineers directly into your existing team and workflows.', bestFor: 'scaling teams fast' },
  { title: 'Fixed Budget', desc: 'A defined scope, timeline, and price agreed upfront.', bestFor: 'well-specified projects' },
  { title: 'Offshore Partner', desc: 'A dedicated, long-term distributed delivery team.', bestFor: 'sustained product roadmaps' },
  { title: 'Equity Partnership', desc: 'We build in exchange for equity in what we help create.', bestFor: 'early-stage founders' },
];

export const INDUSTRIES_ROW_1 = [
  'Fintech', 'Healthcare', 'Real estate', 'Retail', 'E-commerce', 'EdTech', 'Logistics', 'Insurance',
  'Travel and hospitality', 'Manufacturing', 'Energy', 'Telecommunications', 'Government',
];
export const INDUSTRIES_ROW_2 = [
  'Banking', 'Automotive', 'Media and entertainment', 'Agriculture', 'Legal services', 'Nonprofit', 'Sports',
  'Aviation', 'Construction', 'Food and beverage', 'Public sector', 'Cybersecurity',
];

export const TECH_ROW_1 = [
  'Figma', 'Sketch', 'Adobe XD', 'React', 'Next.js', 'Vue', 'Nuxt', 'TailwindCSS', 'React Native', 'Kotlin', 'Swift',
  'JavaScript', 'TypeScript',
];
export const TECH_ROW_2 = [
  'Python', 'Ruby', 'PHP', 'C#', 'Java', 'Node.js', 'NestJS', 'Ruby on Rails', 'Laravel', 'ASP.NET', 'Django', 'MySQL',
  'PostgreSQL', 'MongoDB', 'Firebase',
];
export const TECH_ROW_3 = [
  'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'TensorFlow', 'PyTorch', 'Power BI',
  'Tableau', 'Salesforce', 'Microsoft Dynamics 365', 'SAP',
];

export const PROJECTS = [
  {
    name: 'Modernization',
    area: 'Enhanced payment gateway',
    industry: 'Crowdfunding',
    desc: 'Modernized a legacy crowdfunding platform, integrating a payment gateway for smoother transaction processing.',
    tech: ['React', 'Rails', 'Stripe Connect', 'MySQL', 'AWS'],
    image: '/assets/images/project-thumb-0.webp',
  },
  {
    name: 'Agent development',
    area: 'Voice agent',
    industry: 'Real estate',
    desc: 'Developed an AI-powered voice agent for a real estate business, automating client conversations and qualifying leads without adding headcount.',
    tech: ['Vue', 'Python', 'PHP', 'Vapi', 'Make', 'Postgres'],
    image: '/assets/images/project-thumb-1.webp',
  },
  {
    name: 'SaaS development',
    area: 'Gamified learning',
    industry: 'EdTech',
    desc: 'Built an EdTech platform designed to provide a fun way of learning, with a learning-first user experience.',
    tech: ['React', 'React Native', 'Rails', 'Postgres'],
    image: '/assets/images/project-thumb-2.webp',
  },
  {
    name: 'Enterprise solution',
    area: 'ERP',
    industry: 'Retail',
    desc: 'Delivered enterprise-grade ERP work on Microsoft Dynamics 365, streamlining operations for a business managing complex workflows at scale.',
    tech: ['Microsoft Dynamics 365'],
    image: '/assets/images/project-thumb-3.webp',
  },
];

export const TESTIMONIALS = [
  {
    quote: 'Agileborne is an excellent partner to work with. Looking forward to many more projects to come!',
    attribution: 'Cofounder, crowdfunding platform',
    avatarBg: '#38BDF8',
  },
  {
    quote: 'What really stood out to me about Agileborne was their adaptability and focus on finding solutions.',
    attribution: 'Cofounder, EdTech platform',
    avatarBg: '#C6A87D',
  },
  {
    quote: "Agileborne's expertise in turning any complex problem into an actual product is insane.",
    attribution: 'Owner, IT service company',
    avatarBg: '#0F172A',
  },
];

export const GET_STARTED_STEPS = [
  { number: '01', title: 'Free consultation', desc: 'Understand your challenge and find the right engagement model.', time: '~30 min' },
  { number: '02', title: 'Tailored next step', desc: 'A discovery call, feasibility estimate, or partnership discussion — whatever fits.', time: 'Varies by model' },
  { number: '03', title: 'Kick-off', desc: 'Your dedicated, agile team is assembled and we get to work.', time: 'Day one' },
];

export const STAGE_OPTIONS = ['Idea stage', 'MVP built', 'Scaling', 'Enterprise'];

export const FAQS = [
  {
    q: 'What engagement models do you offer?',
    a: 'Team extension, fixed budget, offshore partnership, or equity partnership — we match the model to your stage, scope, and risk appetite.',
  },
  {
    q: 'How long do projects typically take?',
    a: 'It depends on scope, but most MVPs move from discovery to launch in 8-12 weeks. Discovery sets a realistic timeline before any commitment.',
  },
  {
    q: 'Do you work with early-stage startups or only enterprises?',
    a: 'Both. We run enterprise-scale programs and founder-stage builds in parallel, applying the same rigor to each.',
  },
  {
    q: 'Is AI a core service, or an add-on?',
    a: 'Core. Artificial intelligence is one of our eight service pillars, staffed by engineers who build production AI systems, not prototypes.',
  },
  {
    q: 'Where is your team located, and how do you handle time zones?',
    a: "We're headquartered in Lahore with active teams across six countries, and we structure schedules to overlap with the Americas, Europe, the Gulf, and Australasia.",
  },
  {
    q: "I'm not sure exactly what I need yet — can I still reach out?",
    a: "Yes. Tell us what's broken, and we'll help you scope it from there — that's the point of the first call.",
  },
];
