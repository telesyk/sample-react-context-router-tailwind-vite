import React from 'react';
import { useRoutes } from 'react-router-dom';
import { PATH } from './constants';
import { getRelativePath } from './helpers';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import Auth from './pages/Auth';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';

function Routes() {
  const element = useRoutes([
    {
      path: getRelativePath(PATH.home),
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: getRelativePath(PATH.about),
          element: <About />,
        },
        {
          path: getRelativePath(PATH.profile),
          element: <Profile />,
        },
        {
          path: getRelativePath(PATH.auth),
          children: [
            {
              index: true,
              element: <Auth />,
            },
            {
              path: getRelativePath(PATH.login),
              element: <Login />,
            },
            {
              path: getRelativePath(PATH.signup),
              element: <Signup />,
            },
          ],
        },
        {
          path: getRelativePath(PATH.notfound),
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return element;
}

export default Routes;
