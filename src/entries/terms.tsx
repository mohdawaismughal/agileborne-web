import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../styles/base.css';
import '../styles/legal.css';
import { LegalLayout } from '../pages/legal/LegalLayout';
import { TERMS_SECTIONS } from '../pages/legal/content';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LegalLayout pageId="terms" title="Terms & Conditions" sections={TERMS_SECTIONS} />
  </StrictMode>,
);
