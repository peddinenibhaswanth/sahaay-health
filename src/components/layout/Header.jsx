import { useEffect, useRef, useState } from 'react';
import { Accessibility as AccessibilityIcon, ArrowRight, Menu, X } from 'lucide-react';
import { useAccessibility } from '../../hooks/useAccessibility';
import { useLanguage } from '../../hooks/useLanguage';
import { useActiveSection } from '../../hooks/useActiveSection';
import { cn } from '../../lib/utils';
import { LanguageSelect } from '../accessibility/LanguageSelect';
import { Logo } from '../ui/Logo';
import { AnchorLink } from './AnchorLink';
import { useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { id: 'home', key: 'home' },
  { id: 'about', key: 'about' },
  { id: 'services', key: 'services' },
  { id: 'how-it-works', key: 'howItWorks' },
  { id: 'pricing', key: 'pricing' },
  { id: 'contact', key: 'contact' },
];

const SECTION_IDS = [
  'home',
  'problem',
  'solution',
  'services',
  'how-it-works',
  'benefits',
  'pricing',
  'about',
  'faq',
  'contact',
];

const SECTION_TO_NAV = {
  home: 'home',
  problem: 'home',
  solution: 'home',
  services: 'services',
  'how-it-works': 'how-it-works',
  benefits: 'how-it-works',
  pricing: 'pricing',
  about: 'about',
  faq: 'about',
  contact: 'contact',
};

export function Header() {
  const { copy } = useLanguage();
  const { openPanel } = useAccessibility();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const activeSection = useActiveSection(SECTION_IDS);
  const isLandingPage = location.pathname === '/';
  const activeNavKey = isLandingPage ? SECTION_TO_NAV[activeSection] ?? 'home' : '';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const focusTimer = window.setTimeout(() => {
      menuRef.current?.querySelector('a[href], button')?.focus();
    }, 40);

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        'site-header sticky top-0 z-40 border-b bg-cream/95 backdrop-blur-md transition-shadow duration-300',
        scrolled
          ? 'border-line shadow-[0_14px_40px_-32px_rgba(7,59,56,0.55)]'
          : 'border-transparent',
      )}
    >
      <div className="container-page flex min-h-[4.75rem] items-center justify-between gap-3 py-2.5">
        <AnchorLink
          id="home"
          aria-label={copy.nav.homeLabel}
          className="shrink-0 rounded-2xl"
          onNavigate={closeMenu}
        >
          <Logo />
        </AnchorLink>

        <nav aria-label={copy.nav.mainNav} className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeNavKey === item.id;
              return (
                <li key={item.id}>
                  <AnchorLink
                    id={item.id}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn('nav-link inline-flex', isActive && 'nav-link-active')}
                  >
                    {copy.nav[item.key]}
                  </AnchorLink>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSelect id="header-language" className="hidden sm:flex" />

          <AnchorLink
            id="contact"
            onNavigate={closeMenu}
            className="header-cta btn btn-primary hidden min-h-11 px-5 text-[0.94rem] xl:inline-flex"
          >
            <span>{copy.nav.getStarted}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </AnchorLink>

          <button
            ref={triggerRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="btn btn-secondary min-h-11 px-3.5 text-[0.92rem] xl:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
            <span>{menuOpen ? copy.nav.closeMenu : copy.nav.menu}</span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="mobile-menu absolute inset-x-0 top-full max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-line bg-cream pb-24 shadow-2xl xl:hidden"
        >
          <nav aria-label={copy.nav.mobileNav} className="container-page py-4">
            <ul className="divide-y divide-line">
              {NAV_ITEMS.map((item) => {
                const isActive = activeNavKey === item.id;
                return (
                  <li key={item.id}>
                    <AnchorLink
                      id={item.id}
                      onNavigate={closeMenu}
                      aria-current={isActive ? 'true' : undefined}
                      className={cn(
                        'flex min-h-14 items-center justify-between gap-3 rounded-xl px-3 py-3 text-[1.08rem] font-semibold text-ink',
                        isActive && 'bg-brand-50 text-brand-900',
                      )}
                    >
                      <span>{copy.nav[item.key]}</span>
                      <ArrowRight className="h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                    </AnchorLink>
                  </li>
                );
              })}
            </ul>

            <div className="mt-5 grid gap-3">
              <button
                type="button"
                onClick={() => {
                  openPanel(triggerRef.current);
                  closeMenu();
                }}
                className="btn btn-secondary min-h-14 w-full justify-start"
              >
                <AccessibilityIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>{copy.accessibility.title}</span>
              </button>
              <LanguageSelect id="mobile-language" showLabel />
              <AnchorLink
                id="contact"
                onNavigate={closeMenu}
                className="btn btn-primary min-h-14 w-full"
              >
                <span>{copy.nav.getStarted}</span>
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </AnchorLink>
            </div>

            <p className="mt-4 text-[0.88rem] leading-relaxed muted">{copy.footer.location}</p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
