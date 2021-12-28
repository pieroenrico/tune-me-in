import {Product} from '@shopify/hydrogen/client';
import {useShopQuery} from '@shopify/hydrogen';
import {useProduct} from '@shopify/hydrogen';
import {encode} from '../../utils/shopifyGid';

import ProductCardDetails from './ProductCardDetails.client';
import ProductMediaProvider from './providers/ProductMediaProvider.client';

const ProductCard = (props) => {
  const {product} = props;
  const encodedVariantId = encode('ProductVariant', product?.variantId);
  return (
    <Product product={product.storefront} initialVariantId={encodedVariantId}>
      <ProductMediaProvider
        value={product.storefront.images.edges.map((edge) => edge.node)}
      >
        <ProductCardDetails {...props} key={product._id} />
      </ProductMediaProvider>
    </Product>
  );
};

export default ProductCard;
