const CollectionHeader = ({image}) => {
  return (
    <div className="w-full p-4">
      <div
        className="w-full h-[800px] bg-center bg-cover bg-no-repeat border border-dark "
        style={{backgroundImage: `url('${image.url}')`}}
      ></div>
    </div>
  );
};
export default CollectionHeader;
