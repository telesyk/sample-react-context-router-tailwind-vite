/* eslint-disable import/no-cycle */
import React from 'react';
import { Link } from 'react-router-dom';
import { routesConfig } from '../routesConfig';

export default function Navigation() {
  return (
    <div className="app-navbar">
      <div className="app-container">
        <nav className="app-nav">
          {routesConfig.map(
            route =>
              route.navigation && (
                <Link key={route.name} to={route.path}>
                  {route.name}
                </Link>
              )
          )}
        </nav>
      </div>
    </div>
  );
}
