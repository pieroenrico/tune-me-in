const ProductCardOptions = (props) => {
  const {options, selectedOptions, onSelectedOption} = props;
  const mode = options.name === 'Color' ? 'swatch' : 'selector';

  return (
    <>
      {mode === 'swatch' ? (
        <div className="product-selector text-2xl flex items-center">
          <div className="font-extrabold mr-4">{options.name}</div>
          <div className="options flex items-center font-thin">
            {options.values.map((value, i) => {
              return (
                <button
                  key={i}
                  onClick={() => onSelectedOption(options.name, value)}
                  className={`option mr-2 rounded-full w-6 h-6 cursor-pointer border ${
                    selectedOptions[options.name] === value
                      ? `border-dark`
                      : `border-gray`
                  } bg-product-${value.toLowerCase()}`}
                ></button>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="product-selector text-2xl flex items-center">
          <div className="font-extrabold mr-4">{options.name}</div>
          <div className="options flex items-center font-thin">
            {options.values.map((value, i) => (
              <button
                key={i}
                onClick={() => onSelectedOption(options.name, value)}
                className={`option cursor-pointer mr-1 after:pl-1 font-thin ${
                  selectedOptions[options.name] === value && `font-bold`
                } ${
                  i < options.values.length - 1
                    ? `after:content-['/'] after:font-thin`
                    : ''
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCardOptions;
