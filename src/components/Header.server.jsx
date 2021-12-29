import {Link} from '@shopify/hydrogen';

// import {useSettingsContext} from '../contexts/SettingsContext.server';
import CartToggleButton from './CartToggleButton.client';
import HeaderMenu from './HeaderMenu.client';
import HeaderScroll from './simplistic/HeaderScroll.client';

export default function Header() {
  // const data = useSettingsContext();

  return (
    <HeaderScroll>
      <div className="">
        <div>
          <Link className="font-medium" to="/">
            <div
              className="logo w-[120px] bg-contain bg-center bg-repeat-x h-[45px] flex items-center justify-center"
              style={{
                backgroundImage: `url('/img/logo.png')`,
              }}
            >
              <div className="text-light-f text-2xl font-extrabold">TMI</div>
            </div>
          </Link>
        </div>
        {/* {data?.menu?.links && <HeaderMenu links={data.menu.links} />} */}
      </div>
      <div className="menu">
        <Link to="/about">About</Link>
      </div>
      <CartToggleButton />
    </HeaderScroll>
  );
}
