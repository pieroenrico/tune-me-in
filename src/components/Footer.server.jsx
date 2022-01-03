// import {useSettingsContext} from '../contexts/SettingsContext.server';

import {Link} from 'react-router-dom';

export default function Footer() {
  // const data = useSettingsContext();
  return (
    <div className="w-full flex flex-col md:flex-row items-start justify-between p-4 border-t border-dark 3xl:container 3xl:mx-auto 3xl:border-r 3xl:border-l 3xl:border-dark">
      <div className="w-full md:w-1/5 mb-4 md:mb-0">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/lifestyle">Lifestyle</Link>
          </li>
          <li>
            <Link to="/collections">All Collections</Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:block w-full md:w-1/5 ">
        <ul>
          <li>
            <Link to="/collections/best-sellers">Best Sellers</Link>
          </li>
          <li>
            <Link to="/collections/love-and-friends">Love & Friends</Link>
          </li>
          <li>
            <Link to="/collections/moments">Moments</Link>
          </li>
          <li>
            <Link to="/collections/mood">Mood</Link>
          </li>
          <li>
            <Link to="/collections/my-generation">My Generation</Link>
          </li>
          <li>
            <Link to="/collections/remember-the-time">Remember</Link>
          </li>
          <li>
            <Link to="/collections/seasons">Seasons</Link>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-3/5 flex items-start justify-start md:justify-end">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl uppercase font-main-display text-dark">
            Subscribe
          </h2>
          <form className="w-full">
            <div className="flex items-stretch my-4 w-full ">
              <input
                type="text"
                autoComplete="email"
                placeholder="Email"
                className="bg-light-ff border text-dark border-dark p-2 flex-grow"
              />
              <button
                type="button"
                className="uppercase text-white font-main-heading text-2xl px-6 pt-1 flex items-center text-center bg-black"
              >
                Subscribe
              </button>
            </div>
            <p className="w-full md:w-1/2 font-light">
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
  // return (
  //   <footer role="contentinfo" className="border-t border-black mt-32 p-4">
  //     {/* Links */}
  //     {data?.footer?.links?.map((link) => {
  //       if (link._type === 'linkExternal') {
  //         return (
  //           <div key={link?._key}>
  //             <a
  //               href={link.url}
  //               rel="noreferrer"
  //               target={link.newWindow ? '_blank' : '_self'}
  //             >
  //               {link.title}
  //             </a>
  //           </div>
  //         );
  //       }
  //       if (link._type === 'linkInternal') {
  //         if (!link.slug) {
  //           return null;
  //         }

  //         return (
  //           <div key={link?._key}>
  //             <Link to={link.slug}>{link.title}</Link>
  //           </div>
  //         );
  //       }
  //       return null;
  //     })}

  //     {data?.footer?.text && <PortableText blocks={data.footer.text} />}
  //   </footer>
  // );
}
