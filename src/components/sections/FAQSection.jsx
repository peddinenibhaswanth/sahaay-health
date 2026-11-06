import { useState } from 'react';
import { ArrowRight, CircleHelp, Minus, Plus } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { AnchorLink } from '../layout/AnchorLink';
import { Reveal } from '../ui/Reveal';
import { cn } from '../../lib/utils';
import { SectionHeading } from '../ui/SectionHeading';

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);
  const buttonId = `faq-question-${index}`;
  const panelId = `faq-answer-${index}`;

  return (
    <div className="border-b border-line last:border-b-0">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((current) => !current)}
          className="flex w-full items-center justify-between gap-4 py-5 text-left text-[1.02rem] font-semibold leading-snug text-ink"
        >
          <span>{item.question}</span>
          <span
            aria-hidden="true"
            className={cn(
              'flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition',
              open ? 'bg-brand-800 text-white' : 'bg-brand-50 text-brand-800',
            )}
          >
            {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!open}
        data-open={open}
        className="accordion-panel"
      >
        <div>
          <p className="pb-6 pr-4 text-[0.96rem] leading-relaxed muted sm:pr-10">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const { copy } = useLanguage();
  const faq = copy.faq;

  return (
    <section id="faq" aria-labelledby="faq-title" className="section section-blue">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading
                id="faq-title"
                eyebrow={faq.eyebrow}
                title={faq.title}
                intro={faq.intro}
              />
            </Reveal>

            <Reveal delay={100} className="mt-7">
              <div className="card flex items-start gap-4 p-5">
                <span className="icon-tile h-11 w-11 rounded-xl">
                  <CircleHelp className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[0.92rem] font-bold leading-relaxed text-ink">
                    {copy.contact.formTitle}
                  </p>
                  <AnchorLink
                    id="contact"
                    className="link mt-2 inline-flex items-center gap-1.5 text-[0.92rem]"
                  >
                    <span>{copy.nav.contact}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </AnchorLink>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <div className="card overflow-hidden px-5 sm:px-7">
              {faq.items.map((item, index) => (
                <FAQItem key={item.question} item={item} index={index} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
