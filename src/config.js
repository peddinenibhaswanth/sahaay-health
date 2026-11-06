function readPublicEnv(value) {
  return typeof value === 'string' ? value.trim() : '';
}

export const CONTACT_EMAIL = readPublicEnv(import.meta.env.VITE_CONTACT_EMAIL);
export const CONTACT_PHONE = readPublicEnv(import.meta.env.VITE_CONTACT_PHONE);
