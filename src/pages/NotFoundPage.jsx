import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useLanguage } from '../hooks/useLanguage';

export function NotFoundPage() {
  const { copy } = useLanguage();
  useDocumentTitle(copy.notFound.metaTitle);

  return (
    <div className="section bg-cream">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-[4rem] font-semibold leading-none text-brand-200">404</p>
          <h1 className="display-2 mt-4 text-brand-950">{copy.notFound.title}</h1>
          <p className="body-lg mt-4 leading-relaxed muted">{copy.notFound.body}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/" className="btn btn-primary">
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              <span>{copy.notFound.cta}</span>
            </Link>
            <Link to="/accessibility" className="btn btn-secondary">
              <span>{copy.footer.accessibility}</span>
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
