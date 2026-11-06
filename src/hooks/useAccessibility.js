import { useContext } from 'react';
import { AccessibilityContext } from '../context/contexts';

export function useAccessibility() {
  const context = useContext(AccessibilityContext);

  if (!context) {
    throw new Error('useAccessibility must be used inside an AccessibilityProvider');
  }

  return context;
}
