/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Auth({ handleAuth }) {
  return (
    <>
      <h1 className="app-section__title">Auth Page</h1>
      <ul className="flex flex-col items-center gap-4 my-4">
        <li>
          <Link
            onClick={handleAuth}
            to="/auth/login"
            className="block w-48 py-2 px-3 rounded text-center bg-green-800"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            onClick={handleAuth}
            to="/auth/signup"
            className="block w-48 py-2 px-3 rounded text-center bg-teal-700"
          >
            Signup
          </Link>
        </li>
      </ul>
    </>
  );
}
