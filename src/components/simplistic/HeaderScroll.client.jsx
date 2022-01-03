import {useState, useEffect, useRef} from 'react';
import {Link, useLocation} from 'react-router-dom';

import usePrevious from '../../hooks/usePrevious';
import CartToggleButton from '../CartToggleButton.client';
import IconHamburger from '../icons/IconHamburger.client';
import IconClose from '../icons/IconClose.client';

import NavMenu from './NavMenu.client';

export default function HeaderScroll() {
  const location = useLocation();
  const prevLocation = usePrevious(location.pathname);
  const [scrollState, _setScrollState] = useState('top');
  const scrollStateRef = useRef(scrollState);
  const [alwaysBlack, setAlwaysBlack] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const setScrollState = (state) => {
    scrollStateRef.current = state;
    _setScrollState(state);
  };

  const scrollListener = () => {
    const scrolled = document.scrollingElement.scrollTop;
    if (scrolled >= 400) {
      if (scrollStateRef.current !== 'scrolled') {
        setScrollState('scrolled');
      }
    } else if (scrollStateRef.current !== 'top') {
      setScrollState('top');
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollListener);
    return () => {
      document.removeEventListener('scroll', scrollListener);
    };
  }, []);

  useEffect(() => {
    setAlwaysBlack(location.pathname !== '/');

    if (location.pathname !== prevLocation) setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`header ${alwaysBlack ? `always-black` : ``} ${scrollState}`}
      >
        <div
          className="block md:hidden w-6 h-6 mobile-menu-icon"
          onClick={(event) => {
            event.preventDefault();
            setMobileMenuOpen(true);
          }}
        >
          <IconHamburger />
        </div>
        <div className="logo-wrapper">
          <div>
            <Link to="/">
              <div className="logo bg-logo">
                <div className="logo-text">TMI</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="menu">
          <NavMenu homeLink={false} className="mx-4" />
        </div>
        <CartToggleButton />
      </header>
      <div className={`menu-mobile ${mobileMenuOpen ? `open` : ''}`}>
        <div className="flex items-center justify-between">
          <div className="uppercase font-bold text-dark">Menu</div>
          <div
            className="w-6 h-6"
            onClick={(event) => {
              event.preventDefault();
              setMobileMenuOpen(false);
            }}
          >
            <IconClose />
          </div>
        </div>
        <div className="menu mt-4">
          <NavMenu homeLink className="" />
        </div>
      </div>
    </>
  );
}
