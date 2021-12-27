import {useState, useRef} from 'react';
import {Slider, Slide} from './Slider.client';

const HeroTriplet = (props) => {
  const {data} = props;
  const {title, bgImage, carousel} = data;
  const [currentSlide, setCurrentSlide] = useState(0);
  const mainSlider = useRef();
  const secondSlider = useRef();
  const thirdSlider = useRef();

  const handleSlideChange = (slide) => {
    if (secondSlider && secondSlider.current) {
      const nextSlide = slide + 1 === carousel.length ? 0 : slide + 1;
      secondSlider.current.goToSlide(nextSlide);
    }
    if (thirdSlider && thirdSlider.current) {
      const nextSlide = slide + 2 === carousel.length ? 0 : slide + 2;
      thirdSlider.current.goToSlide(nextSlide);
    }
  };

  return (
    <div className="3xl:container 3xl:mx-auto">
      <div
        className="w-full bg-cover bg-no-repeat bg-center h-[60vh] min-h-[1000px] flex items-center justify-between overflow-hidden"
        style={{backgroundImage: `url('${bgImage.url}')`}}
      >
        <div className="w-1/3 h-full flex items-center justify-end">
          <div className="w-3/5 translate-x-4 z-10" style={{height: 400}}>
            <Slider
              ref={secondSlider}
              sliderConfig={{
                slides: {
                  perView: 1,
                  spacing: 0,
                },
                loop: true,
                initial: 1,
              }}
            >
              {carousel.map((slide, idx) => (
                <Slide key={idx}>
                  <div
                    className="w-full h-full bg-center bg-cover bg-no-repeat"
                    style={{backgroundImage: `url('${slide.image.url}')`}}
                  ></div>
                </Slide>
              ))}
            </Slider>
          </div>
        </div>
        <div className="w-1/3 h-full flex items-center">
          <div className="w-full" style={{height: 800}}>
            <Slider
              ref={mainSlider}
              sliderConfig={{
                slides: {
                  perView: 1,
                  spacing: 0,
                },
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
                    style={{backgroundImage: `url('${slide.image.url}')`}}
                  ></div>
                </Slide>
              ))}
            </Slider>
          </div>
        </div>
        <div className="w-1/3 h-full flex items-center justify-start">
          <div className="w-3/5 -translate-x-4 z-10" style={{height: 400}}>
            <Slider
              ref={thirdSlider}
              sliderConfig={{
                slides: {
                  perView: 1,
                  spacing: 0,
                },
                loop: true,
                initial: 2,
              }}
            >
              {carousel.map((slide, idx) => (
                <Slide key={idx}>
                  <div
                    className="w-full h-full bg-center bg-cover bg-no-repeat"
                    style={{backgroundImage: `url('${slide.image.url}')`}}
                  ></div>
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
