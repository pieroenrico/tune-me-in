const FeaturedCollectionsDropdown = (props) => {
  const {collections, selectedCollection, setSelectedCollection} = props;
  return (
    <div>
      <select
        value={selectedCollection}
        onChange={(event) => {
          event.preventDefault();
          setSelectedCollection(event.target.value);
        }}
        className="p-2 mx-auto bg-transparent border border-dark w-full text-2xl font-main-heading uppercase"
      >
        {collections.map((collection, idx) => (
          <option key={idx} value={collection.handle}>
            {collection.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FeaturedCollectionsDropdown;
