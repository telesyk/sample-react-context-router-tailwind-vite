import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../constants';
import AuthContext from '../context/authContext';

export default function Navigation() {
  const [isAuth] = useContext(AuthContext);

  const renderNav = () => {
    const filtered = ROUTES.filter(route => isAuth === route.isLogged);

    return filtered.map(route => (
      <NavLink key={route.name} className="app-nav__link" to={route.path}>
        {route.name}
      </NavLink>
    ));
  };

  return (
    <div className="app-navbar">
      <div className="app-container">
        <nav className="app-nav">{renderNav()}</nav>
      </div>
    </div>
  );
}
