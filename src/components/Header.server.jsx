import {Link} from '@shopify/hydrogen';

// import {useSettingsContext} from '../contexts/SettingsContext.server';
import CartToggleButton from './CartToggleButton.client';
import HeaderMenu from './HeaderMenu.client';
import HeaderScroll from './simplistic/HeaderScroll.client';

export default function Header(props) {
  // const data = useSettingsContext();

  return (
    <HeaderScroll {...props}>
      <div className="">
        <div>
          <Link to="/">
            <div className="logo bg-logo">
              <div className="logo-text">TMI</div>
            </div>
          </Link>
        </div>
        {/* {data?.menu?.links && <HeaderMenu links={data.menu.links} />} */}
      </div>
      <div className="menu">
        <Link to="/about" className="mx-4">
          About
        </Link>
        <Link to="/about" className="mx-4">
          Best Sellers
        </Link>
        <Link to="/about" className="mx-4">
          Collections
        </Link>
        <Link to="/about" className="mx-4">
          Lifestyle
        </Link>
      </div>
      <CartToggleButton />
    </HeaderScroll>
  );
}
