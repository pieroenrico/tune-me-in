import {LocalizationProvider} from '@shopify/hydrogen';

import HeaderScroll from './simplistic/HeaderScroll.client';
import Footer from './Footer.server';
import Cart from './Cart.client';

export default function Layout({children}) {
  return (
    <LocalizationProvider>
      <HeaderScroll />
      <div className="min-h-screen max-w-screen text-gray-700">
        <Cart />
        <main id="mainContent">{children}</main>
        <Footer />
      </div>
    </LocalizationProvider>
  );
}
