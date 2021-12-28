import {Link} from '@shopify/hydrogen/client';

// import {useSettingsContext} from '../contexts/SettingsContext.server';

import PortableText from './PortableText.client';

export default function Footer() {
  // const data = useSettingsContext();
  return (
    <div className="w-full flex items-start justify-between p-4 border-t border-dark">
      <div className="w-3/5">
        <h2>Subscribe</h2>
      </div>
      <div className="w-1/5">
        <ul>
          <li>About</li>
          <li>Blog</li>
          <li>Fabrics</li>
        </ul>
      </div>
      <div className="w-1/5">
        <ul>
          <li>About</li>
          <li>Blog</li>
          <li>Fabrics</li>
        </ul>
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
