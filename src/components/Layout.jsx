import React from 'react';
import { AuthContextProvider } from '../context/authContext';
import Navigation from './Navigation';
import PageContainer from './PageContainer';

export default function Layout() {
  return (
    <AuthContextProvider>
      <div className="app">
        <Navigation />
        <PageContainer />
      </div>
    </AuthContextProvider>
  );
}
