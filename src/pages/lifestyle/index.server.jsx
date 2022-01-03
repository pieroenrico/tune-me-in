import groq from 'groq';
import {useSanityQuery} from 'hydrogen-plugin-sanity';
import {Link} from 'react-router-dom';

import Layout from '../../components/Layout.server';
import {IMAGE} from '../../fragments/image';
import {PORTABLE_TEXT} from '../../fragments/portableText';
// eslint-disable-next-line @shopify/strict-component-boundaries
import SectionTitle from '../../components/simplistic/SectionTitle.server';

export default function Lifestyle() {
  const {sanityData: blogData} = useSanityQuery({
    query: QUERY,
  });

  return (
    <Layout>
      <div className="mt-20 pt-4">
        <SectionTitle
          title="Lifestyle"
          titleClassName="text-secondary"
          className="border-secondary"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 3xl:container 3xl:mx-auto 3xl:border-l 3xl:border-r 3xl:border-dark">
          {blogData.map((article, adx) => (
            <div key={adx} className="border border-secondary p-4">
              <Link to={`/lifestyle/${article.slug.current}`}>
                <div
                  className="w-full bg-grey border border-secondary aspect-w-5 aspect-h-3 mb-4 bg-center bg-cover bg-no-repeat"
                  style={{backgroundImage: `url('${article.image.url}')`}}
                />
                <div className="text-secondary text-[4em] uppercase font-main-heading leading-[1em]">
                  {article.title}
                </div>
                <p className="text-dark font-light">{article.extract}</p>
              </Link>
            </div>
          ))}
          {/* <div className="w-full md:w-2/3 p-4 border-r border-dark">
            <div className="sticky top-24">
              <div
                className="w-full aspect-w-5 aspect-h-4 md:aspect-h-3 bg-grey border border-dark mb-4 bg-center bg-cover bg-no-repeat"
                style={{backgroundImage: `url('${currentArticle.image.url}')`}}
              />
              <PortableText blocks={currentArticle.body} />
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <BlogArticles
              articles={blogData
                .filter((article) => article.slug.current !== selectedSlug)
                .map((article) => ({
                  slug: article.slug,
                  title: article.title,
                  image: article.image,
                  extract: article.extract,
                }))}
            />
          </div> */}
        </div>
      </div>
    </Layout>
  );
}

const QUERY = groq`
*[_type == "article.editorial"][]
{
    ...,
    body[]{
      ${PORTABLE_TEXT}
    },
    image {
        ${IMAGE}
    }
}
|order(_updatedAt desc)
`;
