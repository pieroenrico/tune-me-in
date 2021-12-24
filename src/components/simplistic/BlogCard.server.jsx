const BlogCardImage = (props) => {
  return (
    <div className="relative bg-grey border border-secondary aspect-w-2 aspect-h-1 overflow-hidden">
      <div
        className={`product-image w-full h-full bg-cover bg-no-repeat bg-center translate-y-0 transition-all`}
      ></div>
    </div>
  );
};

const BlogCard = (props) => {
  const {className} = props;

  return (
    <div
      className={`product-card border border-secondary p-4 transition-all bg-light-b group hover:bg-light-ff ${className}`}
    >
      <BlogCardImage />

      <div>
        <div className={`flex items-start justify-between mt-4`}>
          <div>
            <div
              className={`product-title font-main-heading text-5xl text-secondary uppercase`}
            >
              This is the title of the post
            </div>
          </div>
        </div>
      </div>

      <div className={`product-details font-light text-lg`}>
        Lorem ipsum / dolor sit amet / qui minim labore / adipisicing minim sint
        cillum sint consectetur cupidatat.
      </div>
    </div>
  );
};

BlogCard.defaultProps = {
  addToCart: false,
  detailsLink: false,
  mode: 'large',
};

export default BlogCard;
