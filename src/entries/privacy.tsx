import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/base.css';
import '../styles/legal.css';
import { LegalLayout } from '../pages/legal/LegalLayout';
import { PRIVACY_SECTIONS } from '../pages/legal/content';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LegalLayout pageId="privacy" title="Privacy Policy" sections={PRIVACY_SECTIONS} />
  </StrictMode>,
);
