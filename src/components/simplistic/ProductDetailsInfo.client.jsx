import {useRef, useState, useEffect} from 'react';

import ProductDetailsPlaylist from './ProductDetailsPlaylist.client';
import {Slider, Slide} from './Slider.client';

const ProductDetailsInfo = (props) => {
  const {tabs} = props;
  const tabsContent = useRef();

  const [currentTab, setCurrentTab] = useState(0);

  const handleTabClick = (id) => {
    setCurrentTab(id);
  };

  useEffect(() => {
    tabsContent?.current.goToSlide(currentTab);
  }, [currentTab]);

  return (
    <div className="w-full mt-8 product-info">
      <div className="border-b border-dark w-full pb-1 mb-1  flex items-center justify-start">
        {tabs.map((tab, idx) => (
          <div className="mr-6" key={idx}>
            <button
              type="button"
              className={`uppercase font-xs font-semibold text-dark flex items-center ${
                currentTab === idx ? 'opacity-100' : 'opacity-50'
              }`}
              onClick={(event) => {
                event.preventDefault();
                handleTabClick(idx);
              }}
            >
              {/* <div className="w-4 h-4 mr-2">
                <svg
                  id="Layer_1"
                  version="1.1"
                  viewBox="0 0 80 80"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <style type="text/css" />
                  <path
                    className="fill-current text-dark w-4 h-4"
                    d="M63.8,18.8c-1.1-1.4-9.4-2.5-13.7-5.8c0,0-0.6-0.2-1,0.3C47,16.4,44.9,19,40,19c-4.9,0-7-2.6-9.1-5.7  c-0.3-0.5-1-0.3-1-0.3c-4.3,3.2-12.6,4.4-13.7,5.8c-2.4,3.1-5.8,9.9-8.1,14.3c2.1,3.5,6.9,5.6,10.3,5.9c1.1-1.1,2.8-4.3,3.8-4.3  c0.5,0,1.5,3.4,1.5,10.7c0,5.5-1.8,16.6-1.8,20.1C26.2,67.1,35,67,40,67s13.8,0.1,18.1-1.5c0-3.5-1.8-14.6-1.8-20.1  c0-7.3,1-10.7,1.5-10.7c1,0,2.7,3.2,3.8,4.3c3.3-0.3,8.1-2.5,10.3-5.9C69.6,28.7,66.2,21.9,63.8,18.8z"
                  />
                </svg>
              </div> */}
              {tab.title}
            </button>
          </div>
        ))}
      </div>
      <Slider
        ref={tabsContent}
        sliderConfig={{
          slides: {
            perView: 1,
            spacing: 0,
          },
          loop: false,
          initial: 0,
        }}
      >
        {tabs.map((tab, idx) => (
          <Slide key={idx}>
            <div className="w-full pt-4">
              {tab.type === 'playlist' ? (
                <ProductDetailsPlaylist playlist={tab.data} />
              ) : (
                <div
                  className="font-light text-lg"
                  dangerouslySetInnerHTML={{
                    __html: tab.data.replace(
                      '<strong>',
                      '<strong class="font-semibold text-normal mt-3 leading-6 block">',
                    ),
                  }}
                />
              )}
            </div>
          </Slide>
        ))}
      </Slider>
    </div>
  );
};

export default ProductDetailsInfo;
