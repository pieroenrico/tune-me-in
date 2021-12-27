const ProductCardPrice = (props) => {
  const {price} = props;
  return (
    <div className="product-price font-second font-extrabold text-dark text-4xl">
      ${parseInt(price)}
    </div>
  );
};

export default ProductCardPrice;
