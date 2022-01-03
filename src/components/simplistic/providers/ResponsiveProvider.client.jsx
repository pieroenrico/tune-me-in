import React, {useState, useMemo, useContext, createContext} from 'react';

import Screens from '../../../responsive/Screens';

export const ResponsiveContext = createContext(null);

const ResponsiveProvider = ({children}) => {
  const [screens] = useState(Screens);

  const getCurrentScreen = () => {
    if (typeof window !== 'undefined') {
      return {
        width: window.screen.width,
        height: window.screen.height,
        devicePixelRation: window.devicePixelRatio,
      };
    }
    return null;
  };

  const contextValue = useMemo(() => {
    return {
      screens,
      getCurrentScreen,
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
