import { AlertCircle, Info, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONE } from '../../config';
import { useLanguage } from '../../hooks/useLanguage';
import { ContactForm } from './ContactForm';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function ContactSection() {
  const { copy } = useLanguage();
  const contact = copy.contact;

  return (
    <section id="contact" aria-labelledby="contact-title" className="section section-sand">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="contact-title"
            eyebrow={contact.eyebrow}
            title={contact.title}
            intro={contact.intro}
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-8">
          <div className="order-2 space-y-5 lg:order-1">
            <Reveal>
              <div className="card p-6 sm:p-7">
                <h3 className="font-display text-[1.3rem] font-semibold text-brand-950">
                  {contact.contactInfoTitle}
                </h3>

                <address className="mt-4 space-y-4 text-[0.95rem] not-italic">
                  <p className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
                    <span>
                      <span className="block text-[0.78rem] font-bold uppercase tracking-[0.1em] text-brand-700">
                        {contact.basedIn}
                      </span>
                      <span className="mt-0.5 block leading-relaxed text-ink">
                        {contact.location}
                      </span>
                    </span>
                  </p>

                  {CONTACT_EMAIL ? (
                    <p className="flex items-start gap-3">
                      <Mail className="mt-1 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
                      <span>
                        <span className="block text-[0.78rem] font-bold uppercase tracking-[0.1em] text-brand-700">
                          {contact.emailLabel}
                        </span>
                        <a href={`mailto:${CONTACT_EMAIL}`} className="link mt-0.5 inline-block break-all">
                          {CONTACT_EMAIL}
                        </a>
                      </span>
                    </p>
                  ) : null}

                  {CONTACT_PHONE ? (
                    <p className="flex items-start gap-3">
                      <Phone className="mt-1 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
                      <span>
                        <span className="block text-[0.78rem] font-bold uppercase tracking-[0.1em] text-brand-700">
                          {contact.phoneLabel}
                        </span>
                        <a
                          href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`}
                          className="link mt-0.5 inline-block"
                        >
                          {CONTACT_PHONE}
                        </a>
                      </span>
                    </p>
                  ) : null}
                </address>

                {!CONTACT_EMAIL && !CONTACT_PHONE ? (
                  <p className="mt-4 flex items-start gap-2 rounded-xl bg-brand-50 p-3 text-[0.9rem] leading-relaxed text-ink">
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-700" aria-hidden="true" />
                    <span>{contact.detailsPending}</span>
                  </p>
                ) : null}

                <div className="mt-5 border-t border-line pt-5">
                  <h4 className="text-[0.95rem] font-bold text-ink">{contact.enquiriesTitle}</h4>
                  <p className="mt-1.5 text-[0.92rem] leading-relaxed muted">
                    {contact.enquiriesBody}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="card-warm flex items-start gap-3 p-5 sm:p-6">
                <span className="icon-tile-sand h-10 w-10 rounded-xl">
                  <AlertCircle className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-[1.08rem] font-semibold text-brand-950">
                    {contact.emergencyTitle}
                  </h3>
                  <p className="mt-1.5 text-[0.9rem] leading-relaxed muted">
                    {contact.emergencyBody}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={60} className="order-1 lg:order-2">
            <div className="card p-5 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
