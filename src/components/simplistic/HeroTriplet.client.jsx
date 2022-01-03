import {useRef} from 'react';

import {Slider, Slide} from './Slider.client';

const HeroTriplet = (props) => {
  const {data} = props;
  const {bgImage, carousel} = data;
  // const [currentSlide, setCurrentSlide] = useState(0);
  const mainSlider = useRef();
  const secondSlider = useRef();
  const thirdSlider = useRef();

  const handleSlideChange = (slide) => {
    if (secondSlider && secondSlider.current) {
      const nextSlide = slide + 1 === carousel.length ? 0 : slide + 1;
      setTimeout(() => {
        secondSlider?.current?.goToSlide(nextSlide);
      }, 200);
    }
    if (thirdSlider && thirdSlider.current) {
      const nextSlide = slide + 2 === carousel.length ? 0 : slide + 2;
      setTimeout(() => {
        thirdSlider?.current?.goToSlide(nextSlide);
      }, 400);
    }
  };

  return (
    <div className="3xl:container 3xl:mx-auto relative">
      <div className="w-full h-full absolute z-30 flex items-center justify-center group">
        <div className="linear-wipe leading-[.75em] text-[8em] md:text-[14em] font-extrabold transition-all opacity-100 group-hover:opacity-0">
          Tune Me In
        </div>
      </div>
      <div
        className="w-full bg-cover bg-no-repeat bg-center h-[80vh] md:h-[80vh] md:min-h-[700px] md:max-h-[1300px] flex items-center justify-between overflow-hidden"
        style={{backgroundImage: `url('${bgImage.url}?w=1200')`}}
      >
        <div className="w-1/3 h-full hidden md:flex items-center justify-end">
          <div
            className="w-3/5 translate-x-4 -translate-y-24 z-10"
            style={{height: 400}}
          >
            <Slider
              ref={secondSlider}
              sliderConfig={{
                slides: {
                  perView: 1,
                  spacing: 0,
                },
                drag: false,
                loop: true,
                initial: 1,
              }}
            >
              {carousel.map((slide, idx) => (
                <Slide key={idx}>
                  <div
                    className="w-full h-full bg-center bg-cover bg-no-repeat"
                    style={{backgroundImage: `url('${slide.image.url}?w=900')`}}
                  />
                </Slide>
              ))}
            </Slider>
          </div>
        </div>
        <div className="w-[90%] mx-auto md:w-1/3 h-full flex items-center">
          <div className="w-full" style={{height: '90%'}}>
            <Slider
              ref={mainSlider}
              sliderConfig={{
                slides: {
                  perView: 1,
                  spacing: 0,
                },
                drag: false,
                loop: true,
                initial: 0,
              }}
              onSlideChange={handleSlideChange}
              autoplay
            >
              {carousel.map((slide, idx) => (
                <Slide key={idx}>
                  <div
                    className="w-full h-full bg-center bg-cover bg-no-repeat"
                    style={{
                      backgroundImage: `url('${slide.image.url}?w=900')`,
                    }}
                  />
                </Slide>
              ))}
            </Slider>
          </div>
        </div>
        <div className="w-1/3 h-full hidden md:flex items-center justify-start">
          <div
            className="w-3/5 -translate-x-4 translate-y-24 z-10"
            style={{height: 400}}
          >
            <Slider
              ref={thirdSlider}
              sliderConfig={{
                slides: {
                  perView: 1,
                  spacing: 0,
                },
                drag: false,
                loop: true,
                initial: 2,
              }}
            >
              {carousel.map((slide, idx) => (
                <Slide key={idx}>
                  <div
                    className="w-full h-full bg-center bg-cover bg-no-repeat"
                    style={{backgroundImage: `url('${slide.image.url}?w=900')`}}
                  />
                </Slide>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTriplet;
