import {Slider, Slide} from './Slider.client';
import BlogCard from './BlogCard.server';
import {useResponsive} from './providers/ResponsiveProvider.client';
const FeaturedBlog = (props) => {
  const {data} = props;
  const {title, featuredArticles} = data;
  const {screens} = useResponsive();
  return (
    <>
      <div className="w-full px-4 pt-6 pb-0 border-t border-b border-secondary flex items-center 3xl:container 3xl:mx-auto 3xl:border-l 3xl:border-r 3xl:border-dark">
        <h2 className="font-main-display text-7xl md:text-huge uppercase text-secondary">
          {title}
        </h2>
      </div>
      <div className="py-4 pl-4 3xl:mx-auto 3xl:container 3xl:border-l 3xl:border-r 3xl:border-dark">
        <Slider
          sliderConfig={{
            slides: {
              perView: 1,
            },
            loop: false,
            initial: 0,
            breakpoints: {
              [screens.md.mediaQuery]: {
                slides: {
                  perView: 2.2,
                },
              },
              [screens.lg.mediaQuery]: {
                slides: {
                  perView: 3.2,
                },
              },
            },
          }}
          onSlideChange={() => false}
        >
          {featuredArticles.map((article, idx) => (
            <Slide key={idx}>
              <BlogCard className="mr-4" data={article} />
            </Slide>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default FeaturedBlog;
