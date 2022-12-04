import React from 'react';
import { useRoutes } from 'react-router-dom';
import { routesConfig } from './routesConfig';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
];

const checkRoutesConfig = (config, routesConf) => {
  const unconfigured = config.filter((conf, idx) => {
    if (!conf) return;
    if (!routesConf[idx]) return;
    const elementName = routesConf[idx].element.type.name;
    // eslint-disable-next-line consistent-return
    return conf.name !== elementName;
  });
  return Boolean(unconfigured.length);
};

function ProblemRoutesError() {
  return (
    <div className="app">
      <div className="app-container">
        <h3 className="px-5 py-10 text-rouse-500 leading-8 text-center">
          App{' '}
          <code className="px-1 bg-gray-100 text-gray-700 rounded">routes</code>{' '}
          has problems in configurations
          <br />
          Check{' '}
          <code className="px-1 bg-gray-100 text-gray-700 rounded">
            routesConfig.js
          </code>{' '}
          or{' '}
          <code className="px-1 bg-gray-100 text-gray-700 rounded">
            routes.js
          </code>
        </h3>
      </div>
    </div>
  );
}

function Router() {
  const element = useRoutes(routes);
  const isProblemRoutes = checkRoutesConfig(routesConfig, routes);

  return !isProblemRoutes ? element : <ProblemRoutesError />;
}

export default Router;
