import {useState, useRef} from 'react';
import {Slider, Slide} from './Slider.client';

const HeroTriplet = (props) => {
  const {images} = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const mainSlider = useRef();
  const secondSlider = useRef();
  const thirdSlider = useRef();

  const handleSlideChange = (slide) => {
    if (secondSlider && secondSlider.current) {
      secondSlider.current.goToSlide(slide);
    }
    if (thirdSlider && thirdSlider.current) {
      thirdSlider.current.goToSlide(slide);
    }
  };

  return (
    <div className="3xl:container 3xl:mx-auto">
      <div
        className="w-full bg-cover bg-no-repeat bg-center h-[60vh] min-h-[1000px] flex items-center justify-between overflow-hidden"
        style={{backgroundImage: `url('../../public/img/bg1b.jpg')`}}
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
                loop: false,
                initial: 1,
              }}
            >
              {images.map((image, idx) => (
                <Slide key={idx}>
                  <div
                    className="w-full h-full bg-center bg-cover bg-no-repeat"
                    style={{backgroundImage: `url('${image.image.url}')`}}
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
                loop: false,
                initial: 0,
              }}
              onSlideChange={handleSlideChange}
              autoplay
            >
              {images.map((image, idx) => (
                <Slide key={idx}>
                  <div
                    className="w-full h-full bg-center bg-cover bg-no-repeat"
                    style={{backgroundImage: `url('${image.image.url}')`}}
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
                loop: false,
                initial: 2,
              }}
            >
              {images.map((image, idx) => (
                <Slide key={idx}>
                  <div
                    className="w-full h-full bg-center bg-cover bg-no-repeat"
                    style={{backgroundImage: `url('${image.image.url}')`}}
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
