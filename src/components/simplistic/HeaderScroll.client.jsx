import {useState, useEffect, useRef} from 'react';

export default function HeaderScroll({alwaysBlack, children}) {
  let listener = null;
  const [scrollState, _setScrollState] = useState('top');
  const scrollStateRef = useRef(scrollState);
  const setScrollState = (state) => {
    scrollStateRef.current = state;
    _setScrollState(state);
  };

  const scrollListener = () => {
    var scrolled = document.scrollingElement.scrollTop;
    if (scrolled >= 400) {
      if (scrollStateRef.current !== 'scrolled') {
        setScrollState('scrolled');
      }
    } else {
      if (scrollStateRef.current !== 'top') {
        setScrollState('top');
      }
    }
  };

  useEffect(() => {
    listener = window.addEventListener('scroll', scrollListener);
    return () => {
      document.removeEventListener('scroll', listener);
      listener = null;
      //setScrollState('top');
    };
  }, []);

  return (
    <header
      className={`header ${alwaysBlack ? `always-black` : ``} ${scrollState}`}
    >
      {children}
    </header>
  );
}
