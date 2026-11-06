import { useLanguage } from '../../hooks/useLanguage';
import { cn } from '../../lib/utils';

export function HandsIllustration({ className }) {
  const { copy } = useLanguage();

  return (
    <svg
      viewBox="0 0 360 300"
      role="img"
      aria-label={copy.about.illustrationAlt}
      className={cn('h-auto w-full', className)}
    >
      <title>{copy.about.illustrationAlt}</title>
      <circle cx="180" cy="142" r="122" fill="#FFFFFF" opacity="0.55" />
      <circle cx="180" cy="138" r="104" fill="none" stroke="#B9DAD2" strokeWidth="1.5" strokeDasharray="2 8" />
      <circle cx="276" cy="70" r="13" fill="#F6C177" opacity="0.7" />
      <circle cx="86" cy="98" r="5" fill="#C77A3A" opacity="0.5" />

      <path
        d="M180 236v-94"
        stroke="#0F766E"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M180 172c-33-3-53-23-56-57 33 4 53 23 56 57Z" fill="#52A196" />
      <path d="M180 194c30-4 48-23 50-54-30 4-48 22-50 54Z" fill="#8BC2B6" />
      <path d="M180 216c-24-2-39-17-42-41 24 3 39 16 42 41Z" fill="#2C837A" />
      <path
        d="M180 154c14-12 18-28 9-42-14 11-18 27-9 42Z"
        fill="#B9DAD2"
        stroke="#0F766E"
        strokeWidth="2"
      />

      <path
        d="M56 186c4 39 29 65 66 68h116c37-3 62-29 66-68"
        fill="#F8F0E1"
        stroke="#0B4F4A"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M72 172c-13 24-9 46 8 57 10 7 22 4 27-7 5-12 6-28 4-43"
        fill="#F8F0E1"
        stroke="#0B4F4A"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M288 172c13 24 9 46-8 57-10 7-22 4-27-7-5-12-6-28-4-43"
        fill="#F8F0E1"
        stroke="#0B4F4A"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M99 226c20 14 48 21 81 21s61-7 81-21"
        stroke="#B9DAD2"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M101 198c6-7 13-10 21-10" stroke="#B9DAD2" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M259 198c-6-7-13-10-21-10" stroke="#B9DAD2" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}
