import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { AnchorLink } from '../layout/AnchorLink';
import { HeroIllustration } from '../illustrations/HeroIllustration';
import { Reveal } from '../ui/Reveal';
import { VoiceControls } from '../ui/VoiceControls';

export function HeroSection() {
  const { copy } = useLanguage();
  const hero = copy.hero;
  const listenText = `${hero.titleLead} ${hero.titleAccent} ${hero.subtitle}`;

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="hero-glow relative overflow-hidden border-b border-line/70 bg-cream"
    >
      <div className="container-page pb-14 pt-8 sm:pt-12 lg:pb-24 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          <Reveal className="min-w-0">
            <p className="eyebrow max-w-full">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{hero.eyebrow}</span>
            </p>

            <h1 id="hero-title" className="display-1 mt-6 text-brand-950">
              {hero.titleLead}{' '}
              <span className="hero-accent relative inline-block font-normal italic text-brand-700">
                {hero.titleAccent}
                <svg
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 h-2.5 w-full text-brand-300"
                >
                  <path
                    d="M2 8C62 3 132 2 298 6"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            <p className="body-lg mt-6 max-w-xl leading-relaxed muted">{hero.subtitle}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AnchorLink id="contact" className="btn btn-primary btn-lg">
                <span>{hero.primaryCta}</span>
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </AnchorLink>
              <AnchorLink id="services" className="btn btn-secondary btn-lg">
                <span>{hero.secondaryCta}</span>
                <ArrowRight className="h-5 w-5 rotate-90" aria-hidden="true" />
              </AnchorLink>
            </div>

            <VoiceControls
              text={listenText}
              label={hero.listenLabel}
              className="mt-5"
              showUnsupported
            />

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-5">
              {hero.trust.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[0.88rem] font-semibold leading-snug text-brand-900"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="min-w-0">
            <HeroIllustration />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
