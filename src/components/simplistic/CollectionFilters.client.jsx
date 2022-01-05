import {useState, useEffect} from 'react';
import {useServerState} from '@shopify/hydrogen/client';

const CollectionFilters = (props) => {
  const {filters, allFilters, size, color} = props;

  const [showAllFilters] = useState(allFilters);
  const [allFilterKeys, setFilterKeys] = useState();

  // eslint-disable-next-line @shopify/prefer-early-return
  useEffect(() => {
    if (!showAllFilters) {
      console.log('running filters');
      setFilterKeys(filters);
    }
  }, [showAllFilters]);

  const {setServerState} = useServerState();
  return (
    <>
      {allFilterKeys?.map((filterKey, idx) =>
        filterKey.id === 'Color' ? (
          <div className="w-full" key={idx}>
            <div className="border-b border-dark flex items-center justify-between py-2 px-4">
              <h3 className="uppercase font-bold font-main-display text-dark text-3xl">
                {filterKey.id}
              </h3>
              {color && (
                <button
                  type="button"
                  className="text-xs text-dark"
                  onClick={(event) => {
                    event.preventDefault();
                    setServerState('currentPage', 0);
                    setServerState(filterKey.id.toLowerCase(), null);
                  }}
                >
                  Clear
                </button>
              )}
            </div>
            <div className="flex flex-wrap px-4 pt-4 pb-2">
              {filterKey.values.map((value, vdx) => (
                <button
                  type="button"
                  key={vdx}
                  className={`mr-2 mb-2 w-6 h-6 flex items-center justify-center border border-dark ${
                    color === value ? `opacity-100` : `opacity-50`
                  } leading-[100%] bg-product-${value.toLowerCase()}`}
                  onClick={(event) => {
                    event.preventDefault();
                    setServerState('currentPage', 0);
                    setServerState(filterKey.id.toLowerCase(), value);
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full border-b border-dark" key={idx}>
            <div className="border-b border-dark flex items-center justify-between py-2 px-4">
              <h3 className="uppercase font-bold font-main-display text-dark text-3xl">
                {filterKey.id}
              </h3>
              {size && (
                <button
                  type="button"
                  className="text-xs text-dark"
                  onClick={(event) => {
                    event.preventDefault();
                    setServerState('currentPage', 0);
                    setServerState(filterKey.id.toLowerCase(), null);
                  }}
                >
                  Clear
                </button>
              )}
            </div>
            <div className="flex flex-wrap px-4 pt-4 pb-2">
              {filterKey.values.map((value, vdx) => (
                <button
                  type="button"
                  key={vdx}
                  className={`mr-2 mb-2 p-1 flex items-center justify-center border border-dark ${
                    size === value ? `opacity-100` : `opacity-50`
                  } leading-[100%]`}
                  onClick={(event) => {
                    event.preventDefault();
                    setServerState('currentPage', 0);
                    setServerState(filterKey.id.toLowerCase(), value);
                  }}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        ),
      )}
    </>
  );
};

export default CollectionFilters;
