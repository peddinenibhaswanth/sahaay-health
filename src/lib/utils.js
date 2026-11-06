export function cn(...values) {
  return values.filter(Boolean).join(' ');
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(value) {
  return EMAIL_PATTERN.test(String(value ?? '').trim());
}

export function digitsOnly(value) {
  return String(value ?? '').replace(/\D/g, '');
}

export function prefersReducedMotion() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function scrollBehavior() {
  return prefersReducedMotion() ? 'auto' : 'smooth';
}
