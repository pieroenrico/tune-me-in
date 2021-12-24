import React, {
  useState,
  useMemo,
  useCallback,
  useContext,
  createContext,
} from 'react';
import Screens from '../../../responsive/Screens';
export const ResponsiveContext = createContext(null);

const ResponsiveProvider = ({children}) => {
  const [screens] = useState(Screens);

  const contextValue = useMemo(() => {
    return {
      screens: screens,
    };
  }, [screens]);

  return (
    <ResponsiveContext.Provider value={contextValue}>
      {children}
    </ResponsiveContext.Provider>
  );
};
export default ResponsiveProvider;

export function useResponsive() {
  return useContext(ResponsiveContext);
}
