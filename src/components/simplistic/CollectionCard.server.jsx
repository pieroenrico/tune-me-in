import {Link} from 'react-router-dom';

const CollectionCard = ({collection, odd}) => {
  const {title, slug, image} = collection;
  return (
    <Link to={`/collections/${slug.current}`}>
      <div
        className={`w-full p-4 border-b border-dark flex flex-col md:flex-row items-stretch group ${
          odd ? `md:flex-row-reverse` : ``
        }`}
      >
        <div
          className="w-full md:w-2/3 aspect-w-5 aspect-h-3 md:aspect-h-2 bg-grey border border-dark bg-center bg-cover bg-no-repeat md:grayscale md:transition-all md:group-hover:grayscale-0"
          style={{backgroundImage: `url('${image.url}?w=900')`}}
        />

        <div className="w-full md:w-1/3 flex items-center justify-start">
          <div className="py-4 md:p-4">
            <h2 className="text-[6em] text-dark font-main-display uppercase leading-[.85em] my-4 md:mt-0 md:mb-8">
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
