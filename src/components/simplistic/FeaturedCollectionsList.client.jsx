import {useServerState} from '@shopify/hydrogen/client';
const FeaturedCollectionsList = (props) => {
  const {collections, selectedCollection} = props;
  const {setServerState} = useServerState();
  return (
    <ul>
      {collections.map((collection, idx) => (
        <li key={idx}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setServerState('selectedFeaturedCollection', collection.handle);
            }}
            className={`text-big font-main-display uppercase ${
              selectedCollection === collection.handle
                ? `text-black`
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
