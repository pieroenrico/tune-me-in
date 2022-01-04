import {Link} from 'react-router-dom';

import LazyLoad from './LazyLoad.client';

const BlogRelatedArticleCard = (props) => {
  const {article} = props;
  const {title, extract, image, slug} = article;
  return (
    <div className="w-full border-t border-dark 3xl:container  3xl:mx-auto 3xl:border-l 3xl:border-r 3xl:border-dark">
      <Link to={`/lifestyle/${slug.current}`}>
        <div className="w-full flex flex-col-reverse md:flex-row items-stretch justify-between">
          <div className="w-full md:w-1/3 py-4 pl-4 pr-2">
            <div className="sticky top-4">
              <h2 className="text-6xl md:text-big font-main-display uppercase text-secondary">
                {title}
              </h2>
              <p className="font-light">{extract}</p>
            </div>
          </div>
          <div className="w-full md:w-2/3 p-4">
            <LazyLoad
              asBackground
              src={`${image.url}?w=900`}
              className="border border-dark bg-grey aspect-w-3 aspect-h-2 bg-center bg-cover"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogRelatedArticleCard;
