import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ROUTES, USER_STORE_KEY, PATH } from '../constants';
import AuthContext from '../context/authContext';
import { getStorageData } from '../helpers';

export default function Navigation() {
  const [isAuth] = useContext(AuthContext);
  const userStoreData = JSON.parse(getStorageData(USER_STORE_KEY));
  const navClassName = !isAuth ? 'app-nav' : 'app-nav is-auth';

  const renderMainMenu = () => {
    const filtered = ROUTES.filter(route => isAuth === route.isLogged);

    return filtered.map(route => (
      <NavLink key={route.name} className="app-nav__link" to={route.path}>
        {route.name}
      </NavLink>
    ));
  };

  const renderUser = () => {
    const { photoUrl, firstName } = userStoreData;
    return (
      <Link to={PATH.profile} className="block">
        <div className="w-10 h-10 rounded-full overflow-hidden border-4">
          <img src={photoUrl} alt={firstName} className="" />
        </div>
      </Link>
    );
  };

  const renderhNav = () =>
    !isAuth ? (
      renderMainMenu()
    ) : (
      <>
        <div className="app-main-menu">{renderMainMenu()}</div>
        {renderUser()}
      </>
    );

  return (
    <div className="app-navbar">
      <div className="app-container">
        <nav className={navClassName}>{renderhNav()}</nav>
      </div>
    </div>
  );
}
