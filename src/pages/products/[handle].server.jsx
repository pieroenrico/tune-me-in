import {flattenConnection} from '@shopify/hydrogen';
import groq from 'groq';
import {useSanityQuery} from 'hydrogen-plugin-sanity';
import {useParams} from 'react-router-dom';
import Layout from '../../components/Layout.server';
import NotFound from '../../components/NotFound.server';
import ProductDetails from '../../components/simplistic/ProductDetails.client';
import FeaturedCollection from '../../components/simplistic/FeaturedCollection.server';
import BlogRelatedArticleCard from '../../components/simplistic/BlogRelatedArticleCard.server';
import {ProductProvider} from '@shopify/hydrogen/client';
import Seo from '../../components/Seo.client';
import ProductsProvider from '../../contexts/ProductsProvider.client';
import {PRODUCT_PAGE} from '../../fragments/productPage';
import {encode} from '../../utils/shopifyGid';
import SectionTitle from '../../components/simplistic/SectionTitle.server';
export default function Product(props) {
  const {handle} = useParams();
  const {sanityData: sanityProduct, shopifyProducts} = useSanityQuery({
    query: QUERY,
    params: {
      slug: handle,
    },
    getProductGraphQLFragment: () => {
      return `
        ...ProductProviderFragment
        mf:metafields(namespace:"tunemein", first:2){
          edges {
            node {
              key
              value
            }
          }
        }
        images(first: 10) {
          edges {
            node {
              altText
              url
            }
          }
        }
      `;
    },
  });

  // console.log(sanityProduct);

  const storefrontProduct = shopifyProducts?.[sanityProduct?._id];

  if (!sanityProduct || !storefrontProduct) {
    return <NotFound />;
  }

  const product = {
    ...sanityProduct,
    storefront: storefrontProduct,
  };

  // Obtain variant ID from server state or request search params, in that order
  const params = new URLSearchParams(props.search);
  const variantId = props?.variantId || params?.get('variant');
  const encodedVariantId = encode('ProductVariant', variantId);

  const flattenedVariants = flattenConnection(product.storefront.variants);
  const productVariantIndex = flattenedVariants.findIndex(
    (variant) => variant.id === encodedVariantId,
  );

  const productVariant =
    product.storefront?.variants?.edges[
      productVariantIndex >= 0 ? productVariantIndex : 0
    ];

  const {relatedCollection, relatedArticle} = sanityProduct;

  return (
    <ProductsProvider value={shopifyProducts}>
      <Layout>
        <ProductProvider
          product={product?.storefront}
          initialVariantId={productVariant?.node?.id}
        >
          <ProductDetails product={product} />
        </ProductProvider>

        {relatedCollection && (
          <FeaturedCollection
            title={relatedCollection.title}
            products={relatedCollection.products.map((product) => {
              return {
                ...product.productData,
                storefront: shopifyProducts?.[product?.productData._id],
              };
            })}
          />
        )}

        {relatedArticle && <BlogRelatedArticleCard article={relatedArticle} />}
      </Layout>
    </ProductsProvider>
  );

  // return (
  //   <ProductsProvider value={shopifyProducts}>
  //     <Layout>
  //       <ProductDetails
  //         initialVariantId={productVariant?.node?.id}
  //         product={product}
  //       />
  //       {/* SEO */}
  //       <Seo
  //         page={{
  //           description: sanityProduct.seo?.description,
  //           image: sanityProduct.seo?.image,
  //           keywords: sanityProduct.seo?.keywords,
  //           product: {
  //             availableForSale: productVariant?.node?.availableForSale,
  //             description: sanityProduct.seo?.description,
  //             price: productVariant?.node?.priceV2,
  //             title: sanityProduct.seo?.title || sanityProduct?.store?.title,
  //           },
  //           title: sanityProduct.seo?.title || sanityProduct?.store?.title,
  //           type: 'product',
  //         }}
  //       />
  //     </Layout>
  //   </ProductsProvider>
  // );
}

const QUERY = groq`
  *[
    _type == 'product'
    && store.slug.current == $slug
  ][0]{
    ${PRODUCT_PAGE}
  }
`;
