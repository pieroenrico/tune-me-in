import LazyLoad from './LazyLoad.client';

const CollectionHeader = ({image}) => {
  return (
    <div className="w-full p-4 3xl:container 3xl:mx-auto 3xl:border-l 3xl:border-r 3xl:border-dark">
      <LazyLoad
        asBackground
        src={`${image.url}?w=1200`}
        className="w-full aspect-w-4 aspect-h-3 md:aspect-h-2 bg-center bg-cover bg-no-repeat border border-dark"
      />
    </div>
  );
};
export default CollectionHeader;
