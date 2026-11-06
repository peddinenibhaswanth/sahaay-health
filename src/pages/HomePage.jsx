import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useLanguage } from '../hooks/useLanguage';
import { AboutSection } from '../components/sections/AboutSection';
import { BenefitsSection } from '../components/sections/BenefitsSection';
import { ContactSection } from '../components/sections/ContactSection';
import { FAQSection } from '../components/sections/FAQSection';
import { HeroSection } from '../components/sections/HeroSection';
import { HowItWorksSection } from '../components/sections/HowItWorksSection';
import { PricingSection } from '../components/sections/PricingSection';
import { ProblemSection } from '../components/sections/ProblemSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { SolutionSection } from '../components/sections/SolutionSection';

export function HomePage() {
  const { copy } = useLanguage();
  useDocumentTitle(copy.meta.title);

  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <PricingSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
