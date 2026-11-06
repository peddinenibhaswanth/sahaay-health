import {
  BookOpen,
  CalendarCheck,
  HeartHandshake,
  ListChecks,
  ShieldCheck,
  Video,
} from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const ITEM_ICONS = [ListChecks, CalendarCheck, Video, HeartHandshake, BookOpen];

export function SolutionSection() {
  const { copy } = useLanguage();
  const solution = copy.solution;

  return (
    <section id="solution" aria-labelledby="solution-title" className="section bg-white">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionHeading
                id="solution-title"
                eyebrow={solution.eyebrow}
                title={solution.title}
                intro={solution.intro}
              />
            </Reveal>

            <Reveal delay={100} className="mt-9 hidden lg:block">
              <span className="block h-px w-20 bg-brand-200" aria-hidden="true" />
            </Reveal>
          </div>

          <ol className="min-w-0 space-y-3">
            {solution.items.map((item, index) => {
              const Icon = ITEM_ICONS[index];
              return (
                <li key={item.title}>
                  <Reveal delay={index * 60}>
                    <article className="card flex gap-4 p-5 transition duration-300 hover:border-brand-300 hover:shadow-lift sm:gap-5 sm:p-6">
                      <span className="step-number h-12 w-12 rounded-xl text-[1.05rem]">
                        {index + 1}
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <h3 className="font-display text-[1.18rem] font-semibold leading-snug text-brand-950">
                            {item.title}
                          </h3>
                          <Icon className="h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                        </div>
                        <p className="mt-2 text-[0.96rem] leading-relaxed muted">{item.body}</p>
                      </div>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>

        <Reveal className="mt-10">
          <div className="card-warm flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:p-7">
            <span className="icon-tile-sand">
              <ShieldCheck className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-display text-[1.15rem] font-semibold text-brand-950">
                {solution.boundaryTitle}
              </h3>
              <p className="mt-1.5 max-w-4xl text-[0.96rem] leading-relaxed muted">
                {solution.boundary}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
