import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/base.css';
import '../styles/legal.css';
import { LegalLayout } from '../pages/legal/LegalLayout';
import { COOKIE_SECTIONS } from '../pages/legal/content';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LegalLayout pageId="cookies" title="Cookie Policy" sections={COOKIE_SECTIONS} />
  </StrictMode>,
);
