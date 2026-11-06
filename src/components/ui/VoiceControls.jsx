import { Info, Pause, Play, Square, Volume2 } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useVoice } from '../../hooks/useVoice';
import { cn } from '../../lib/utils';

export function VoiceControls({
  text,
  label,
  className,
  tone = 'light',
  showUnsupported = true,
}) {
  const { copy, language } = useLanguage();
  const { supported, isActive, isPaused, activeText, speak, stop, pause, resume } = useVoice();
  const isThisReading = isActive && activeText === text;

  if (!supported) {
    if (!showUnsupported) return null;

    return (
      <p
        className={cn(
          'flex items-start gap-2 text-[0.88rem] leading-relaxed',
          tone === 'dark' ? 'muted-on-dark' : 'muted',
          className,
        )}
      >
        <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        <span>{copy.accessibility.voiceUnsupported}</span>
      </p>
    );
  }

  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      <button
        type="button"
        className={cn('btn min-h-12', tone === 'dark' ? 'btn-inverse' : 'btn-quiet')}
        onClick={() => {
          if (isThisReading) {
            stop();
          } else {
            speak(text, language);
          }
        }}
      >
        {isThisReading ? (
          <Square className="h-4 w-4 fill-current" aria-hidden="true" />
        ) : (
          <Volume2 className="h-5 w-5" aria-hidden="true" />
        )}
        <span>{isThisReading ? copy.common.stop : label}</span>
      </button>

      {isThisReading ? (
        <button
          type="button"
          className={cn('btn min-h-12', tone === 'dark' ? 'btn-inverse' : 'btn-quiet')}
          onClick={() => {
            if (isPaused) {
              resume();
            } else {
              pause();
            }
          }}
        >
          {isPaused ? (
            <Play className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Pause className="h-4 w-4" aria-hidden="true" />
          )}
          <span>{isPaused ? copy.common.resume : copy.common.pause}</span>
        </button>
      ) : null}

      <span
        className={cn(
          'text-[0.88rem] font-semibold',
          tone === 'dark' ? 'muted-on-dark' : 'muted',
        )}
        role="status"
        aria-live="polite"
      >
        {isThisReading
          ? isPaused
            ? copy.accessibility.voicePaused
            : copy.accessibility.voicePlaying
          : ''}
      </span>
    </div>
  );
}
