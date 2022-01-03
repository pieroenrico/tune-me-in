import groq from 'groq';
import {useSanityQuery} from 'hydrogen-plugin-sanity';

import Layout from '../../components/Layout.server';
// eslint-disable-next-line @shopify/strict-component-boundaries
import CollectionCard from '../../components/simplistic/CollectionCard.server';
import {IMAGE} from '../../fragments/image';

export default function Collections() {
  console.log('collections');
  const {sanityData: collectionData} = useSanityQuery({
    query: QUERY,
    params: {
      storeSlug: 'tune-me-in',
    },
  });

  console.log(collectionData);

  return (
    <Layout>
      <div className="w-full mt-20 pb-4 3xl:container 3xl:mx-auto 3xl:border-l 3xl:border-r 3xl:border-dark">
        {collectionData.map((collection, idx) => (
          <CollectionCard
            collection={collection}
            key={idx}
            odd={idx % 2 === 0}
          />
        ))}
      </div>
    </Layout>
  );
}

const QUERY = groq`
*[_type == "collection" && storeSlug == $storeSlug][]
{
  title,
  slug,
  image {
      ${IMAGE}
  }
}
`;
