import groq from 'groq';
import {useSanityQuery} from 'hydrogen-plugin-sanity';

import {IMAGE} from '../fragments/image';
import {SEO} from '../fragments/seo';
import Layout from '../components/Layout.server';
import Seo from '../components/Seo.client';
// eslint-disable-next-line @shopify/strict-component-boundaries
import LazyLoad from '../components/simplistic/LazyLoad.client';

export default function About() {
  const {sanityData: sanityPage} = useSanityQuery({
    query: QUERY,
  });
  const {title, title2, image1, image2, image3, image4, image5, text1, text2} =
    sanityPage;
  return (
    <Layout>
      <div className="w-full pt-28 px-4 pb-4 3xl:container 3xl:mx-auto 3xl:border-l 3xl:border-r 3xl:border-dark">
        <h1 className="text-dark text-[6em] md:text-[18em] leading-[.85em] md:leading-[.75em] uppercase font-main-display w-3/4">
          {title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <LazyLoad
            asBackground
            src={`${image1.url}?w=900`}
            className="border border-dark bg-grey aspect-w-3 aspect-h-4 bg-cover bg-no-repeat bg-center"
          />
          <LazyLoad
            asBackground
            src={`${image2.url}?w=900`}
            className="border border-dark bg-grey aspect-w-3 aspect-h-4 bg-cover bg-no-repeat bg-center"
          />
          <LazyLoad
            asBackground
            src={`${image3.url}?w=900`}
            className="border border-dark bg-grey aspect-w-3 aspect-h-4 bg-cover bg-no-repeat bg-center"
          />
        </div>
        <div className="text-dark py-4">
          <p className="w-full md:w-1/2 text-3xl font-light">{text1}</p>
        </div>
        <div className="flex items-stretch justify-between flex-col md:flex-row mb-16">
          <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
            <p className="w-full md:w-1/2 text-dark font-light">{text2}</p>
          </div>
          <LazyLoad
            asBackground
            src={`${image4.url}?w=900`}
            className="border border-dark bg-grey w-full md:w-1/2 aspect-w-3 aspect-h-2 md:aspect-h-1 bg-cover bg-no-repat bg-center"
          />
        </div>
        <h2 className="text-dark text-[6em] md:text-[18em] leading-[.85em] md:leading-[.75em] uppercase font-main-display w-full md:w-3/4">
          {title2}
        </h2>
        <LazyLoad
          asBackground
          src={`${image5.url}?w=1200`}
          className="my-8 border border-dark bg-grey w-full aspect-w-5 aspect-h-3 bg-cover bg-no-repeat bg-center"
        />
      </div>
      <Seo
        page={{
          description: sanityPage.seo?.description,
          image: sanityPage.seo?.image,
          keywords: sanityPage.seo?.keywords,
          title: sanityPage.seo?.title,
        }}
      />
    </Layout>
  );
}

const QUERY = groq`
*[_id == "about"][0] {
  title,
  title2,
  text1,
  text2,
  image1 {
      ${IMAGE}
  },
  image2 {
      ${IMAGE}
  },
  image3 {
      ${IMAGE}
  },
  image4 {
      ${IMAGE}
  },
  image5 {
      ${IMAGE}
  },
  seo {
    ${SEO}
  }
}
`;
