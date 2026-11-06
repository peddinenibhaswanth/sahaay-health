import { ArrowRight, CheckCircle2, ListChecks } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { AnchorLink } from '../layout/AnchorLink';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { VoiceControls } from '../ui/VoiceControls';

export function HowItWorksSection() {
  const { copy } = useLanguage();
  const how = copy.how;
  const stepsText = how.steps.map((step) => `${step.title}. ${step.body}`).join(' ');

  return (
    <section id="how-it-works" aria-labelledby="how-title" className="section bg-white">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="min-w-0">
            <SectionHeading
              id="how-title"
              eyebrow={how.eyebrow}
              title={how.title}
              intro={how.intro}
            />
          </Reveal>
          <Reveal delay={100} className="shrink-0 lg:pb-1">
            <VoiceControls text={stepsText} label={how.listen} />
          </Reveal>
        </div>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {how.steps.map((step, index) => (
            <li key={step.title} className="relative min-w-0">
              {index < how.steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute left-[4.1rem] right-[-2rem] top-7 hidden border-t-2 border-dashed border-brand-200 lg:block"
                />
              ) : null}
              <Reveal delay={index * 80}>
                <div className="flex items-start gap-4 sm:gap-5 lg:block">
                  <span className="step-number relative z-10">{index + 1}</span>
                  <div className="min-w-0 lg:mt-5">
                    <h3 className="font-display text-[1.18rem] font-semibold leading-snug text-brand-950">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed muted">{step.body}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal>
            <div className="card-warm h-full p-6 sm:p-7">
              <h3 className="flex items-center gap-3 font-display text-[1.2rem] font-semibold text-brand-950">
                <ListChecks className="h-5 w-5 text-sand-600" aria-hidden="true" />
                {how.prepTitle}
              </h3>
              <ul className="mt-4 space-y-3">
                {how.prepItems.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[0.96rem] leading-relaxed text-ink"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-700"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card flex h-full flex-col justify-between p-6 sm:p-7">
              <p className="font-display text-[1.3rem] leading-snug text-brand-900">{how.note}</p>
              <AnchorLink id="contact" className="btn btn-primary mt-6 self-start">
                <span>{how.cta}</span>
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </AnchorLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
