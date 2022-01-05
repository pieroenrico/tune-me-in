import {NavLink} from 'react-router-dom';

const NavMenu = (props) => {
  const {homeLink, className} = props;
  return (
    <>
      {homeLink && (
        <NavLink exact to="/">
          Home
        </NavLink>
      )}
      <NavLink
        to="/about"
        className={className}
        activeClassName="font-semibold"
      >
        About
      </NavLink>
      <NavLink
        to="/collections/all-products"
        className={className}
        activeClassName="font-semibold"
      >
        Shirts
      </NavLink>
      <NavLink
        exact
        to="/collections"
        className={className}
        activeClassName="font-semibold"
      >
        Collections
      </NavLink>
      <NavLink
        to="/lifestyle"
        className={className}
        activeClassName="font-semibold"
      >
        Lifestyle
      </NavLink>
    </>
  );
};

export default NavMenu;
