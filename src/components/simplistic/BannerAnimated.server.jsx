const BannerAnimated = (props) => {
  const {data} = props;
  const {title, duration, repeat, bgImage, fgImage} = data;
  return (
    <div className="w-full bg-dark relative 3xl:container 3xl:mx-auto">
      <div className="w-full absolute z-10">
        <img src={fgImage.url} alt="" />
      </div>
      <div className="w-full h-full flex items-center absolute top-0 left-0">
        <div className="relative w-full h-full overflow-hidden">
          <div
            className="marquee text-[16rem] font-main-display text-white uppercase italic"
            style={{animationDuration: duration}}
          >
            {[...Array(repeat)].map((_, i) => (
              <span key={i}>{`${title} `}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        <img src={bgImage.url} alt="" />
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