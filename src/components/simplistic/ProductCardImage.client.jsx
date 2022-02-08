import LazyLoad from './LazyLoad.client';

const ProductCardImage = (props) => {
  const {image} = props;
  const imageSmall = image?.replace('.png', '_500x.png');
  return (
    <div
      className="relative bg-grey border border-dark aspect-w-1 aspect-h-1 overflow-hidden"
      key={image}
    >
      <LazyLoad
        asBackground
        // adaptiveSize
        src={imageSmall}
        // srcSet={imageSet}
        className="product-image w-full h-full bg-cover bg-no-repeat bg-center translate-y-0 transition-all group-hover:scale-150"
      />
    </div>
  );
};

export default ProductCardImage;
