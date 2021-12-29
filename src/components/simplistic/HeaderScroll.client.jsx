import {useState, useEffect} from 'react';

export default function HeaderScroll({children}) {
  let listener = null;
  const [scrollState, setScrollState] = useState('top');
  const styleNotScrolled = `bg-transparent flex items-center justify-between h-20 p-4 fixed top-0 w-full z-50`;
  const styleScrolled = `bg-light-b border-b border-dark flex items-center justify-between h-20 p-4 fixed top-0 w-full z-50`;

  useEffect(() => {
    listener = document.addEventListener('scroll', (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 400) {
        if (scrollState !== 'scrolled') {
          setScrollState('scrolled');
        }
      } else {
        if (scrollState !== 'top') {
          setScrollState('top');
        }
      }
    });
    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, [scrollState]);

  return (
    <header
      className={scrollState === 'scrolled' ? styleScrolled : styleNotScrolled}
    >
      {children}
    </header>
  );
}

/*
// <header
    //   className="bg-light-b border-b border-dark flex items-center justify-between h-20 p-4 fixed top-0 w-full z-50"
    //   role="banner"
    // >*/
