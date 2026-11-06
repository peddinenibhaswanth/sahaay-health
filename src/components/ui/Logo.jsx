import { useLanguage } from '../../hooks/useLanguage';
import { cn } from '../../lib/utils';

export function Logo({ tone = 'light', className }) {
  const { copy } = useLanguage();
  const isDark = tone === 'dark';

  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span
        className={cn(
          'logo-mark flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.95rem] shadow-sm',
          isDark ? 'bg-cream' : 'bg-brand-900',
        )}
      >
        <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden="true" focusable="false">
          <path
            d="M20 29.6c-6.3-4.7-9.7-8-9.7-12.1a4.9 4.9 0 0 1 9.7-1.6 4.9 4.9 0 0 1 9.7 1.6c0 4.1-3.4 7.4-9.7 12.1Z"
            fill={isDark ? '#0B4F4A' : '#FAF7F0'}
          />
          <path
            d="M7.5 25.5c2.6 2.7 5.2 4 7.7 4h9.6c2.5 0 5.1-1.3 7.7-4"
            fill="none"
            stroke={isDark ? '#B45309' : '#F6C177'}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="min-w-0 leading-none">
        <span
          className={cn(
            'logo-name block font-display text-[1.38rem] font-semibold tracking-[-0.02em]',
            isDark ? 'text-white' : 'text-brand-950',
          )}
        >
          {copy.brand.name}
        </span>
        <span
          className={cn(
            'brand-suffix mt-1 block text-[0.66rem] font-bold uppercase tracking-[0.28em]',
            isDark ? 'text-brand-100' : 'text-brand-700',
          )}
        >
          {copy.brand.suffix}
        </span>
      </span>
    </span>
  );
}
