import { useCallback, useEffect, useRef, useState } from 'react';
import { AccessibilityContext } from './contexts';

const TEXT_SIZES = ['sm', 'md', 'lg', 'xl'];
const DEFAULT_TEXT_SIZE = 'md';
const TEXT_SIZE_KEY = 'sahaay.textSize';
const CONTRAST_KEY = 'sahaay.highContrast';

function readTextSize() {
  try {
    const stored = window.localStorage.getItem(TEXT_SIZE_KEY);
    if (TEXT_SIZES.includes(stored)) {
      return stored;
    }
  } catch {
    // Ignore storage errors; defaults below are still usable.
  }

  return DEFAULT_TEXT_SIZE;
}

function readHighContrast() {
  try {
    return window.localStorage.getItem(CONTRAST_KEY) === 'true';
  } catch {
    return false;
  }
}

export function AccessibilityProvider({ children }) {
  const [textSize, setTextSize] = useState(readTextSize);
  const [highContrast, setHighContrast] = useState(readHighContrast);
  const [panelOpen, setPanelOpen] = useState(false);
  const panelReturnFocusRef = useRef(null);

  useEffect(() => {
    document.documentElement.dataset.textSize = textSize;
    try {
      window.localStorage.setItem(TEXT_SIZE_KEY, textSize);
    } catch {
      // Ignore storage errors.
    }
  }, [textSize]);

  useEffect(() => {
    document.documentElement.dataset.contrast = highContrast ? 'high' : 'normal';
    try {
      window.localStorage.setItem(CONTRAST_KEY, String(highContrast));
    } catch {
      // Ignore storage errors.
    }
  }, [highContrast]);

  const increase = () => {
    setTextSize((current) => {
      const index = TEXT_SIZES.indexOf(current);
      return TEXT_SIZES[Math.min(index + 1, TEXT_SIZES.length - 1)];
    });
  };

  const decrease = () => {
    setTextSize((current) => {
      const index = TEXT_SIZES.indexOf(current);
      return TEXT_SIZES[Math.max(index - 1, 0)];
    });
  };

  const reset = () => setTextSize(DEFAULT_TEXT_SIZE);
  const toggleContrast = () => setHighContrast((current) => !current);
  const openPanel = useCallback((returnFocus) => {
    panelReturnFocusRef.current = returnFocus ?? null;
    setPanelOpen(true);
  }, []);
  const closePanel = useCallback(() => setPanelOpen(false), []);
  const resetAll = () => {
    setTextSize(DEFAULT_TEXT_SIZE);
    setHighContrast(false);
  };

  const value = {
    textSize,
    textSizeIndex: TEXT_SIZES.indexOf(textSize),
    canIncrease: textSize !== TEXT_SIZES[TEXT_SIZES.length - 1],
    canDecrease: textSize !== TEXT_SIZES[0],
    highContrast,
    increase,
    decrease,
    reset,
    toggleContrast,
    resetAll,
    panelOpen,
    openPanel,
    closePanel,
    panelReturnFocusRef,
  };

  return <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>;
}
