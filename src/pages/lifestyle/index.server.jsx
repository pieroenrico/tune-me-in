import Layout from '../../components/Layout.server';
import BlogArticles from '../../components/simplistic/BlogArticles.client';
import groq from 'groq';
import {useSanityQuery} from 'hydrogen-plugin-sanity';
import {IMAGE} from '../../fragments/image';
import {PORTABLE_TEXT} from '../../fragments/portableText';
import PortableText from '../../components/PortableText.client';
import SectionTitle from '../../components/simplistic/SectionTitle.server';
import {useParams} from 'react-router-dom';
export default function Lifestyle({selectedArticle}) {
  const {handle} = useParams();
  const {sanityData: blogData} = useSanityQuery({
    query: QUERY,
  });

  const selectedSlug = selectedArticle
    ? selectedArticle
    : blogData[0].slug.current;

  const currentArticle = blogData.find(
    (article) => article.slug.current === selectedSlug,
  );

  return (
    <Layout>
      <div className="mt-20 pt-4">
        <SectionTitle title={currentArticle.title} />
        <div className="flex items-stretch justify-between">
          <div className="w-2/3 p-4 border-r border-dark">
            <div className="sticky top-24">
              <div
                className="w-full h-[600px] bg-grey border border-dark mb-4 bg-center bg-cover bg-no-repeat"
                style={{backgroundImage: `url('${currentArticle.image.url}')`}}
              ></div>
              <PortableText blocks={currentArticle.body} />
            </div>
          </div>
          <div className="w-1/3 p-4">
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
