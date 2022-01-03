import groq from 'groq';
import {useSanityQuery} from 'hydrogen-plugin-sanity';

import Layout from '../../components/Layout.server';
import NotFound from '../../components/NotFound.server';
// eslint-disable-next-line @shopify/strict-component-boundaries
import CollectionFilters from '../../components/simplistic/CollectionFilters.client';
// eslint-disable-next-line @shopify/strict-component-boundaries
import SectionTitle from '../../components/simplistic/SectionTitle.server';
// eslint-disable-next-line @shopify/strict-component-boundaries
import ProductCard from '../../components/simplistic/ProductCard.client';

export default function Collection({color, size}) {
  const colorFilter = color === undefined ? null : color;
  const sizeFilter = size === undefined ? null : size;
  const {sanityData: sanityCollection, shopifyProducts} = useSanityQuery({
    query: QUERY,
    params: {
      storeTag: 'tune-me-in',
      color: colorFilter,
      applyColorFilter: colorFilter !== null,
      size: sizeFilter,
      applySizeFilter: sizeFilter !== null,
    },
    getProductGraphQLFragment: () => {
      return `
        ...ProductProviderFragment
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

  //   console.log(shopifyProducts);

  if (!sanityCollection) {
    return <NotFound />;
  }

  const filters = parseFilters(sanityCollection);

  return (
    <Layout>
      <div className="mt-20 pt-4">
        <SectionTitle title="All T-Shirts" />
        <div className="w-full flex items-stretch justify-between flex-col md:flex-row 3xl:container 3xl:mx-auto 3xl:border-l 3xl:border-r 3xl:border-dark">
          <div className="w-full md:w-[20%] p-4">
            {filters && (
              <div className="border border-dark sticky top-24">
                <CollectionFilters
                  size={sizeFilter}
                  color={colorFilter}
                  filters={filters}
                  allFilters={color === null && size === null}
                />
              </div>
            )}
          </div>
          <div className="w-full md:w-[80%]">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 py-4 pr-4 pl-4 md:pl-0">
              {sanityCollection.map((sanityProduct) => (
                <ProductCard
                  key={sanityProduct._id}
                  product={{
                    ...sanityProduct,
                    storefront: shopifyProducts?.[sanityProduct?._id],
                  }}
                  mode="small-interactive"
                  selectedColor={colorFilter}
                  addToCart
                  detailsLink
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
const QUERY = groq`
    *[
        _type == "product" 
        && store.productType == "Shirts"
        && store.tags match $storeTag
        && "Color" in store.options[]._key
    ]
    {
        ..., 
        "slug": store.slug.current,
        "colorOption": store.options[1].values, 
        "sizeOption": store.options[0].values
    }
    [
        (colorOption match $color || !$applyColorFilter)
        &&
        (sizeOption match $size || !$applySizeFilter)
    ]
    []
    {
        _id,
        "available": !store.isDeleted && store.status == 'active',
        "slug": store.slug.current,
        store,
        "variantId": coalesce(^.variant->store.id, store.variants[0]->store.id)
    }
`;

const parseFilters = (products) => {
  let filterKeys = [];
  products.forEach((product) => {
    product.store.options.forEach((option) => {
      filterKeys = filterKeys
        .filter((filterKey) => filterKey.id !== option._key)
        .concat([
          {
            id: option._key,
            values: [],
          },
        ]);
    });
  });
  products.forEach((product) => {
    product.store.options.forEach((option) => {
      const filterKey = filterKeys.find((fKey) => fKey.id === option._key);
      filterKey.values = filterKey.values.concat(
        option.values.map((value) =>
          filterKey.values.includes(value) ? null : value,
        ),
      );
      filterKey.values = filterKey.values.filter((value) => value);
    });
  });
  return filterKeys;
};
