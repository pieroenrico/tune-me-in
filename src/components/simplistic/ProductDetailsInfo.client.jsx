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
              className={`uppercase font-xs font-semibold text-dark ${
                currentTab === idx ? 'opacity-100' : 'opacity-50'
              }`}
              onClick={(event) => {
                event.preventDefault();
                handleTabClick(idx);
              }}
            >
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
