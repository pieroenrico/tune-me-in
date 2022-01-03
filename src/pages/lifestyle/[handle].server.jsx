import groq from 'groq';
import {useSanityQuery} from 'hydrogen-plugin-sanity';
import {useParams} from 'react-router-dom';

import Layout from '../../components/Layout.server';
import {IMAGE} from '../../fragments/image';
import {SEO} from '../../fragments/seo';
import {PORTABLE_TEXT} from '../../fragments/portableText';
import PortableText from '../../components/PortableText.client';
// eslint-disable-next-line @shopify/strict-component-boundaries
import BlogArticles from '../../components/simplistic/BlogArticles.client';
// eslint-disable-next-line @shopify/strict-component-boundaries
import SectionTitle from '../../components/simplistic/SectionTitle.server';
import Seo from '../../components/Seo.client';

export default function Lifestyle({selectedArticle}) {
  const {handle} = useParams();
  const {sanityData: blogData} = useSanityQuery({
    query: QUERY,
  });

  const selectedSlug = selectedArticle ? selectedArticle : handle;

  const currentArticle = blogData.find(
    (article) => article.slug.current === selectedSlug,
  );

  return (
    <Layout>
      <div className="mt-20 pt-4">
        <SectionTitle title={currentArticle.title} />
        <div className="flex items-stretch justify-between flex-col md:flex-row 3xl:container 3xl:mx-auto 3xl:border-l 3xl:border-r 3xl:border-dark">
          <div className="w-full md:w-2/3 p-4 border-r border-dark">
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
          </div>
        </div>
      </div>
      <Seo
        page={{
          description: currentArticle.seo?.description,
          image: currentArticle.seo?.image,
          keywords: currentArticle.seo?.keywords,
          title: `TMI | ${currentArticle.seo?.title}`,
        }}
      />
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
    },
    seo {
      ${SEO}
    }
}
|order(_updatedAt desc)
`;
