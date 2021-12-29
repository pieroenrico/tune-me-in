import groq from 'groq';
import {IMAGE} from '../fragments/image';
import {useSanityQuery} from 'hydrogen-plugin-sanity';
import Layout from '../components/Layout.server';
export default function About() {
  const {sanityData: sanityPage, shopifyProducts} = useSanityQuery({
    query: QUERY,
  });
  const {title, title2, image1, image2, image3, image4, image5, text1, text2} =
    sanityPage;
  return (
    <Layout>
      <div className="w-full pt-28 3xl:container px-4 pb-4">
        <h1 className="text-dark text-[18em] leading-[.75em] uppercase font-main-display w-3/4">
          {title}
        </h1>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div
            className="border border-dark bg-grey h-[800px] bg-cover bg-no-repeat bg-center"
            style={{backgroundImage: `url('${image1.url}?w=900')`}}
          ></div>
          <div
            className="border border-dark bg-grey h-[800px] bg-cover bg-no-repeat bg-center"
            style={{backgroundImage: `url('${image2.url}?w=900')`}}
          ></div>
          <div
            className="border border-dark bg-grey h-[800px] bg-cover bg-no-repeat bg-center"
            style={{backgroundImage: `url('${image3.url}?w=900')`}}
          ></div>
        </div>
        <div className="text-dark py-4">
          <p className="w-1/2 text-3xl font-light">{text1}</p>
        </div>
        <div className="flex items-stretch justify-between mb-16">
          <div className="w-1/2 flex items-center justify-center">
            <p className="w-1/2 text-dark font-light">{text2}</p>
          </div>
          <div
            className="border border-dark bg-grey w-1/2 h-[400px] bg-cover bg-no-repat bg-center"
            style={{backgroundImage: `url('${image4.url}?w=900')`}}
          ></div>
        </div>
        <h2 className="text-dark text-[18em] leading-[.75em] uppercase font-main-display w-3/4">
          {title2}
        </h2>
        <div
          className="my-8 border border-dark bg-grey w-full h-[800px] bg-cover bg-no-repeat bg-center"
          style={{backgroundImage: `url('${image5.url}?w=1200')`}}
        ></div>
      </div>
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
  }
}
`;
