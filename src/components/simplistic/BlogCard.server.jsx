import {Link} from 'react-router-dom';

import LazyLoad from './LazyLoad.client';

const BlogCardImage = (props) => {
  const {image} = props;
  return (
    <div className="relative bg-grey border border-secondary aspect-w-2 aspect-h-1 overflow-hidden">
      <LazyLoad
        adBackground
        src={`${image.url}?w=900`}
        className="product-image w-full h-full bg-cover bg-no-repeat bg-center translate-y-0 transition-all"
      />
    </div>
  );
};

const BlogCard = (props) => {
  const {className, data} = props;
  const {article} = data;
  return (
    <div
      className={`product-card border border-secondary p-4 transition-all bg-light-b group hover:bg-light-ff ${className}`}
    >
      <Link to={`/lifestyle/${article.slug}`}>
        <BlogCardImage image={article.image} />

        <div>
          <div className="flex items-start justify-between mt-4">
            <div>
              <div className="product-title font-main-heading text-5xl text-secondary uppercase">
                {article.title}
              </div>
            </div>
          </div>
        </div>

        <div className="product-details font-light text-lg">
          {article.extract.substr(0, 120)}...
        </div>
      </Link>
    </div>
  );
};

BlogCard.defaultProps = {
  addToCart: false,
  detailsLink: false,
  mode: 'large',
};

export default BlogCard;
