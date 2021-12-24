const ProductCardPrice = (props) => {
  const {price} = props;
  return (
    <div className="product-price font-second font-extrabold text-dark text-4xl">
      ${price}
    </div>
  );
};

const ProductCardOptions = (props) => {
  const {title, options, mode} = props;

  return (
    <>
      {mode === 'swatch' ? (
        <div className="product-selector text-2xl flex items-center">
          <div className="font-extrabold mr-4">{title}</div>
          <div className="options flex items-center font-thin">
            {options.map((option) => {
              return (
                <div
                  className={`option mr-2 rounded-full w-6 h-6 cursor-pointer ${option}`}
                ></div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="product-selector text-2xl flex items-center">
          <div className="font-extrabold mr-4">{title}</div>
          <div className="options flex items-center font-thin">
            {options.map((option, i) => (
              <div
                className={`option  cursor-pointer mr-1 after:pl-1 ${
                  i < options.length - 1 ? `after:content-['/']` : ''
                }`}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

const ProductCardImage = (props) => {
  return (
    <div className="relative bg-grey border border-dark aspect-w-1 aspect-h-1 overflow-hidden">
      <div
        className={`product-image w-full h-full bg-cover bg-no-repeat bg-center translate-y-0 transition-all group-hover:scale-150`}
        style={{backgroundImage: `url('../../public/img/shirt.png')`}}
      ></div>
      {/* <div
        className={`w-full h-full absolute top-0 bg-cover bg-no-repeat bg-center transition-all translate-y-full delay-200 group-hover:translate-y-0`}
        style={{backgroundImage: `url('../../public/img/shirt2.png')`}}
      ></div> */}
    </div>
  );
};

const ProductCard = (props) => {
  const {className, addToCart, detailsLink, mode} = props;

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const colors = [
    'bg-product-red',
    'bg-product-green',
    'bg-product-blue',
    'bg-product-black',
  ];

  return (
    <div
      className={`product-card border border-dark p-4 transition-all bg-light-b group hover:bg-light-ff cursor-default ${className}`}
    >
      <ProductCardImage />

      <div className={`${mode === 'small-interactive' ? `relative` : ''}`}>
        <div className={`flex items-start justify-between mt-4`}>
          <div
            className={`${mode === 'small-interactive' ? `mb-6 relative` : ''}`}
          >
            <div
              className={`product-title font-main-heading text-5xl text-dark uppercase ${
                mode === 'small-interactive'
                  ? `opacity-100 transition-all group-hover:opacity-0`
                  : ''
              }`}
            >
              Autumn Blue
            </div>
            {mode !== 'small' && (
              <div
                className={`flex items-start justify-between mb-4 w-full ${
                  mode === 'small-interactive'
                    ? `absolute top-0 opacity-0 transition-all group-hover:opacity-100`
                    : mode === 'large'
                    ? `mt-4`
                    : ''
                }`}
              >
                <div className="product-options mb-4">
                  <ProductCardOptions title="Size" options={sizes} />
                  <ProductCardOptions
                    title="Colors"
                    options={colors}
                    mode="swatch"
                  />
                </div>
              </div>
            )}
          </div>
          <ProductCardPrice price={30} />
        </div>
      </div>

      <div
        className={`product-details font-light ${
          mode === 'large' ? `text-lg` : `truncate`
        }`}
      >
        Lorem ipsum / dolor sit amet / qui minim labore / adipisicing minim sint
        cillum sint consectetur cupidatat.
      </div>

      {addToCart && (
        <button class="cursor-pointer mt-4 bg-dark text-white uppercase w-full pt-3 pb-2 font-main-heading text-3xl transition-all hover:bg-primary">
          Add To Cart
        </button>
      )}

      {detailsLink && (
        <a href="" className="mt-4 text-center block font-light underline">
          View Product Details
        </a>
      )}
    </div>
  );
};

ProductCard.defaultProps = {
  addToCart: false,
  detailsLink: false,
  mode: 'large',
};

export default ProductCard;
