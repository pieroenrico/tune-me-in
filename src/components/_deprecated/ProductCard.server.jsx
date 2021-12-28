import {Product} from '@shopify/hydrogen/client';
import {useShopQuery} from '@shopify/hydrogen';
import {useProduct} from '@shopify/hydrogen';
import gql from 'graphql-tag';
import {encode} from '../../utils/shopifyGid';

import ProductCardDetails from './ProductCard.client';
import ProductMediaProvider from './providers/ProductMediaProvider.client';

const ProductCard = (props) => {
  const {product} = props;
  const {data} = useShopQuery({
    query: QUERY_IMAGES,
    variables: {handle: product.slug},
  });

  const encodedVariantId = encode('ProductVariant', product?.variantId);
  return (
    <Product product={product.storefront} initialVariantId={encodedVariantId}>
      <ProductMediaProvider
        value={data.product.images.edges.map((edge) => ({...edge.node}))}
      >
        <ProductCardDetails {...props} />
      </ProductMediaProvider>
    </Product>
  );
};

export default ProductCard;

const QUERY_IMAGES = gql`
  query product($handle: String!) {
    product: product(handle: $handle) {
      id
      title
      images(first: 10) {
        edges {
          node {
            altText
            url
          }
        }
      }
    }
  }
`;
