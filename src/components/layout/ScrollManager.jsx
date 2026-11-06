import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollBehavior } from '../../lib/utils';

export function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const timer = window.setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
        }
      }, 60);

      return () => window.clearTimeout(timer);
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    return undefined;
  }, [pathname, hash, key]);

  return null;
}
