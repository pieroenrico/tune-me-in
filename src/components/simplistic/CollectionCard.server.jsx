import {Link} from 'react-router-dom';
const CollectionCard = ({collection, odd}) => {
  const {title, slug, image} = collection;
  return (
    <Link to={`/collections/${slug.current}`}>
      <div
        className={`w-full p-4 border-b border-dark flex items-stretch ${
          odd ? `flex-row-reverse` : ``
        }`}
      >
        <div
          className="w-2/3 h-[600px] bg-grey border border-dark bg-center bg-cover bg-no-repeat"
          style={{backgroundImage: `url('${image.url}?w=900')`}}
        ></div>

        <div className="w-1/3 flex items-center justify-start">
          <div className="p-4">
            <h2 className="text-[6em] text-dark font-main-display uppercase leading-[.85em] mb-8">
              {title}
            </h2>
            <p>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi animcupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident.
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CollectionCard;
