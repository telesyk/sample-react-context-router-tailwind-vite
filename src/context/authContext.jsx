/* eslint-disable react/prop-types */
import React, { useState, createContext } from 'react';
import { getStorageData } from '../helpers';
import { USER_STORE_KEY } from '../constants';

const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
  const userStoreData = getStorageData(USER_STORE_KEY);
  const isAuthUser = Boolean(userStoreData);

  return (
    <AuthContext.Provider value={useState(isAuthUser)}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider };
export default AuthContext;
