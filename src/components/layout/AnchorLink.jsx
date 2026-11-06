import { useLocation, useNavigate } from 'react-router-dom';
import { scrollBehavior } from '../../lib/utils';

export function AnchorLink({ id, children, onNavigate, onClick, ...rest }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = (event) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    onNavigate?.();

    if (pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
        window.history.replaceState(null, '', `/#${id}`);
      }
      return;
    }

    navigate(`/#${id}`);
  };

  return (
    <a href={`/#${id}`} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
