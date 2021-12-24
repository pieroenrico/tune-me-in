import SectionTitle from './SectionTitle.server';
import ProductCard from './ProductCard.server';
import {Slider, Slide} from './Slider.client';
import {useResponsive} from './providers/ResponsiveProvider.client';

const FeaturedCollection = (props) => {
  const {title} = props;
  const {screens} = useResponsive();
  return (
    <>
      <SectionTitle title={title} />
      <div className="py-4 pl-4 w-full 3xl:container 3xl:mx-auto 3xl:border-l 3xl:border-r 3xl:border-dark cursor-custom-drag">
        <Slider
          sliderConfig={{
            slides: {
              perView: 1.2,
              spacing: 4,
            },
            loop: false,
            initial: 0,
            breakpoints: {
              [screens.md.mediaQuery]: {
                slides: {
                  perView: 2.2,
                },
              },
              [screens.lg.mediaQuery]: {
                slides: {
                  perView: 3.2,
                },
              },
            },
          }}
        >
          <Slide key={1}>
            <ProductCard
              mode="small-interactive"
              addToCart
              detailsLink
              className="mr-4"
            />
          </Slide>
          <Slide key={2}>
            <ProductCard
              mode="small-interactive"
              addToCart
              detailsLink
              className="mr-4"
            />
          </Slide>
          <Slide key={3}>
            <ProductCard
              mode="small-interactive"
              addToCart
              detailsLink
              className="mr-4"
            />
          </Slide>
          <Slide key={4}>
            <ProductCard
              mode="small-interactive"
              addToCart
              detailsLink
              className="mr-4"
            />
          </Slide>
          <Slide key={5}>
            <ProductCard
              mode="small-interactive"
              addToCart
              detailsLink
              className="mr-4"
            />
          </Slide>
          <Slide key={6}>
            <ProductCard
              mode="small-interactive"
              addToCart
              detailsLink
              className="mr-4"
            />
          </Slide>
          <Slide key={7}>
            <ProductCard
              mode="small-interactive"
              addToCart
              detailsLink
              className="mr-4"
            />
          </Slide>
          <Slide key={8}>
            <ProductCard
              mode="small-interactive"
              addToCart
              detailsLink
              className="mr-4"
            />
          </Slide>
          <Slide key={9}>
            <ProductCard
              mode="small-interactive"
              addToCart
              detailsLink
              className="mr-4"
            />
          </Slide>
        </Slider>
      </div>
    </>
  );
};

export default FeaturedCollection;
