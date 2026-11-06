import { AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { AnchorLink } from '../layout/AnchorLink';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function PricingSection() {
  const { copy } = useLanguage();
  const pricing = copy.pricing;

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="section bg-white">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="pricing-title"
            eyebrow={pricing.eyebrow}
            title={pricing.title}
            intro={pricing.intro}
            align="center"
          />
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <div className="panel-dark relative overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/[0.04]"
            />

            <div className="relative grid lg:grid-cols-[0.92fr_1.08fr]">
              <div className="p-6 sm:p-9 lg:p-10">
                <span className="badge-amber">{pricing.badge}</span>

                <h3 className="mt-6 font-display text-[1.25rem] font-semibold text-brand-100">
                  {pricing.planName}
                </h3>

                <p className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-white">
                  <span className="font-display text-[3.8rem] font-semibold leading-none">
                    {pricing.price}
                  </span>
                  <span className="muted-on-dark text-[1rem]">{pricing.period}</span>
                </p>

                <p className="muted-on-dark mt-6 max-w-md text-[0.9rem] leading-relaxed">
                  {pricing.disclaimer}
                </p>

                <AnchorLink
                  id="contact"
                  className="btn btn-inverse mt-7 w-full px-6 sm:w-auto"
                >
                  <span>{pricing.cta}</span>
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </AnchorLink>

                <p className="muted-on-dark mt-4 text-[0.87rem] leading-relaxed">
                  {pricing.footnote}
                </p>
              </div>

              <div className="border-t border-white/15 p-6 sm:p-9 lg:border-l lg:border-t-0 lg:p-10">
                <h3 className="text-[0.82rem] font-bold uppercase tracking-[0.14em] text-brand-100">
                  {pricing.includesTitle}
                </h3>
                <ul className="mt-4 space-y-3">
                  {pricing.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.96rem] leading-relaxed text-white">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#F6C177]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="card-dark mt-7 p-4">
                  <p className="flex items-center gap-2 text-[0.95rem] font-semibold text-white">
                    <AlertCircle className="h-4 w-4 text-[#F6C177]" aria-hidden="true" />
                    {pricing.notIncludedTitle}
                  </p>
                  <p className="muted-on-dark mt-2 text-[0.9rem] leading-relaxed">
                    {pricing.notIncluded}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
