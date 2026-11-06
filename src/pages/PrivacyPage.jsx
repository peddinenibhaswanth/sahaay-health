import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useLanguage } from '../hooks/useLanguage';

export function PrivacyPage() {
  const { copy } = useLanguage();
  const privacy = copy.privacy;
  useDocumentTitle(privacy.metaTitle);

  return (
    <div className="bg-cream">
      <div className="section container-page">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg text-[0.92rem] font-semibold text-brand-800"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>{copy.common.backHome}</span>
          </Link>

          <p className="eyebrow mt-8">{privacy.eyebrow}</p>
          <h1 className="display-2 mt-4 text-brand-950">{privacy.title}</h1>
          <p className="mt-4 text-[0.92rem] font-semibold text-muted">{privacy.updated}</p>
          <p className="body-lg mt-5 leading-relaxed muted">{privacy.intro}</p>

          <div className="card mt-9 divide-y divide-line p-6 sm:p-9">
            {privacy.sections.map((section) => (
              <section key={section.title} className="py-6 first:pt-0 last:pb-0">
                <h2 className="font-display text-[1.35rem] font-semibold leading-snug text-brand-950">
                  {section.title}
                </h2>
                <p className="mt-2.5 text-[0.98rem] leading-relaxed muted">{section.body}</p>
              </section>
            ))}
          </div>

          <Link to="/" className="btn btn-secondary mt-8">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>{privacy.back}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
