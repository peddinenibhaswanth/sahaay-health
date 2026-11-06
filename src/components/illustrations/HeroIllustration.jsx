import { Languages, Video, Volume2 } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';

export function HeroIllustration() {
  const { copy } = useLanguage();

  return (
    <div className="relative mx-auto w-full max-w-[35rem]">
      <svg
        viewBox="0 0 620 640"
        role="img"
        aria-label={copy.hero.illustrationAlt}
        className="h-auto w-full"
      >
        <title>{copy.hero.illustrationAlt}</title>

        <defs>
          <linearGradient id="hero-saree" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#128177" />
            <stop offset="100%" stopColor="#0A5A54" />
          </linearGradient>
          <linearGradient id="hero-kurta" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#CFE3F1" />
            <stop offset="100%" stopColor="#B4D2E7" />
          </linearGradient>
          <linearGradient id="hero-phone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FBFDFB" />
            <stop offset="100%" stopColor="#EFF7F3" />
          </linearGradient>
        </defs>

        {/* Background composition */}
        <path
          d="M64 330C50 198 150 88 305 76c156-12 264 86 252 220-8 108 26 198-84 274-110 76-268 44-336-46C74 444 78 428 64 330Z"
          fill="#DCEDE6"
        />
        <circle cx="486" cy="146" r="92" fill="#F3E8D8" opacity="0.92" />
        <circle cx="126" cy="398" r="74" fill="#F6C177" opacity="0.16" />
        <path
          d="M452 88c23 18 41 42 52 70"
          stroke="#B48A5D"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="2 9"
          fill="none"
          opacity="0.85"
        />
        <circle cx="112" cy="146" r="6" fill="#C77A3A" opacity="0.55" />
        <circle cx="526" cy="284" r="7" fill="#0F766E" opacity="0.25" />
        <path
          d="M500 100l3.2 8.2 8.2 3.2-8.2 3.2-3.2 8.2-3.2-8.2-8.2-3.2 8.2-3.2 3.2-8.2Z"
          fill="#F6C177"
          opacity="0.9"
        />
        <ellipse cx="326" cy="606" rx="214" ry="22" fill="#B9DAD2" opacity="0.55" />

        {/* Plant */}
        <g>
          <ellipse cx="118" cy="598" rx="54" ry="12" fill="#0B4F4A" opacity="0.08" />
          <path
            d="M120 512v-72"
            stroke="#0F766E"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <path d="M120 468c-26-3-42-19-44-45 26 4 42 19 44 45Z" fill="#52A196" />
          <path d="M120 486c23-4 37-19 38-43-23 4-37 18-38 43Z" fill="#8BC2B6" />
          <path d="M120 505c-21-2-34-14-37-35 21 3 34 14 37 35Z" fill="#2C837A" />
          <path
            d="M96 512h48l-7 76c-.5 6-5 10-11 10h-12c-6 0-10.5-4-11-10l-7-76Z"
            fill="#C77A3A"
          />
          <path d="M94 512h52" stroke="#A9692F" strokeWidth="5" strokeLinecap="round" />
        </g>

        {/* Chair */}
        <rect x="346" y="316" width="218" height="286" rx="100" fill="#EFDFC7" />
        <rect x="362" y="338" width="186" height="252" rx="84" fill="#F8F0E1" />

        {/* Caregiver */}
        <g>
          <circle cx="252" cy="240" r="51" fill="#2A211D" />
          <circle cx="292" cy="194" r="19" fill="#2A211D" />
          <ellipse cx="252" cy="251" rx="40" ry="44" fill="#8C5A3C" />
          <ellipse cx="212" cy="255" rx="8" ry="11" fill="#7C4E34" />
          <path
            d="M212 238c4-27 20-41 41-41s36 14 40 41c-12-13-25-19-40-19s-29 6-41 19Z"
            fill="#2A211D"
          />
          <path d="M236 224c6-3 12-4 17-3" stroke="#1F1815" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M262 221c6-1 12 0 17 3" stroke="#1F1815" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M235 244c4-3 9-3 13 0" stroke="#2A211D" strokeWidth="2.4" strokeLinecap="round" fill="none" />
          <path d="M258 244c4-3 9-3 13 0" stroke="#2A211D" strokeWidth="2.4" strokeLinecap="round" fill="none" />
          <path d="M253 249c1 6 0 9-3 11" stroke="#6E422D" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path d="M244 269c6 5 14 5 20 0" stroke="#5E3423" strokeWidth="2.8" strokeLinecap="round" fill="none" />
          <circle cx="252" cy="232" r="2.4" fill="#B45309" />
          <circle cx="212" cy="270" r="5" fill="#D9A441" />
          <circle cx="212" cy="270" r="2.4" fill="#8A5A20" />

          <path d="M238 310h34v36h-34z" fill="#7C4E34" />
          <path
            d="M152 640c0-88 10-150 32-180 17-23 39-34 74-34s57 11 74 34c22 30 32 92 32 180H152Z"
            fill="url(#hero-kurta)"
          />
          <path
            d="M236 326c7 24 15 33 20 33s13-9 20-33c-7-5-13-8-20-8s-13 3-20 8Z"
            fill="#F8F0E1"
          />
          <path
            d="M203 352c-6 40-14 92-10 140 2 22 7 43 14 60"
            stroke="#E4F0F8"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
            opacity="0.7"
          />
          <path
            d="M320 446c12 26 11 54-2 76"
            stroke="#A9C8DE"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* Elder */}
        <g>
          <circle cx="418" cy="256" r="54" fill="#D4D1C9" />
          <circle cx="466" cy="210" r="22" fill="#D4D1C9" />
          <ellipse cx="418" cy="270" rx="42" ry="45" fill="#B5795A" />
          <ellipse cx="376" cy="276" rx="9" ry="12" fill="#A56A4B" />
          <ellipse cx="460" cy="276" rx="9" ry="12" fill="#A56A4B" />
          <path
            d="M374 252c3-31 20-47 44-47s41 16 44 47c-12-15-26-22-44-22s-32 7-44 22Z"
            fill="#D4D1C9"
          />
          <path d="M380 228c6-12 17-20 31-22" stroke="#E7E5DF" strokeWidth="4" strokeLinecap="round" fill="none" />

          {/* Glasses */}
          <g>
            <circle cx="401" cy="267" r="15" fill="#F8FBF9" opacity="0.35" />
            <circle cx="437" cy="267" r="15" fill="#F8FBF9" opacity="0.35" />
            <circle cx="401" cy="267" r="15" fill="none" stroke="#33423E" strokeWidth="3" />
            <circle cx="437" cy="267" r="15" fill="none" stroke="#33423E" strokeWidth="3" />
            <path d="M416 267h6" stroke="#33423E" strokeWidth="3" />
            <path d="M386 262l-11-5" stroke="#33423E" strokeWidth="3" strokeLinecap="round" />
            <path d="M452 262l11-5" stroke="#33423E" strokeWidth="3" strokeLinecap="round" />
            <path d="M394 267c5-4 10-4 14 0" stroke="#33423E" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            <path d="M430 267c4-4 9-4 14 0" stroke="#33423E" strokeWidth="2.4" strokeLinecap="round" fill="none" />
          </g>

          <path d="M390 249c5-3 10-3 15 0" stroke="#8C8A84" strokeWidth="2.6" strokeLinecap="round" fill="none" />
          <path d="M431 249c5-3 10-3 15 0" stroke="#8C8A84" strokeWidth="2.6" strokeLinecap="round" fill="none" />
          <path d="M417 275c2 7 1 10-3 12" stroke="#96593F" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <path d="M403 293c9 8 22 8 31 0" stroke="#7A3E2F" strokeWidth="2.8" strokeLinecap="round" fill="none" />
          <circle cx="388" cy="284" r="7" fill="#D98A72" opacity="0.4" />
          <circle cx="448" cy="284" r="7" fill="#D98A72" opacity="0.4" />

          <circle cx="375" cy="294" r="6" fill="none" stroke="#D9A441" strokeWidth="2.5" />
          <circle cx="461" cy="294" r="6" fill="none" stroke="#D9A441" strokeWidth="2.5" />
          <g fill="#FAF7F0">
            <circle cx="476" cy="196" r="6" />
            <circle cx="487" cy="203" r="5" />
            <circle cx="470" cy="207" r="5" />
          </g>
          <circle cx="479" cy="202" r="2.5" fill="#D9A441" />

          <path d="M398 324h38v38h-38z" fill="#A56A4B" />
          <path
            d="M318 640c0-106 10-178 31-209 18-26 41-39 70-39s52 13 70 39c21 31 31 103 31 209H318Z"
            fill="url(#hero-saree)"
          />
          <path
            d="M382 360c4 27 16 41 36 41s32-14 36-41c-11-9-23-14-36-14s-25 5-36 14Z"
            fill="#F8F0E1"
          />
          <path
            d="M381 358c10 6 23 9 37 9s27-3 37-9"
            stroke="#D9A441"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />

          <path
            d="M352 388c-14 26-20 68-18 112"
            stroke="#2C837A"
            strokeWidth="18"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M487 388c15 26 21 68 19 112"
            stroke="#2C837A"
            strokeWidth="18"
            strokeLinecap="round"
            fill="none"
          />

          <path d="M399 322c8 10 30 10 38 0" stroke="#D9A441" strokeWidth="3" fill="none" />
          <circle cx="418" cy="333" r="4" fill="#D9A441" />

          {/* Arms */}
          <path
            d="M354 408c-26 18-34 46-24 66 7 14 20 20 33 15"
            stroke="#B5795A"
            strokeWidth="23"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M484 408c26 18 34 46 24 66-7 14-20 20-33 15"
            stroke="#B5795A"
            strokeWidth="23"
            strokeLinecap="round"
            fill="none"
          />
          <path d="M335 476c2 5 8 8 14 6" stroke="#D9A441" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M501 476c-2 5-8 8-14 6" stroke="#D9A441" strokeWidth="3" strokeLinecap="round" fill="none" />

          {/* Phone */}
          <g transform="rotate(-6 414 502)">
            <rect x="354" y="422" width="120" height="168" rx="20" fill="#22352F" />
            <rect x="361" y="429" width="106" height="154" rx="14" fill="url(#hero-phone)" />
            <circle cx="378" cy="447" r="10" fill="#DCEDE6" />
            <path d="M373 453c2-6 8-8 10-3" stroke="#0B5F5A" strokeWidth="2" strokeLinecap="round" fill="none" />
            <rect x="395" y="441" width="43" height="5" rx="2.5" fill="#C7DCD6" />
            <rect x="395" y="450" width="29" height="4" rx="2" fill="#DCE9E5" />
            <rect x="369" y="464" width="90" height="54" rx="10" fill="#DFF0E9" />
            <circle cx="414" cy="483" r="8" fill="#2C837A" />
            <path d="M400 502c2-8 8-12 14-12s12 4 14 12" fill="#2C837A" />
            <rect x="369" y="528" width="90" height="40" rx="10" fill="#F3F8F5" />
            <circle cx="407" cy="548" r="13" fill="#0F766E" />
            <path d="M401 543c0 5 4 9 9 10l2-3-4-3-2 1c-1-1-2-3-2-4l2-1-1-4-3 0c-1 0-1 1-1 2Z" fill="#FFF" />
            <rect x="391" y="554" width="32" height="3.5" rx="1.75" fill="#C7DCD6" />
          </g>

          {/* Hands */}
          <g>
            <ellipse cx="347" cy="493" rx="20" ry="15" transform="rotate(-18 347 493)" fill="#B5795A" />
            <path d="M332 486c-5-1-8 3-7 7" stroke="#A56A4B" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M340 498c1 4 5 6 9 5" stroke="#96593F" strokeWidth="2.4" strokeLinecap="round" fill="none" />

            <ellipse cx="487" cy="481" rx="20" ry="15" transform="rotate(18 487 481)" fill="#B5795A" />
            <path d="M502 474c5-1 8 3 7 7" stroke="#A56A4B" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M494 486c-1 4-5 6-9 5" stroke="#96593F" strokeWidth="2.4" strokeLinecap="round" fill="none" />
          </g>

          <path
            d="M383 399c4 30 15 47 35 47s31-17 35-47"
            stroke="#0B4F4A"
            strokeWidth="2"
            strokeDasharray="3 6"
            fill="none"
            opacity="0.35"
          />
        </g>

        {/* Caregiver arm resting on the elder's shoulder */}
        <g>
          <path
            d="M298 404c22 4 44 4 65-3"
            stroke="#BFD8EA"
            strokeWidth="27"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M352 395c14-4 27-12 37-22"
            stroke="#8C5A3C"
            strokeWidth="21"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse cx="392" cy="368" rx="16" ry="13" transform="rotate(-28 392 368)" fill="#8C5A3C" />
          <path d="M395 361c5-2 9 0 10 4" stroke="#7C4E34" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M371 380c4 3 9 3 12-1" stroke="#D9A441" strokeWidth="2.6" strokeLinecap="round" fill="none" />
        </g>
      </svg>

      <div className="absolute -left-2 top-4 sm:left-0 sm:top-8">
        <div className="flex items-center gap-2 rounded-full border border-line bg-white/95 px-3.5 py-2 shadow-soft backdrop-blur">
          <Languages className="h-4 w-4 shrink-0 text-brand-700" aria-hidden="true" />
          <span className="text-[0.78rem] font-semibold text-brand-900">{copy.hero.languageCard}</span>
        </div>
      </div>

      <div className="absolute right-0 top-14 w-[11.5rem] sm:top-20 sm:w-[13.5rem]">
        <div className="rounded-2xl border border-line bg-white/95 p-3.5 shadow-lift backdrop-blur sm:p-4">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-800">
              <Video className="h-4 w-4" aria-hidden="true" />
            </span>
            <p className="text-[0.68rem] font-bold uppercase leading-tight tracking-[0.1em] text-brand-700">
              {copy.hero.stepCardLabel}
            </p>
          </div>
          <p className="mt-2 text-[0.92rem] font-bold leading-snug text-ink sm:text-[0.98rem]">
            {copy.hero.stepCardTitle}
          </p>
          <p className="mt-1 text-[0.8rem] leading-snug text-muted">{copy.hero.stepCardBody}</p>
        </div>
      </div>

      <div className="absolute -left-1 bottom-8 sm:bottom-12 sm:left-2">
        <div className="flex items-center gap-2.5 rounded-2xl border border-line bg-white/95 px-3.5 py-2.5 shadow-soft backdrop-blur">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sand-100 text-sand-600">
            <Volume2 className="h-4 w-4" aria-hidden="true" />
          </span>
          <div>
            <p className="text-[0.8rem] font-bold leading-none text-ink">
              {copy.hero.voiceCardLabel}
            </p>
            <span className="mt-1.5 flex items-end gap-0.5" aria-hidden="true">
              {[6, 10, 14, 9, 12, 7].map((height, index) => (
                <span
                  key={index}
                  style={{ height: `${height}px` }}
                  className="w-1 rounded-full bg-brand-500"
                />
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
