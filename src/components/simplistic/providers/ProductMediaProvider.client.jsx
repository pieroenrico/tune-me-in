import React, {
  useState,
  useMemo,
  useCallback,
  useContext,
  createContext,
} from 'react';

export const ProductMediaContext = createContext(null);

const ProductMediaProvider = ({value, children}) => {
  const [media] = useState(value);

  const contextValue = useMemo(() => {
    return {
      media: media,
    };
  }, [media]);

  return (
    <ProductMediaContext.Provider value={contextValue}>
      {children}
    </ProductMediaContext.Provider>
  );
};
export default ProductMediaProvider;

export function useProductMedia() {
  return useContext(ProductMediaContext);
}
