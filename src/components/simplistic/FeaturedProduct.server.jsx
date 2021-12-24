const FeaturedProduct = (props) => {
  return (
    <div className="w-full border-t border-dark 3xl:container  3xl:mx-auto 3xl:border-l 3xl:border-r 3xl:border-dark">
      <div className="w-full flex items-stretch justify-between">
        <div className="w-1/3 py-4 pl-4 pr-2">
          <div className="sticky top-4">
            <h2 className="text-big font-main-display uppercase text-dark">
              Best Sound by our Partner
            </h2>
            <p className="font-light">
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi animcupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia.
            </p>
            <p className="font-semibold text-sm mt-4">
              Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
              commodo officia dolor Lorem duis laboris cupidatat officia
              voluptate.
            </p>
          </div>
        </div>
        <div className="w-2/3 p-4">
          <div
            className="border border-dark bg-grey aspect-w-3 aspect-h-2 bg-center bg-cover"
            style={{backgroundImage: `url('/img/headphones.jpg')`}}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
