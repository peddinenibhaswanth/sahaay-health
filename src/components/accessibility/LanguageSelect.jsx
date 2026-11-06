import { Globe2 } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { cn } from '../../lib/utils';

export function LanguageSelect({ id, className, showLabel = false }) {
  const { language, setLanguage, copy } = useLanguage();

  return (
    <div className={cn('flex min-w-0 items-center gap-2', className)}>
      <Globe2 className="h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
      <div className={cn('min-w-0', showLabel ? 'block flex-1' : 'contents')}>
        <label
          htmlFor={id}
          className={showLabel ? 'mb-1.5 block text-[0.95rem] font-semibold text-ink' : 'sr-only'}
        >
          {copy.nav.language}
        </label>
        <select
          id={id}
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
          className="language-select min-h-11 max-w-full rounded-xl border-2 border-line bg-white px-2.5 py-1.5 text-[0.95rem] font-semibold text-ink focus:border-brand-600 focus:outline-none"
        >
          <option value="en">{copy.languages.en}</option>
          <option value="te">{copy.languages.te}</option>
        </select>
      </div>
    </div>
  );
}
