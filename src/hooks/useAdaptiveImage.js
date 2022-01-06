import {useEffect, useState} from 'react';

const preferredSizes = [200, 400, 600, 900, 1200, 1600];

const useAdaptiveImage = (imageRef, adaptiveSize) => {
  const [boundingRect, setBoundingRect] = useState(null);
  const [preferredWidth, setPreferredWidth] = useState(null);
  const [isAdaptive, setIsAdaptive] = useState(false);
  const [screenDimensions, setScreenDimensions] = useState(null);

  const setAdaptiveValues = (boundingClientRect) => {
    const currentSize =
      boundingClientRect?.width - (boundingClientRect?.width % 100);

    const preferredSize = preferredSizes.reduce((prev, curr) =>
      Math.abs(curr - currentSize) < Math.abs(prev - currentSize) ? curr : prev,
    );

    setBoundingRect(boundingClientRect);
    setPreferredWidth(preferredSize);
    setIsAdaptive(adaptiveSize);
  };

  const handleResize = () => {
    setScreenDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (adaptiveSize) {
      setAdaptiveValues(imageRef?.getBoundingClientRect());
    }
  }, [imageRef, screenDimensions]);

  return {boundingRect, isAdaptive, preferredWidth};
};

export default useAdaptiveImage;
