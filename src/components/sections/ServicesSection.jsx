import {
  ArrowRight,
  CalendarCheck,
  Compass,
  ListChecks,
  Smartphone,
  Users,
  Video,
  Volume2,
} from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { cn } from '../../lib/utils';
import { AnchorLink } from '../layout/AnchorLink';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const SERVICE_ICONS = [
  Compass,
  CalendarCheck,
  Video,
  Smartphone,
  ListChecks,
  Users,
  Volume2,
];

export function ServicesSection() {
  const { copy } = useLanguage();
  const services = copy.services;

  return (
    <section id="services" aria-labelledby="services-title" className="section section-blue">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="services-title"
            eyebrow={services.eyebrow}
            title={services.title}
            intro={services.intro}
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service, index) => {
            const Icon = SERVICE_ICONS[index];
            const isLast = index === services.items.length - 1;
            return (
              <Reveal
                key={service.title}
                delay={(index % 3) * 70}
                className={isLast ? 'sm:col-span-2 lg:col-span-3' : undefined}
              >
                <article
                  className={cn(
                    'card group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lift sm:p-7',
                    isLast && 'bg-brand-50/70 sm:flex-row sm:items-center sm:gap-6',
                  )}
                >
                  <div
                    className={cn(
                      'flex items-start justify-between gap-3',
                      isLast && 'sm:w-16 sm:flex-col sm:items-start',
                    )}
                  >
                    <span className="icon-tile">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-[0.95rem] font-semibold text-brand-600">
                      0{index + 1}
                    </span>
                  </div>
                  <div className={cn(isLast && 'sm:min-w-0 sm:flex-1')}>
                    <h3
                      className={cn(
                        'mt-5 font-display text-[1.2rem] font-semibold leading-snug text-brand-950',
                        isLast && 'sm:mt-0',
                      )}
                    >
                      {service.title}
                    </h3>
                    <p className="mt-2 text-[0.96rem] leading-relaxed muted">{service.body}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-9 flex flex-col items-center gap-5 text-center">
          <p className="max-w-3xl text-[0.85rem] leading-relaxed text-muted">
            {services.disclaimer}
          </p>
          <AnchorLink id="contact" className="btn btn-primary">
            <span>{services.cta}</span>
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </AnchorLink>
        </Reveal>
      </div>
    </section>
  );
}
