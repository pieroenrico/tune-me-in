const FeaturedCollectionsList = (props) => {
  const {collections, selectedCollection, setSelectedCollection} = props;
  return (
    <ul>
      {collections.map((collection, idx) => (
        <li key={idx}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setSelectedCollection(collection.handle);
            }}
            style={
              selectedCollection === collection.handle
                ? {
                    textDecorationThickness: '1px',
                    textUnderlineOffset: '8px',
                  }
                : {}
            }
            className={`text-big font-main-display uppercase ${
              selectedCollection === collection.handle
                ? `text-black underline`
                : `text-dark`
            }`}
          >
            {collection.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FeaturedCollectionsList;
