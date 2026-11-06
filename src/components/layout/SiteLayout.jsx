import { Outlet } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import { AccessibilityWidget } from '../accessibility/AccessibilityWidget';
import { Footer } from './Footer';
import { Header } from './Header';

export function SiteLayout() {
  const { copy } = useLanguage();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-brand-900 focus:px-5 focus:py-3 focus:text-[1rem] focus:font-semibold focus:text-white"
      >
        {copy.nav.skip}
      </a>

      <Header />

      <main id="main-content" tabIndex={-1} className="min-h-[60vh]">
        <Outlet />
      </main>

      <Footer />
      <AccessibilityWidget />
    </>
  );
}
