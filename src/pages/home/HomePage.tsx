import { BackToTop, SiteFooter } from '../../components/shared';
import { useTheme } from '../../lib/hooks';
import { Nav } from './Nav';
import {
  EngagementModels,
  Faq,
  Framework,
  GetStarted,
  GlobalPresence,
  Hero,
  Industries,
  OurDna,
  Problem,
  ProofOfWork,
  Services,
  Stats,
  TechStack,
  Testimonials,
  ValueProposition,
} from './Sections';

export function HomePage() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="home">
      <Nav isDark={isDark} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <OurDna />
        <Stats />
        <GlobalPresence />
        <Problem />
        <ValueProposition />
        <Services />
        <Framework />
        <EngagementModels />
        <Industries />
        <TechStack />
        <ProofOfWork />
        <Testimonials />
        <GetStarted />
        <Faq />
      </main>
      <SiteFooter anchorBase="" />
      <BackToTop />
    </div>
  );
}
