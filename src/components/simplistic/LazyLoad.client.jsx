import {useState, useEffect} from 'react';

const placeholder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';

const LazyLoad = (props) => {
  const {src, alt, className, asBackground, threshold, rootMargin, children} =
    props;

  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState();

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc === placeholder) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src);
              }
            });
          },
          {
            threshold,
            rootMargin,
          },
        );
        observer.observe(imageRef);
      } else {
        setImageSrc(src);
      }
    }
    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  });

  return asBackground ? (
    <LazyLoadBackground
      setImageRef={setImageRef}
      className={className}
      imageSrc={imageSrc}
    >
      {children}
    </LazyLoadBackground>
  ) : (
    <LazyLoadImage
      setImageRef={setImageRef}
      className={className}
      imageSrc={imageSrc}
      alt={alt}
    />
  );
};

const LazyLoadImage = (props) => {
  const {className, imageSrc, setImageRef, alt} = props;
  return (
    <img src={imageSrc} alt={alt} ref={setImageRef} className={className} />
  );
};

const LazyLoadBackground = (props) => {
  const {className, imageSrc, setImageRef, children} = props;
  return (
    <div
      ref={setImageRef}
      className={className}
      style={{backgroundImage: `url('${imageSrc}')`}}
    >
      {children}
    </div>
  );
};

LazyLoad.defaultProps = {
  asBackground: false,
  threshold: 0.01,
  rootMargin: '75%',
};

export default LazyLoad;
