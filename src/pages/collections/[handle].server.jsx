import groq from 'groq';
import {useSanityQuery} from 'hydrogen-plugin-sanity';
import {useParams} from 'react-router-dom';

import Layout from '../../components/Layout.server';
import NotFound from '../../components/NotFound.server';
// eslint-disable-next-line @shopify/strict-component-boundaries
import CollectionHeader from '../../components/simplistic/CollectionHeader.server';
// eslint-disable-next-line @shopify/strict-component-boundaries
import ProductCard from '../../components/simplistic/ProductCard.client';
// eslint-disable-next-line @shopify/strict-component-boundaries
import CollectionPagination from '../../components/simplistic/CollectionPagination.client';
import Seo from '../../components/Seo.client';
import {COLLECTION_PAGE} from '../../fragments/collectionPage';

export default function Collection({currentPage}) {
  const pageSize = 6;
  const page = currentPage || 0;
  const start = page * pageSize;
  const end = start + (pageSize - 1);

  const {handle} = useParams();
  const {sanityData: sanityCollection, shopifyProducts} = useSanityQuery({
    query: QUERY,
    params: {
      slug: handle,
      start,
      end,
    },
    getProductGraphQLFragment: () => {
      return `
        ...ProductProviderFragment
        images(first: 10) {
          edges {
            node {
              altText
              url
              _200:url(transform:{maxWidth:200})
              _400:url(transform:{maxWidth:400})
              _600:url(transform:{maxWidth:600})
              _900:url(transform:{maxWidth:900})
              _1200:url(transform:{maxWidth:1200})
              _1600:url(transform:{maxWidth:1600})
            }
          }
        }
      `;
    },
  });

  if (!sanityCollection) {
    return <NotFound />;
  }

  const totalItems = sanityCollection.totalProducts;
  const totalPages = Math.ceil(totalItems / pageSize);

  // console.log(sanityCollection);

  return (
    <Layout>
      <div className="w-full">
        <CollectionHeader
          image={sanityCollection.image}
          title={sanityCollection.title}
        />
        <div className="mb-4">
          <CollectionPagination totalPages={totalPages} currentPage={page} />
        </div>
        <div className="px-4 pb-4 grid grid-cols-1 md:grid-cols-3 gap-4 3xl:container 3xl:mx-auto 3xl:border-l 3xl:border-r 3xl:border-dark">
          {sanityCollection.products.map((sanityProduct) => (
            <ProductCard
              key={sanityProduct._id}
              product={{
                ...sanityProduct,
                storefront: shopifyProducts?.[sanityProduct?._id],
              }}
              mode="small-interactive"
              addToCart
              detailsLink
            />
          ))}
        </div>
        <div className="mb-4">
          <CollectionPagination totalPages={totalPages} currentPage={page} />
        </div>
      </div>
      <Seo
        page={{
          description: '',
          image: null,
          keywords: [],
          title: `TMI | ${sanityCollection.title}`,
        }}
      />
    </Layout>
  );
}

const QUERY = groq`
  *[
    _type == 'collection'
    && slug.current == $slug
  ][0]{
    ${COLLECTION_PAGE}
  } {
    ...,
    "totalProducts": count(products[available]),
    products[available][$start..$end]
  }
`;
