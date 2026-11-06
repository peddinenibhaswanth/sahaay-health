import { ArrowUpRight, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_EMAIL, CONTACT_PHONE } from '../../config';
import { useLanguage } from '../../hooks/useLanguage';
import { scrollBehavior } from '../../lib/utils';
import { Logo } from '../ui/Logo';
import { AnchorLink } from './AnchorLink';

export function Footer() {
  const { copy } = useLanguage();
  const year = new Date().getFullYear();

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: scrollBehavior() });
  };

  return (
    <footer className="section-dark relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 h-[28rem] w-[28rem] rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 h-[24rem] w-[24rem] rounded-full bg-white/[0.03]"
      />

      <div className="container-page relative pt-16 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.55fr_0.8fr_0.9fr_1.2fr]">
          <div>
            <Logo tone="dark" />
            <p className="muted-on-dark mt-5 max-w-sm text-[0.95rem] leading-relaxed">
              {copy.footer.blurb}
            </p>
            <p className="muted-on-dark mt-4 flex items-center gap-2 text-[0.9rem]">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              {copy.footer.location}
            </p>
          </div>

          <nav aria-labelledby="footer-explore">
            <h2
              id="footer-explore"
              className="text-[0.78rem] font-bold uppercase tracking-[0.16em] text-brand-200"
            >
              {copy.footer.explore}
            </h2>
            <ul className="mt-4 space-y-2.5 text-[0.95rem]">
              {[
                { id: 'home', label: copy.nav.home },
                { id: 'about', label: copy.nav.about },
                { id: 'services', label: copy.nav.services },
                { id: 'how-it-works', label: copy.nav.howItWorks },
                { id: 'pricing', label: copy.nav.pricing },
              ].map((item) => (
                <li key={item.id}>
                  <AnchorLink id={item.id} className="footer-link">
                    {item.label}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-support">
            <h2
              id="footer-support"
              className="text-[0.78rem] font-bold uppercase tracking-[0.16em] text-brand-200"
            >
              {copy.footer.support}
            </h2>
            <ul className="mt-4 space-y-2.5 text-[0.95rem]">
              <li>
                <AnchorLink id="contact" className="footer-link">
                  {copy.footer.formLink}
                </AnchorLink>
              </li>
              <li>
                <AnchorLink id="faq" className="footer-link">
                  {copy.footer.faqLink}
                </AnchorLink>
              </li>
              <li>
                <Link to="/privacy" className="footer-link">
                  {copy.footer.privacy}
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="footer-link">
                  {copy.footer.accessibility}
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.78rem] font-bold uppercase tracking-[0.16em] text-brand-200">
              {copy.footer.contactHeading}
            </h2>
            <ul className="mt-4 space-y-2.5 text-[0.95rem]">
              {CONTACT_EMAIL ? (
                <li>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="footer-link inline-flex items-start gap-2 break-all"
                  >
                    <Mail className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{CONTACT_EMAIL}</span>
                  </a>
                </li>
              ) : null}
              {CONTACT_PHONE ? (
                <li>
                  <a
                    href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`}
                    className="footer-link inline-flex items-start gap-2"
                  >
                    <Phone className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{CONTACT_PHONE}</span>
                  </a>
                </li>
              ) : null}
              {!CONTACT_EMAIL && !CONTACT_PHONE ? (
                <li className="muted-on-dark text-[0.9rem] leading-relaxed">
                  {copy.footer.detailsPending}
                </li>
              ) : null}
              <li>
                <AnchorLink id="contact" className="footer-link">
                  {copy.footer.formLink}
                </AnchorLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="card-dark mt-12 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <ShieldCheck className="h-5 w-5 text-brand-100" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-[1rem] font-bold text-white">{copy.footer.disclaimerTitle}</h2>
              <p className="muted-on-dark mt-2 max-w-4xl text-[0.9rem] leading-relaxed">
                {copy.footer.disclaimer}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/15 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="muted-on-dark text-[0.86rem] leading-relaxed">
            <p>
              © {year} {copy.footer.rights}
            </p>
            <p className="mt-1">{copy.footer.proposed}</p>
          </div>

          <button type="button" onClick={backToTop} className="btn btn-inverse self-start px-5 text-[0.92rem] sm:self-auto">
            <span>{copy.footer.backToTop}</span>
            <ArrowUpRight className="h-4 w-4 -rotate-45" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
