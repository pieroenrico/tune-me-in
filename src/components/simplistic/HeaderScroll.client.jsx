import {useState, useEffect, useRef} from 'react';
import {Link, useLocation} from 'react-router-dom';
import CartToggleButton from '../CartToggleButton.client';

export default function HeaderScroll() {
  const [scrollState, _setScrollState] = useState('top');
  const scrollStateRef = useRef(scrollState);
  const location = useLocation();
  const [alwaysBlack, setAlwaysBlack] = useState(false);

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
    document.addEventListener('scroll', scrollListener);
    return () => {
      document.removeEventListener('scroll', scrollListener);
    };
  }, []);

  useEffect(() => {
    setAlwaysBlack(location.pathname !== '/');
  }, [location]);

  return (
    <header
      className={`header ${alwaysBlack ? `always-black` : ``} ${scrollState}`}
    >
      <div className="">
        <div>
          <Link to="/">
            <div className="logo bg-logo">
              <div className="logo-text">TMI</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="menu">
        <Link to="/about" className="mx-4">
          About
        </Link>
        <Link to="/collections/all-products" className="mx-4">
          T-Shirts
        </Link>
        <Link to="/collections" className="mx-4">
          Collections
        </Link>
        <Link to="/lifestyle" className="mx-4">
          Lifestyle
        </Link>
      </div>
      <CartToggleButton />
    </header>
  );
}
