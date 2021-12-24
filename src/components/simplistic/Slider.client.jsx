import {useState, forwardRef, useImperativeHandle, useEffect} from 'react';
import {useKeenSlider} from 'keen-slider/react';
import IconArrowRight from '../icons/IconArrowRight.client';
import IconArrowLeft from '../icons/IconArrowLeft.client';
import 'keen-slider/keen-slider.min.css';

const Slider = forwardRef((props, ref) => {
  const {
    sliderConfig,
    onSlideChange,
    className,
    showArrowsOnHover,
    arrows,
    autoplay,
    autoplayInterval,
  } = props;

  useImperativeHandle(ref, () => ({
    goToSlide(slide) {
      propsRef.current.moveToIdx(slide);
    },
    next() {
      if (autoplay) stopAutoplay();
      propsRef.current.next();
    },
    prev() {
      if (autoplay) stopAutoplay();
      propsRef.current.prev();
    },
  }));

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, propsRef] = useKeenSlider({
    ...sliderConfig,
    slideChanged(slider) {
      if (onSlideChange) onSlideChange(slider.track.details.rel);
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      if (onSlideChange) onSlideChange(slider.track.details.rel);
      setLoaded(true);
    },
  });

  /** autoplay */
  const [autoplayTimeout, setAutoplayTimeout] = useState();
  const [nextTick, setNextTick] = useState(0);
  const [ticking, setTicking] = useState(autoplay);
  useEffect(() => {
    if (loaded && ticking) {
      const autoplayTimeout = setTimeout(() => {
        propsRef?.current?.next();
        setNextTick(nextTick + 1);
      }, autoplayInterval);
      setAutoplayTimeout(autoplayTimeout);
    }
  }, [loaded, nextTick, ticking]);
  const stopAutoplay = () => {
    setTicking(false);
    clearTimeout(autoplayTimeout);
  };

  /**
   * this cleans up variables
   */
  useEffect(() => {
    return () => {
      console.log('cleanup');
      setLoaded(false);
    };
  }, []);

  return (
    <section
      className={`carousel w-full h-full relative ${className || ''} ${
        showArrowsOnHover && `group`
      }`}
    >
      <div className={`slider-wrapper w-full h-full ${!loaded && 'invisible'}`}>
        <div ref={sliderRef} className="keen-slider w-full h-full">
          {props.children}
        </div>
      </div>
      {loaded && propsRef?.current && arrows && (
        <div
          className={`arrows w-full absolute top-1/2 -translate-y-1/2 flex items-center justify-between ${
            showArrowsOnHover &&
            `opacity-0 transition-all group-hover:opacity-100`
          }`}
        >
          <button
            className="left w-8 h-8"
            onClick={(e) => {
              if (autoplay) stopAutoplay();
              e.stopPropagation() || propsRef.current?.prev();
            }}
            disabled={true ? false : currentSlide === 0}
          >
            <IconArrowLeft />
          </button>
          <button
            className="right w-8 h-8"
            onClick={(e) => {
              if (autoplay) stopAutoplay();
              e.stopPropagation() || propsRef.current?.next();
            }}
            disabled={
              true
                ? false
                : currentSlide ===
                  propsRef?.current.track.details?.slides?.length - 1
            }
          >
            <IconArrowRight />
          </button>
        </div>
      )}
    </section>
  );
});

const Slide = (props) => {
  return (
    <div className="slide keen-slider__slide h-full w-full">
      {props.children}
    </div>
  );
};

Slider.defaultProps = {
  arrows: false,
  showArrowsOnHover: false,
  autoplay: false,
  autoplayInterval: 3000,
};

export {Slider, Slide};
