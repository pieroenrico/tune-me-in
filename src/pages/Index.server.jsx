import groq from 'groq';
import {useSanityQuery} from 'hydrogen-plugin-sanity';
import React from 'react';

import Layout from '../components/Layout.server';
import NotFound from '../components/NotFound.server';
import Seo from '../components/Seo.client';
import {IMAGE} from '../fragments/image';
import {SEO} from '../fragments/seo';
import {PRODUCT_WITH_VARIANT} from '../fragments/productWithVariant';
// eslint-disable-next-line @shopify/strict-component-boundaries
import BannerAnimated from '../components/simplistic/BannerAnimated.server';
// eslint-disable-next-line @shopify/strict-component-boundaries
import HeroTriplet from '../components/simplistic/HeroTriplet.client';
// eslint-disable-next-line @shopify/strict-component-boundaries
import FeaturedCollection from '../components/simplistic/FeaturedCollection.server';
// eslint-disable-next-line @shopify/strict-component-boundaries
import FeaturedCollections from '../components/simplistic/FeaturedCollections.client';
// eslint-disable-next-line @shopify/strict-component-boundaries
import SponsoredArticle from '../components/simplistic/SponsoredArticle.server';
// eslint-disable-next-line @shopify/strict-component-boundaries
import FeaturedBlog from '../components/simplistic/FeaturedBlog.server';

export default function Index() {
  const {sanityData: sanityPage, shopifyProducts} = useSanityQuery({
    query: QUERY,
    getProductGraphQLFragment: () => {
      return `
        ...ProductProviderFragment
        mf:metafields(namespace:"tunemein", first:1){
          edges {
            node {
              key
              value
            }
          }
        }
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

  // console.log('sanityPage', sanityPage.blog);
  // console.log(
  //   'shopifyProducts',
  //   shopifyProducts['shopifyProduct-7520769835264'].mf.edges,
  // );

  const {
    mainHero,
    featuredCollection1,
    featuredCollection2,
    featuredCollection3,
    animatedBanner,
    sponsoredArticle,
    featuredCollections,
    blog,
  } = sanityPage;

  if (!sanityPage) {
    return <NotFound />;
  }
  return (
    <Layout>
      <HeroTriplet data={mainHero} />

      <FeaturedCollection
        title={featuredCollection1.title}
        products={featuredCollection1.products.map((product) => {
          return {
            ...product.productData,
            storefront: shopifyProducts?.[product?.productData._id],
          };
        })}
      />

      <SponsoredArticle data={sponsoredArticle} />

      <FeaturedCollections
        collections={featuredCollections}
        shopifyProducts={shopifyProducts}
      />

      <BannerAnimated data={animatedBanner} />

      <FeaturedCollection
        title={featuredCollection2.title}
        products={featuredCollection2.products.map((product) => {
          return {
            ...product.productData,
            storefront: shopifyProducts?.[product?.productData._id],
          };
        })}
      />

      <FeaturedCollection
        title={featuredCollection3.title}
        products={featuredCollection3.products.map((product) => {
          return {
            ...product.productData,
            storefront: shopifyProducts?.[product?.productData._id],
          };
        })}
      />

      <FeaturedBlog data={blog} />

      <Seo
        page={{
          description: sanityPage.seo?.description,
          image: sanityPage.seo?.image,
          keywords: sanityPage.seo?.keywords,
          title: sanityPage.seo?.title,
        }}
      />

      {/* <div className="w-full border-t border-dark container  3xl:mx-auto 3xl:border-l 3xl:border-r 3xl:border-dark hidden">
        <div className="w-full flex items-stretch justify-between">
          <div className="py-4 pl-4 pr-2">
            <div className="sticky top-4">
              <ProductCard mode="small" className="w-[490px]" />
            </div>
          </div>
          <div className="py-4 pl-2 pr-2">
            <ProductCard mode="small" className="w-[490px]" /> 
          </div>
          <div className="flex-grow py-4 pl-2 pr-4">
            <div className="sticky top-4">
              <ul>
                <li>
                  <a
                    href="#"
                    className="text-big font-main-display uppercase text-dark"
                  >
                    Combine it!
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-6xl font-main-display uppercase text-primary"
                  >
                    Next Look
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>*/}
    </Layout>
  );
}

const QUERY = groq`
  *[_id == 'home3'][0] {
    title,
    mainHero {
      title,
      bgImage {
        ${IMAGE}
      },
      carousel[] {
        _key,
        image {
          ${IMAGE}
        }
      }
    },
    featuredCollection1 {
      title,
      products[] {
        'productData': productWithVariant {
          ...${PRODUCT_WITH_VARIANT}
        }
      }
    },
    featuredCollection2 {
      title,
      products[] {
        'productData': productWithVariant {
          ...${PRODUCT_WITH_VARIANT}
        }
      }
    },
    featuredCollection3 {
      title,
      products[] {
        'productData': productWithVariant {
          ...${PRODUCT_WITH_VARIANT}
        }
      }
    },
    featuredCollections[] {
      title,
      handle,
      products[] {
        'productData': productWithVariant {
          ...${PRODUCT_WITH_VARIANT}
        }
      }
    },
    animatedBanner {
      bgImage {
        ${IMAGE}
      },
      fgImage {
        ${IMAGE}
      },
      title,
      repeat,
      duration
    },
    sponsoredArticle {
      image {
        ${IMAGE}
      },
      title,
      mainText,
      secondaryText
    },
    blog {
      title,
      featuredArticles[] {
        article-> { 
          title, 
          "slug": slug.current, 
          extract,
          image {
            ${IMAGE}
          }
        }
      }
    },
    seo {
      ${SEO}
    },
  }
`;
