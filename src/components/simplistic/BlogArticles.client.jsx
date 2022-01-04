// import {useServerState} from '@shopify/hydrogen/client';
import {Link} from 'react-router-dom';

import LazyLoad from './LazyLoad.client';

const BlogArticles = (props) => {
  const {articles} = props;
  // const {setServerState} = useServerState();
  // onClick={(e) => {
  //           e.preventDefault();
  //           setServerState('selectedArticle', article.slug.current);
  //         }}
  return (
    <>
      {articles.map((article) => (
        <div
          className="w-full border border-secondary p-4 mb-4 cursor-pointer transition-all hover:bg-light-ff"
          key={article.slug.current}
        >
          <Link to={`/lifestyle/${article.slug.current}`}>
            <LazyLoad
              asBackground
              src={`${article.image.url}?w=600`}
              className="w-full h-[300px] bg-grey border border-secondary mb-4 bg-center bg-cover bg-no-repeat"
            />

            <h2 className="text-6xl text-secondary uppercase font-main-heading">
              {article.title}
            </h2>
            <p className="text-secondary">{article.extract}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default BlogArticles;
