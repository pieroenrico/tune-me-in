const HeroTriplet = (props) => {
  return (
    <div className="3xl:container 3xl:mx-auto">
      <div
        className="w-full bg-cover bg-no-repeat bg-center h-[60vh] min-h-[1000px] flex items-center justify-between overflow-hidden"
        style={{backgroundImage: `url('../../public/img/bg1.jpg')`}}
      >
        <div className="w-1/3 h-full flex items-center justify-end">
          <div
            className="w-3/5 aspect-w-7 aspect-h-6 bg-center bg-cover translate-x-4 z-10"
            style={{backgroundImage: `url('/img/header2.jpg')`}}
          ></div>
        </div>
        <div className="w-1/3 h-full flex items-center">
          <div
            className="w-full aspect-w-5 aspect-h-8 bg-center bg-cover"
            style={{backgroundImage: `url('/img/header1.jpg')`}}
          ></div>
        </div>
        <div className="w-1/3 h-full flex items-center justify-start">
          <div
            className="w-3/5 aspect-w-7 aspect-h-6 bg-center bg-cover -translate-x-4 z-10"
            style={{backgroundImage: `url('/img/header3.jpg')`}}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HeroTriplet;
