import { useId, useRef } from 'react';
import {
  Accessibility,
  CheckCircle2,
  Contrast,
  Keyboard,
  Languages,
  Minus,
  Plus,
  RotateCcw,
  Type,
  Volume2,
  X,
} from 'lucide-react';
import { useAccessibility } from '../../hooks/useAccessibility';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { useLanguage } from '../../hooks/useLanguage';
import { cn } from '../../lib/utils';
import { LanguageSelect } from './LanguageSelect';
import { VoiceControls } from '../ui/VoiceControls';

export function AccessibilityWidget() {
  const { copy } = useLanguage();
  const {
    textSize,
    textSizeIndex,
    canDecrease,
    canIncrease,
    highContrast,
    decrease,
    increase,
    reset,
    toggleContrast,
    resetAll,
    panelOpen,
    openPanel,
    closePanel,
    panelReturnFocusRef,
  } = useAccessibility();
  const panelRef = useRef(null);
  const panelId = useId();
  const titleId = useId();

  useFocusTrap(panelOpen, panelRef, closePanel, panelReturnFocusRef);

  return (
    <>
      <button
        type="button"
        onClick={(event) => openPanel(event.currentTarget)}
        className="fixed bottom-4 right-4 z-40 hidden min-h-12 max-w-[calc(100vw-2rem)] items-center gap-2 rounded-full border-2 border-brand-200 bg-white px-4 py-2 text-[0.9rem] font-bold text-brand-900 shadow-lift transition hover:border-brand-500 hover:bg-brand-50 xl:bottom-5 xl:right-5 xl:inline-flex"
        aria-haspopup="dialog"
        aria-expanded={panelOpen}
        aria-controls={panelOpen ? panelId : undefined}
      >
        <Accessibility className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span>{copy.accessibility.trigger}</span>
      </button>

      {panelOpen ? (
        <div className="fixed inset-0 z-50 flex justify-end">
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            onClick={closePanel}
            className="absolute inset-0 cursor-default bg-brand-950/50 backdrop-blur-[2px]"
          />

          <div
            ref={panelRef}
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            className="relative z-10 h-[100dvh] w-full max-w-[29rem] overflow-y-auto bg-cream p-5 shadow-2xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2
                  id={titleId}
                  className="font-display text-[1.75rem] font-semibold leading-tight text-brand-950"
                >
                  {copy.accessibility.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={closePanel}
                className="btn btn-quiet min-h-12 shrink-0 px-4"
              >
                <X className="h-5 w-5" aria-hidden="true" />
                <span>{copy.common.close}</span>
              </button>
            </div>

            <p className="mt-3 text-[0.98rem] leading-relaxed muted">
              {copy.accessibility.intro}
            </p>

            <div className="mt-7 space-y-8">
              <section aria-labelledby={`${titleId}-text-size`}>
                <h3
                  id={`${titleId}-text-size`}
                  className="flex items-center gap-2 text-[1.05rem] font-bold text-ink"
                >
                  <Type className="h-5 w-5 text-brand-700" aria-hidden="true" />
                  {copy.accessibility.textSizeTitle}
                </h3>
                <p className="mt-1.5 text-[0.92rem] leading-relaxed muted">
                  {copy.accessibility.textSizeHint}
                </p>

                <div className="card mt-3 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[0.92rem] font-semibold text-muted">
                      {copy.accessibility.sizeNames[textSize]}
                    </span>
                    <span className="flex items-center gap-1.5" aria-hidden="true">
                      {[0, 1, 2, 3].map((index) => (
                        <span
                          key={index}
                          className={cn(
                            'h-1.5 rounded-full',
                            index <= textSizeIndex ? 'bg-brand-700' : 'bg-line',
                            index === 0
                              ? 'w-4'
                              : index === 1
                                ? 'w-5'
                                : index === 2
                                  ? 'w-6'
                                  : 'w-7',
                          )}
                        />
                      ))}
                    </span>
                  </div>

                  <div className="mt-4 grid gap-2">
                    <button
                      type="button"
                      onClick={increase}
                      disabled={!canIncrease}
                      className="btn btn-quiet min-h-12 justify-start disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <Plus className="h-5 w-5" aria-hidden="true" />
                      <span>{copy.accessibility.increase}</span>
                    </button>
                    <button
                      type="button"
                      onClick={decrease}
                      disabled={!canDecrease}
                      className="btn btn-quiet min-h-12 justify-start disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <Minus className="h-5 w-5" aria-hidden="true" />
                      <span>{copy.accessibility.decrease}</span>
                    </button>
                    <button
                      type="button"
                      onClick={reset}
                      className="btn btn-quiet min-h-12 justify-start"
                    >
                      <RotateCcw className="h-5 w-5" aria-hidden="true" />
                      <span>{copy.accessibility.reset}</span>
                    </button>
                  </div>
                </div>
              </section>

              <section aria-labelledby={`${titleId}-contrast`}>
                <h3
                  id={`${titleId}-contrast`}
                  className="flex items-center gap-2 text-[1.05rem] font-bold text-ink"
                >
                  <Contrast className="h-5 w-5 text-brand-700" aria-hidden="true" />
                  {copy.accessibility.contrastTitle}
                </h3>
                <p className="mt-1.5 text-[0.92rem] leading-relaxed muted">
                  {copy.accessibility.contrastHint}
                </p>

                <button
                  type="button"
                  role="switch"
                  aria-checked={highContrast}
                  onClick={toggleContrast}
                  className="card mt-3 flex w-full items-center justify-between gap-4 p-4 text-left"
                >
                  <span className="min-w-0">
                    <span className="block text-[0.98rem] font-semibold text-ink">
                      {copy.accessibility.contrastTitle}
                    </span>
                    <span className="mt-1 block text-[0.9rem] leading-snug muted">
                      {highContrast
                        ? copy.accessibility.contrastOn
                        : copy.accessibility.contrastOff}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'relative h-8 w-14 shrink-0 rounded-full border-2 transition',
                      highContrast ? 'border-brand-800 bg-brand-800' : 'border-line bg-[#E6EEEA]',
                    )}
                  >
                    <span
                      className={cn(
                        'absolute top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-white shadow transition-all',
                        highContrast ? 'left-[1.55rem]' : 'left-1',
                      )}
                    />
                  </span>
                </button>
              </section>

              <section aria-labelledby={`${titleId}-language`}>
                <h3
                  id={`${titleId}-language`}
                  className="flex items-center gap-2 text-[1.05rem] font-bold text-ink"
                >
                  <Languages className="h-5 w-5 text-brand-700" aria-hidden="true" />
                  {copy.accessibility.languageTitle}
                </h3>
                <p className="mt-1.5 text-[0.92rem] leading-relaxed muted">
                  {copy.accessibility.languageHint}
                </p>
                <div className="card mt-3 p-4">
                  <LanguageSelect id="accessibility-panel-language" showLabel />
                </div>
              </section>

              <section aria-labelledby={`${titleId}-voice`}>
                <h3
                  id={`${titleId}-voice`}
                  className="flex items-center gap-2 text-[1.05rem] font-bold text-ink"
                >
                  <Volume2 className="h-5 w-5 text-brand-700" aria-hidden="true" />
                  {copy.accessibility.voiceTitle}
                </h3>
                <p className="mt-1.5 text-[0.92rem] leading-relaxed muted">
                  {copy.accessibility.voiceHint}
                </p>
                <VoiceControls
                  text={copy.accessibility.pageGuide}
                  label={copy.accessibility.readPage}
                  className="mt-3"
                />
              </section>

              <button
                type="button"
                onClick={resetAll}
                className="btn btn-secondary w-full justify-start"
              >
                <RotateCcw className="h-5 w-5" aria-hidden="true" />
                <span>{copy.accessibility.resetAll}</span>
              </button>

              <div className="card-warm p-4">
                <p className="flex items-center gap-2 text-[0.95rem] font-bold text-ink">
                  <Keyboard className="h-5 w-5 text-sand-600" aria-hidden="true" />
                  {copy.accessibility.skipTipTitle}
                </p>
                <p className="mt-1.5 text-[0.9rem] leading-relaxed muted">
                  {copy.accessibility.skipTip}
                </p>
              </div>
            </div>

            <p className="mt-8 flex items-start gap-2 text-[0.85rem] leading-relaxed muted">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{copy.accessibility.savedNote}</span>
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
