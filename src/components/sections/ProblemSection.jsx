import { ListChecks, Type, Users } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { Reveal } from '../ui/Reveal';

const CARD_ICONS = [Type, ListChecks, Users];

export function ProblemSection() {
  const { copy } = useLanguage();
  const problem = copy.problem;

  return (
    <section
      id="problem"
      aria-labelledby="problem-title"
      className="section section-dark relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-white/[0.04]"
      />

      <div className="container-page relative">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <Reveal>
            <p className="eyebrow-dark">{problem.eyebrow}</p>
            <h2 id="problem-title" className="display-2 mt-5 max-w-2xl text-white">
              {problem.title}
            </h2>
            <p className="body-lg muted-on-dark mt-5 max-w-2xl leading-relaxed">
              {problem.intro}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <p className="max-w-md border-l-2 border-[#F6C177] pl-5 font-display text-[1.2rem] italic leading-relaxed text-white">
              {problem.closing}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {problem.cards.map((card, index) => {
            const Icon = CARD_ICONS[index];
            return (
              <Reveal key={card.title} delay={index * 80}>
                <article className="card-dark h-full p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/10 sm:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <span className="icon-tile-dark">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-[1rem] font-semibold text-[#F6C177]">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-[1.22rem] font-semibold leading-snug text-white">
                    {card.title}
                  </h3>
                  <p className="muted-on-dark mt-2 text-[0.96rem] leading-relaxed">{card.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
