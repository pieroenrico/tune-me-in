const ProductCardOptions = (props) => {
  const {options, selectedOptions, onSelectedOption} = props;
  const mode = options.name;
  return (
    <div className="product-selector text-2xl flex items-center">
      <div className="font-extrabold mr-4">{options.name}</div>
      <div className="options flex items-center font-thin">
        {options.values.map((value, i) =>
          mode === 'Color' ? (
            <SwatchColor
              key={i}
              optionName={options.name}
              onSelectedOption={onSelectedOption}
              selectedOptions={selectedOptions}
              value={value}
            />
          ) : (
            <SwatchText
              key={i}
              optionName={options.name}
              onSelectedOption={onSelectedOption}
              selectedOptions={selectedOptions}
              value={value}
              last={i < options.values.length - 1}
            />
          ),
        )}
      </div>
    </div>
  );
};

const SwatchText = (props) => {
  const {value, selectedOptions, onSelectedOption, optionName, last} = props;
  return (
    <button
      type="button"
      onClick={() => onSelectedOption(optionName, value)}
      className={`option cursor-pointer mr-1 after:pl-1  ${
        selectedOptions[optionName] === value ? `font-bold` : `font-thin`
      } ${last ? `after:content-['/'] after:font-thin` : ''}`}
    >
      {value}
    </button>
  );
};

const SwatchColor = (props) => {
  const {value, selectedOptions, onSelectedOption, optionName} = props;
  return (
    <button
      type="button"
      onClick={() => onSelectedOption(optionName, value)}
      className={`option mr-2 rounded-full w-6 h-6 cursor-pointer border ${
        selectedOptions[optionName] === value ? `border-dark` : `border-gray`
      } bg-product-${value.toLowerCase()}`}
    />
  );
};

export default ProductCardOptions;
