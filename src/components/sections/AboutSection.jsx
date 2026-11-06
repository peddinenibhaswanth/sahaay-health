import { Eye, Heart, HeartHandshake, MapPin, MessageCircle, Sprout, Users } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { HandsIllustration } from '../illustrations/HandsIllustration';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const VALUE_ICONS = [Heart, MessageCircle, Users];

export function AboutSection() {
  const { copy } = useLanguage();
  const about = copy.about;

  return (
    <section id="about" aria-labelledby="about-title" className="section bg-white">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              id="about-title"
              eyebrow={about.eyebrow}
              title={about.title}
            />

            <p className="mt-6 font-display text-[1.3rem] italic leading-relaxed text-brand-800 sm:text-[1.4rem]">
              {about.lead}
            </p>

            <div className="mt-6 space-y-4 text-[1rem] leading-relaxed muted">
              <p>{about.story1}</p>
              <p>{about.story2}</p>
            </div>

            <blockquote className="mt-8 border-l-2 border-brand-300 pl-5 font-display text-[1.25rem] leading-snug text-brand-900">
              {about.pullQuote}
            </blockquote>
          </Reveal>

          <Reveal delay={100}>
            <div className="card-warm p-5 sm:p-7">
              <HandsIllustration className="mx-auto max-w-[21rem]" />

              <div className="mt-4 flex items-start gap-3 rounded-2xl bg-white/75 p-4">
                <span className="icon-tile h-10 w-10 rounded-xl">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[0.78rem] font-bold uppercase tracking-[0.12em] text-brand-700">
                    {about.focusLabel}
                  </p>
                  <p className="mt-1 text-[0.92rem] leading-snug text-ink">{about.focus}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal>
            <article className="card h-full p-6 sm:p-7">
              <span className="icon-tile">
                <HeartHandshake className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-[1.35rem] font-semibold text-brand-950">
                {about.missionTitle}
              </h3>
              <p className="mt-2 text-[0.98rem] leading-relaxed muted">{about.mission}</p>
            </article>
          </Reveal>

          <Reveal delay={80}>
            <article className="card h-full p-6 sm:p-7">
              <span className="icon-tile-blue">
                <Eye className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-[1.35rem] font-semibold text-brand-950">
                {about.visionTitle}
              </h3>
              <p className="mt-2 text-[0.98rem] leading-relaxed muted">{about.vision}</p>
            </article>
          </Reveal>
        </div>

        <div className="mt-5">
          <h3 className="font-display text-[1.35rem] font-semibold text-brand-950">
            {about.valuesTitle}
          </h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {about.values.map((value, index) => {
              const Icon = VALUE_ICONS[index];
              return (
                <Reveal key={value.title} delay={index * 70}>
                  <article className="card h-full p-5 sm:p-6">
                    <span className="icon-tile-sand h-11 w-11 rounded-xl">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h4 className="mt-4 font-display text-[1.12rem] font-semibold text-brand-950">
                      {value.title}
                    </h4>
                    <p className="mt-1.5 text-[0.94rem] leading-relaxed muted">{value.body}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="mt-8">
          <div className="card-warm flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:p-7">
            <span className="icon-tile-sand">
              <Sprout className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-display text-[1.15rem] font-semibold text-brand-950">
                {about.stageLabel}
              </h3>
              <p className="mt-1.5 max-w-4xl text-[0.95rem] leading-relaxed muted">
                {about.stage}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
