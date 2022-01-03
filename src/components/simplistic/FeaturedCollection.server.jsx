import DragBadge from './DragBadge.server';
import SectionTitle from './SectionTitle.server';
import ProductCard from './ProductCard.client';
import {Slider, Slide} from './Slider.client';
import {useResponsive} from './providers/ResponsiveProvider.client';

const FeaturedCollection = (props) => {
  const {title, products} = props;
  const {screens} = useResponsive();
  // console.log('fep', products);

  return (
    <div className="dragable-collection">
      <SectionTitle title={title} />
      <div className="py-4 pl-4 w-full 3xl:container 3xl:mx-auto 3xl:border-l 3xl:border-r 3xl:border-dark relative">
        <DragBadge />
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
          {products.map((product) => (
            <Slide key={product._id}>
              <ProductCard
                key={product._id}
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
    </div>
  );
};

export default FeaturedCollection;
