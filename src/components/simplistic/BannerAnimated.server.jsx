import LazyLoad from './LazyLoad.client';

const BannerAnimated = (props) => {
  const {data} = props;
  const {title, duration, repeat, bgImage, fgImage} = data;
  return (
    <div className="w-full bg-dark relative 3xl:container 3xl:mx-auto">
      <div className="w-full absolute z-10">
        <LazyLoad src={fgImage.url} alt={title} className="w-full" />
      </div>
      <div className="w-full h-full flex items-center absolute top-0 left-0">
        <div className="relative w-full h-full overflow-hidden">
          <div
            className="marquee text-[8rem] md:text-[16rem] font-main-display text-white uppercase italic"
            style={{animationDuration: duration}}
          >
            {[...Array(repeat)].map((_, i) => (
              <span key={i}>{`${title} `}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        <LazyLoad src={bgImage.url} alt={title} className="w-full" />
      </div>
    </div>
  );
};

BannerAnimated.defaultProps = {
  text: '',
  duration: '100s',
  times: 10,
};

export default BannerAnimated;
