/* eslint-disable react/prop-types */
import React from 'react';
import Navigation from './Navigation';

export default function Layout({ children }) {
  return (
    <div className="app">
      <Navigation />
      <div className="app-container py-5">{children}</div>
    </div>
  );
}
