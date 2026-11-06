import { cn } from '../../lib/utils';

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'light',
  id,
  className,
  introClassName,
}) {
  const centered = align === 'center';

  return (
    <div className={cn('max-w-3xl', centered && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <p
          className={cn(
            tone === 'dark' ? 'eyebrow-dark' : tone === 'sand' ? 'eyebrow-sand' : 'eyebrow',
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn('display-2 mt-5', tone === 'dark' ? 'text-white' : 'text-brand-950')}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            'body-lg mt-5 leading-relaxed',
            tone === 'dark' ? 'muted-on-dark' : 'muted',
            centered && 'mx-auto max-w-2xl',
            introClassName,
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
