import {LocalizationProvider} from '@shopify/hydrogen';
import Header from './Header.server';
import Footer from './Footer.server';
import Cart from './Cart.client';
import {useLocation} from 'react-router-dom';

export default function Layout({children}) {
  const location = useLocation();
  return (
    <LocalizationProvider>
      <Header alwaysBlack={location.pathname !== '/'} />
      <div className="min-h-screen max-w-screen text-gray-700">
        <Cart />
        <main id="mainContent">{children}</main>
        <Footer />
      </div>
    </LocalizationProvider>
  );
}
