import LazyLoad from './LazyLoad.client';

const CollectionHeader = ({image, title}) => {
  return (
    <div className="w-full mb-4 border-b border-dark 3xl:container 3xl:mx-auto 3xl:border-l 3xl:border-r 3xl:border-dark">
      <LazyLoad
        asBackground
        // adaptiveSize
        src={`${image.url}?w=1200`}
        className="w-full aspect-w-4 aspect-h-3 md:aspect-h-2 bg-center bg-cover bg-no-repeat relative"
      >
        <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-huge text-light-b font-main-heading uppercase text-stroke">
            {title}
          </div>
        </div>
      </LazyLoad>
    </div>
  );
};
export default CollectionHeader;
