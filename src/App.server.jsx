import {ShopifyServerProvider} from '@shopify/hydrogen';
import {Suspense} from 'react';

import shopifyConfig from '../shopify.config';

import Main from './components/Main.server';
import CartProvider from './contexts/CartProvider.client';

export default function App({...serverState}) {
  const pages = import.meta.globEager('./pages/**/*.server.(jsx|tsx)');

  return (
    <Suspense>
      <ShopifyServerProvider shopifyConfig={shopifyConfig} {...serverState}>
        <CartProvider>
          <Main pages={pages} serverState={serverState} />
        </CartProvider>
      </ShopifyServerProvider>
    </Suspense>
  );
}
