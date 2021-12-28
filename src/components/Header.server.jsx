import {Link} from '@shopify/hydrogen';

// import {useSettingsContext} from '../contexts/SettingsContext.server';
import CartToggleButton from './CartToggleButton.client';
import HeaderMenu from './HeaderMenu.client';

export default function Header() {
  // const data = useSettingsContext();

  return (
    <header
      className="bg-light-b border-b border-dark flex items-center justify-between h-20 p-4 fixed top-0 w-full z-50"
      role="banner"
    >
      <div className="">
        <div>
          <Link className="font-medium" to="/">
            <img src="/img/logo.png" alt="Tune me In" className="w-24" />
          </Link>
        </div>
        {/* {data?.menu?.links && <HeaderMenu links={data.menu.links} />} */}
      </div>
      <div className="menu">wqrqwr qwrqwrwqr</div>
      <CartToggleButton />
    </header>
  );
}
