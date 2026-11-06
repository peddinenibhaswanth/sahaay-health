import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Contrast,
  Eye,
  Keyboard,
  Languages,
  MousePointerClick,
  Type,
  Volume2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnchorLink } from '../components/layout/AnchorLink';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useLanguage } from '../hooks/useLanguage';

const FEATURE_ICONS = [Type, Contrast, Keyboard, BookOpen, MousePointerClick, Languages, Volume2];

export function AccessibilityPage() {
  const { copy } = useLanguage();
  const page = copy.accessibilityPage;
  useDocumentTitle(page.metaTitle);

  return (
    <div className="bg-cream">
      <div className="section container-page">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg text-[0.92rem] font-semibold text-brand-800"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>{copy.common.backHome}</span>
          </Link>

          <p className="eyebrow mt-8">{page.eyebrow}</p>
          <h1 className="display-2 mt-4 text-brand-950">{page.title}</h1>
          <p className="body-lg mt-5 max-w-3xl leading-relaxed muted">{page.intro}</p>

          <h2 className="mt-12 font-display text-[1.55rem] font-semibold text-brand-950">
            {page.featuresTitle}
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {page.features.map((feature, index) => {
              const Icon = FEATURE_ICONS[index] ?? Eye;
              return (
                <article key={feature.title} className="card p-5 sm:p-6">
                  <span className="icon-tile h-11 w-11 rounded-xl">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-[1.12rem] font-semibold text-brand-950">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-[0.94rem] leading-relaxed muted">{feature.body}</p>
                </article>
              );
            })}
          </div>

          <div className="card-warm mt-8 p-6 sm:p-7">
            <h2 className="font-display text-[1.35rem] font-semibold text-brand-950">
              {page.limitsTitle}
            </h2>
            <ul className="mt-4 space-y-3">
              {page.limits.map((limit) => (
                <li key={limit} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sand-600"
                  />
                  <span>{limit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card mt-6 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <h2 className="font-display text-[1.3rem] font-semibold text-brand-950">
                {page.feedbackTitle}
              </h2>
              <p className="mt-1.5 max-w-xl text-[0.94rem] leading-relaxed muted">
                {page.feedbackBody}
              </p>
            </div>
            <AnchorLink id="contact" className="btn btn-primary shrink-0">
              <span>{page.cta}</span>
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </AnchorLink>
          </div>

          <Link to="/" className="btn btn-secondary mt-8">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>{page.back}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
