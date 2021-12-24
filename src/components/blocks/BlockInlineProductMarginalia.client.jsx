import {Product} from '@shopify/hydrogen/client';

import {useProductsContext} from '../../contexts/ProductsContext.client';
import {encode} from '../../utils/shopifyGid';
import ButtonSelectedVariantAddToCart from '../ButtonSelectedVariantAddToCart.client';
import ButtonSelectedVariantBuyNow from '../ButtonSelectedVariantBuyNow.client';
import LinkProduct from '../LinkProduct.client';

const BlockInlineProductMarginalia = (props) => {
  const {node} = props;

  const product = node?.productWithVariant?.product;

  const storefrontProduct = useProductsContext(product?._id);
  // Return nothing if no valid product is found
  if (!storefrontProduct) {
    return null;
  }

  const encodedVariantId = encode('ProductVariant', product?.variantId);

  return (
    <Product product={storefrontProduct} initialVariantId={encodedVariantId}>
      <>
        <div className="absolute border border-gray-500 left-full ml-10 p-4 top-0 w-48">
          <div className="text-sm">
            <LinkProduct
              handle={storefrontProduct.handle}
              variantId={product?.variantId}
            >
              <Product.Title className="font-medium" />
            </LinkProduct>
            <Product.Price />
          </div>
          <Product.SelectedVariant.Image
            className="my-4 w-full"
            options={{
              crop: 'center',
              height: 300,
              width: 300,
            }}
          />
          {node?.action === 'addToCart' && (
            <ButtonSelectedVariantAddToCart small />
          )}
          {node?.action === 'buyNow' && <ButtonSelectedVariantBuyNow small />}
        </div>
      </>
    </Product>
  );
};

export default BlockInlineProductMarginalia;
