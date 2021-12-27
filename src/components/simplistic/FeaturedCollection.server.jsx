import SectionTitle from './SectionTitle.server';
import ProductCard from './ProductCard.server';
import {Slider, Slide} from './Slider.client';
import {useResponsive} from './providers/ResponsiveProvider.client';

const FeaturedCollection = (props) => {
  const {title, products} = props;
  const {screens} = useResponsive();
  // console.log('fep', products);
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
          {products.map((product, idx) => (
            <Slide key={idx}>
              <ProductCard
                product={product}
                mode="small-interactive"
                addToCart
                detailsLink
                className="mr-4"
              />
            </Slide>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default FeaturedCollection;
