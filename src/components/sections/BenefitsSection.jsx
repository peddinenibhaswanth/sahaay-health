import { BookOpen, Compass, HeartPulse, Sparkles, Type, Users } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const BENEFIT_ICONS = [Compass, Type, Sparkles, Users, BookOpen, HeartPulse];

export function BenefitsSection() {
  const { copy } = useLanguage();
  const benefits = copy.benefits;

  return (
    <section id="benefits" aria-labelledby="benefits-title" className="section section-sand">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="benefits-title"
              eyebrow={benefits.eyebrow}
              title={benefits.title}
              intro={benefits.intro}
              tone="sand"
            />
          </Reveal>

          <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
            {benefits.items.map((item, index) => {
              const Icon = BENEFIT_ICONS[index];
              return (
                <Reveal key={item.title} delay={(index % 2) * 70}>
                  <div className="flex gap-4">
                    <span className="icon-tile-sand h-11 w-11 rounded-xl">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-[1.1rem] font-semibold leading-snug text-brand-950">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-[0.94rem] leading-relaxed muted">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
