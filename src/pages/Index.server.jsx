import clsx from 'clsx';
import groq from 'groq';
import {useSanityQuery} from 'hydrogen-plugin-sanity';
import React from 'react';

import CollectionCard from '../components/CollectionCard.client';
import GalleryCarousel from '../components/GalleryCarousel.client';
import Layout from '../components/Layout.server';
import NotFound from '../components/NotFound.server';
import PortableText from '../components/PortableText.client';
import ProductListing from '../components/ProductListing.server';
import Seo from '../components/Seo.client';
import ProductsProvider from '../contexts/ProductsProvider.client';
import {IMAGE} from '../fragments/image';
import {PORTABLE_TEXT} from '../fragments/portableText';
import {PRODUCT_WITH_VARIANT} from '../fragments/productWithVariant';
import {SEO} from '../fragments/seo';

import {Slider, Slide} from '../components/simplistic/Slider.client';
import SectionTitle from '../components/simplistic/SectionTitle.server';
import ProductCard from '../components/simplistic/ProductCard.server';
import BannerAnimated from '../components/simplistic/BannerAnimated.server';
import HeroTriplet from '../components/simplistic/HeroTriplet.client';
import BlogCard from '../components/simplistic/BlogCard.server';
import FeaturedCollection from '../components/simplistic/FeaturedCollection.server';
import FeaturedProduct from '../components/simplistic/FeaturedProduct.server';

export default function Index() {
  const {sanityData: sanityPage, shopifyProducts} = useSanityQuery({
    query: QUERY,
  });

  //console.log('sanityPage', sanityPage);
  //console.log('shopifyProducts', shopifyProducts);

  const {mainHero, featuredCollection1} = sanityPage;

  if (!sanityPage) {
    return <NotFound />;
  }
  return (
    <>
      {/* <HeroTriplet data={mainHero} /> */}

      <FeaturedCollection
        title={featuredCollection1.title}
        products={featuredCollection1.products.map((product) => {
          //console.log(shopifyProducts?.[product?.productData._id]);
          return {
            ...product.productData,
            storefront: shopifyProducts?.[product?.productData._id],
          };
        })}
      />

      <FeaturedProduct />

      <div className="w-full border-t border-dark 3xl:container  3xl:mx-auto 3xl:border-l 3xl:border-r 3xl:border-dark">
        <div className="w-full flex items-stretch justify-between">
          <div className="py-4 pl-4 pr-2">
            <div className="sticky top-4">
              {/* <ProductCard addToCart className="w-[490px]" /> */}
            </div>
          </div>
          <div className="py-4 pl-2 pr-2">
            {/* <ProductCard mode="small" className="mb-4 w-[490px]" />
            <ProductCard mode="small" className="mb-4 w-[490px]" />
            <ProductCard mode="small" className="mb-4 w-[490px]" />
            <ProductCard mode="small" className="mb-4 w-[490px]" />
            <ProductCard mode="small" className="mb-4 w-[490px]" />
            <ProductCard mode="small" className="mb-4 w-[490px]" /> */}
          </div>
          <div className="flex-grow py-4 pl-2 pr-4">
            <div className="sticky top-4">
              <ul>
                <li>
                  <a
                    href="#"
                    className="text-big font-main-display uppercase text-black underline"
                    style={{
                      textDecorationThickness: '1px',
                      textUnderlineOffset: '8px',
                    }}
                  >
                    Mood
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-big font-main-display uppercase text-dark"
                  >
                    Ocassion
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-big font-main-display uppercase text-dark"
                  >
                    Seasons
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-big font-main-display uppercase text-dark"
                  >
                    Generation
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <BannerAnimated text="Feel the music " times={5} duration="30s" />

      {/* <FeaturedCollection title="She's got the look" /> */}

      <div className="w-full border-t border-dark container  3xl:mx-auto 3xl:border-l 3xl:border-r 3xl:border-dark">
        <div className="w-full flex items-stretch justify-between">
          <div className="py-4 pl-4 pr-2">
            <div className="sticky top-4">
              {/* <ProductCard mode="small" className="w-[490px]" /> */}
            </div>
          </div>
          <div className="py-4 pl-2 pr-2">
            {/* <ProductCard mode="small" className="w-[490px]" /> */}
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
      </div>

      {/* <FeaturedCollection title="Seasons" /> */}

      <div className="w-full px-4 pt-6 pb-0 border-t border-b border-secondary flex items-center 3xl:container 3xl:mx-auto 3xl:border-l 3xl:border-r 3xl:border-dark">
        <h2 className="font-main-display text-huge uppercase text-secondary">
          LifeStyle
        </h2>
      </div>
      <div className="py-4 pl-4 3xl:mx-auto 3xl:container 3xl:border-l 3xl:border-r 3xl:border-dark">
        <Slider
          sliderConfig={{
            slides: {
              perView: 2.2,
              spacing: 4,
            },
            loop: false,
            initial: 0,
          }}
          onSlideChange={() => false}
        >
          <Slide key={1}>
            <BlogCard className="mr-4" />
          </Slide>
          <Slide key={2}>
            <BlogCard className="mr-4" />
          </Slide>
          <Slide key={3}>
            <BlogCard className="mr-4" />
          </Slide>
          <Slide key={4}>
            <BlogCard className="mr-4" />
          </Slide>
        </Slider>
      </div>
    </>
  );
  /*
  return (
    <ProductsProvider value={shopifyProducts}>
        <Layout>
          <div className="bg-black-300 relative w-full">

            {sanityPage?.intro && (
              <div className="max-w-3xl p-4">
                <PortableText blocks={sanityPage.intro} />
              </div>
            )}

            <div className="bg-black h-px my-10 w-full" />


            <div className="px-4">
              <h2 className="font-medium text-xl">Featured collections</h2>
              <section
                className={clsx([
                  'grid grid-cols-1 sm:grid-cols-2',
                  'gap-10 my-8',
                ])}
              >
                {sanityPage.featuredCollections?.map((collection) => (
                  <div key={collection?._id}>
                    <CollectionCard collection={collection} />
                  </div>
                ))}
              </section>
            </div>


            <div className="bg-black h-px my-10 w-full" />


            {sanityPage?.gallery && (
              <GalleryCarousel gallery={sanityPage?.gallery} />
            )}


            <div className="bg-black h-px my-10 w-full" />


            <div className="px-4">
              <h2 className="font-medium text-xl">Featured products</h2>
              <ProductListing
                products={sanityPage?.featuredProducts?.map((product) => ({
                  ...product,
                  storefront: shopifyProducts?.[product?._id],
                }))}
              />
            </div>
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
      </ProductsProvider>
      );*/
}
/*
const QUERY = groq`
    *[_id == 'home3'][0]{
        featuredCollections[] -> {
          _id,
          image {
        ${IMAGE}
      },
      "slug": slug.current,
      title,
    },
      featuredProducts[] {
        ...${PRODUCT_WITH_VARIANT}
    },
      gallery[] {
        _key,
        image {
        ${IMAGE}
      },
      productWithVariant {
        ${PRODUCT_WITH_VARIANT}
      },
      title
    },
      intro[] {
        ${PORTABLE_TEXT}
    },
      seo {
        ${SEO}
    }
  } {
        ...,
        featuredProducts[available]
      }
      `;
*/
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
    }
  }
`;
