const BannerAnimated = (props) => {
  const {text, duration, times} = props;
  return (
    <div className="w-full bg-dark relative 3xl:container 3xl:mx-auto">
      <div className="w-full absolute z-10">
        <img src="/img/banner-fg.png" alt="" />
      </div>
      <div className="w-full h-full flex items-center absolute top-0 left-0">
        <div className="relative w-full h-full overflow-hidden">
          <div
            className="marquee text-[16rem] font-main-display text-white uppercase italic"
            style={{animationDuration: duration}}
          >
            {[...Array(times)].map((_, i) => (
              <span key={i}>{text}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        <img src="/img/banner-bg.jpg" alt="" />
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
