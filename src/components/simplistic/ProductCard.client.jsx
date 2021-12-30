import {Product} from '@shopify/hydrogen/client';
import {encode} from '../../utils/shopifyGid';

import ProductCardDetails from './ProductCardDetails.client';

const ProductCard = (props) => {
  const {product} = props;
  const encodedVariantId = encode('ProductVariant', product?.variantId);
  return (
    <Product product={product.storefront} initialVariantId={encodedVariantId}>
      <ProductCardDetails {...props} key={product._id} />
    </Product>
  );
};

export default ProductCard;
