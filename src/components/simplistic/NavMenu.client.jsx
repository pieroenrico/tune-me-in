import {Link} from 'react-router-dom';

const NavMenu = (props) => {
  const {homeLink, className} = props;
  return (
    <>
      {homeLink && <Link to="/">Home</Link>}
      <Link to="/about" className={className}>
        About
      </Link>
      <Link to="/collections/all-products" className={className}>
        T-Shirts
      </Link>
      <Link to="/collections" className={className}>
        Collections
      </Link>
      <Link to="/lifestyle" className={className}>
        Lifestyle
      </Link>
    </>
  );
};

export default NavMenu;
