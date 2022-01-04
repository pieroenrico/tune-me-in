import LazyLoad from './LazyLoad.client';

const ProductCardImage = (props) => {
  const {image} = props;
  const imageSmall = image?.replace('.png', '_500x.png');
  // console.log('image', image);
  return (
    <div
      className="relative bg-grey border border-dark aspect-w-1 aspect-h-1 overflow-hidden"
      key={image}
    >
      <LazyLoad
        asBackground
        src={imageSmall}
        className="product-image w-full h-full bg-cover bg-no-repeat bg-center translate-y-0 transition-all group-hover:scale-150"
      />
      {/*
      <div
        className="product-image w-full h-full bg-cover bg-no-repeat bg-center translate-y-0 transition-all group-hover:scale-150"
        style={{
          backgroundImage: `url('${imageSmall}')`,
        }}
      />
       <div
        className={`w-full h-full absolute top-0 bg-cover bg-no-repeat bg-center transition-all translate-y-full delay-200 group-hover:translate-y-0`}
        style={{backgroundImage: `url('../../public/img/shirt2.png')`}}
      ></div> */}
    </div>
  );
};

export default ProductCardImage;
