import { useEffect } from 'react';

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function useFocusTrap(active, containerRef, onClose, returnFocusRef) {
  useEffect(() => {
    if (!active) return undefined;

    const container = containerRef.current;
    const previouslyFocused = document.activeElement;
    const explicitReturnFocus = returnFocusRef?.current ?? null;

    const getFocusable = () =>
      Array.from(container?.querySelectorAll(FOCUSABLE_SELECTOR) ?? []).filter(
        (element) => element.offsetParent !== null || element === document.activeElement,
      );

    const focusTimer = window.setTimeout(() => {
      const focusable = getFocusable();
      if (focusable.length > 0) {
        focusable[0].focus();
      } else {
        container?.focus();
      }
    }, 40);

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = getFocusable();
      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && (document.activeElement === first || document.activeElement === container)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      const returnTarget = explicitReturnFocus ?? previouslyFocused;
      if (returnTarget instanceof HTMLElement && returnTarget.isConnected) {
        returnTarget.focus();
      }
    };
  }, [active, containerRef, onClose, returnFocusRef]);
}
