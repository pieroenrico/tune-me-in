import groq from 'groq';
import {useSanityQuery} from 'hydrogen-plugin-sanity';
import {useParams} from 'react-router-dom';

import Layout from '../../components/Layout.server';
import NotFound from '../../components/NotFound.server';
// eslint-disable-next-line @shopify/strict-component-boundaries
import SectionTitle from '../../components/simplistic/SectionTitle.server';
// eslint-disable-next-line @shopify/strict-component-boundaries
import CollectionHeader from '../../components/simplistic/CollectionHeader.server';
// eslint-disable-next-line @shopify/strict-component-boundaries
import ProductCard from '../../components/simplistic/ProductCard.client';
import Seo from '../../components/Seo.client';
import {COLLECTION_PAGE} from '../../fragments/collectionPage';

export default function Collection() {
  const {handle} = useParams();
  const {sanityData: sanityCollection, shopifyProducts} = useSanityQuery({
    query: QUERY,
    params: {
      slug: handle,
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

  if (!sanityCollection) {
    return <NotFound />;
  }

  console.log(sanityCollection.image);

  return (
    <Layout>
      <div className="w-full mt-24">
        <SectionTitle title={sanityCollection.title} />
        <CollectionHeader image={sanityCollection.image} />
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

  // return (
  //   <Layout>
  //     <div className="p-4">
  //       <div className="mb-20">
  //         {/* Title */}
  //         <h1 className="font-medium text-3xl">
  //           {sanityCollection.title}{' '}
  //           <span className="font-normal text-gray-400">
  //             (
  //             {pluralize(
  //               'product',
  //               sanityCollection?.products?.length || 0,
  //               true,
  //             )}
  //             )
  //           </span>
  //         </h1>

  //         {/* Description */}
  //         {sanityCollection?.description && (
  //           <div className="font-normal max-w-3xl text-gray-500 text-3xl">
  //             {sanityCollection.description}
  //           </div>
  //         )}
  //       </div>

  //       <ProductListing
  //         products={sanityCollection?.products?.map((product) => ({
  //           ...product,
  //           storefront: shopifyProducts?.[product?._id],
  //         }))}
  //       />
  //     </div>

  //     {/* SEO */}
  //     <Seo
  //       page={{
  //         description: sanityCollection.seo?.description,
  //         image: sanityCollection.seo?.image,
  //         keywords: sanityCollection.seo?.keywords,
  //         title: sanityCollection.seo?.title,
  //       }}
  //     />
  //   </Layout>
  // );
}

const QUERY = groq`
  *[
    _type == 'collection'
    && slug.current == $slug
  ][0]{
    ${COLLECTION_PAGE}
  } {
    ...,
    products[available]
  }
`;
