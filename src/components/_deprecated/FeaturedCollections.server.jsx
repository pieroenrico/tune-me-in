import gql from 'graphql-tag';
import groq from 'groq';
import {
  useShopQuery,
  ProductProviderFragment,
  Product,
} from '@shopify/hydrogen';
import {useSanityQuery} from 'hydrogen-plugin-sanity';
import FeaturedCollectionsList from './FeaturedCollectionsList.client';
import ProductCard from './ProductCard.server';
const FeaturedCollections = (props) => {
  const {collections, selectedFeaturedCollection} = props;
  const selectedCollection = selectedFeaturedCollection
    ? selectedFeaturedCollection
    : collections[0].handle;
  const {data} = useShopQuery({
    query: QUERY,
    variables: {handle: selectedCollection},
  });
  const handles = data.collectionByHandle.products.edges.map(
    (edge) => edge.node.handle,
  );
  const {sanityData: products, shopifyProducts} = useSanityQuery({
    query: SANITY_QUERY,
    params: {
      slugs: handles,
    },
  });
  //   console.log(products);

  return (
    <div className="w-full border-t border-dark 3xl:container  3xl:mx-auto 3xl:border-l 3xl:border-r 3xl:border-dark">
      <div className="w-full flex items-stretch justify-between">
        <div className="py-4 pl-4 pr-2">
          <div className="sticky top-4">
            qwr
            {/* <ProductCard addToCart className="w-[490px]" /> */}
          </div>
        </div>
        <div className="py-4 pl-2 pr-2">
          {products.map((product, idx) => (
            <ProductCard
              key={idx}
              mode="small"
              className="mb-4 w-[490px]"
              product={{
                slug: product.product.slug,
                storefront: shopifyProducts?.[product?.product._id],
              }}
            />
          ))}
          {/* <ProductCard mode="small" className="mb-4 w-[490px]" />
            <ProductCard mode="small" className="mb-4 w-[490px]" />
            <ProductCard mode="small" className="mb-4 w-[490px]" />
            <ProductCard mode="small" className="mb-4 w-[490px]" />
            <ProductCard mode="small" className="mb-4 w-[490px]" />
            <ProductCard mode="small" className="mb-4 w-[490px]" /> */}
        </div>
        <div className="flex-grow py-4 pl-2 pr-4">
          <div className="sticky top-4">
            selectedFeaturedCollection: {selectedCollection}
            <FeaturedCollectionsList
              collections={collections}
              selectedCollection={selectedCollection}
            />
            {/* <ul>
              {collections.map((collection, idx) => (
                <li>
                  <button
                    onClick={(e) => {
                      console.log('here');
                      return e.preventDefault();
                    }}
                    className="text-big font-main-display uppercase text-dark"
                  >
                    {collection.title}
                  </button>
                </li>
              ))} */}
            {/* <li>
                <a
                  href="#"
                  className="text-big font-main-display uppercase text-black underline"
                  style={{
                    textDecorationThickness: '1px',
                    textUnderlineOffset: '8px',
                  }}
                >
                  Mood
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-big font-main-display uppercase text-dark"
                >
                  Ocassion
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-big font-main-display uppercase text-dark"
                >
                  Seasons
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-big font-main-display uppercase text-dark"
                >
                  Generation
                </a>
              </li> */}
            {/* </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeaturedCollections;

const QUERY = gql`
  query productsQuery($handle: String!) {
    collectionByHandle(handle: $handle) {
      title
      products(first: 10, sortKey: TITLE, reverse: true) {
        edges {
          node {
            handle
          }
        }
      }
    }
  }
`;

const SANITY_QUERY = groq`
*[_type=="product" && store.slug.current in $slugs][] {
"product": {
    _id,
    "available": !store.isDeleted && store.status == 'active',
    "slug": store.slug.current,
    store,
    "variantId": coalesce(^.variant->store.id, store.variants[0]->store.id)
  }
}
`;
