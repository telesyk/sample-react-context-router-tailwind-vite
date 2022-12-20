import React, { useContext } from 'react';
import { getStorageData, removeStorageData } from '../helpers';
import { USER_STORE_KEY } from '../constants';
import AuthContext from '../context/authContext';

export default function Profile() {
  const [, setAuth] = useContext(AuthContext);
  const userStoreData = JSON.parse(getStorageData(USER_STORE_KEY));

  const hendleLogout = () => {
    removeStorageData(USER_STORE_KEY);
    setAuth(prev => !prev);
  };

  return (
    userStoreData && (
      <>
        <h2 className="my-4 text-xl font-bold">
          Welcome {userStoreData.firstName}
        </h2>
        <img
          src={userStoreData.photoUrl}
          alt={userStoreData.firstName}
          className="app-profile__image"
        />
        <p>
          Full Name:{' '}
          <strong>
            {userStoreData.firstName} {userStoreData.lastName}
          </strong>
        </p>
        <p>
          User email: <strong>{userStoreData.email}</strong>
        </p>
        <p>
          User country: <strong>{userStoreData.country}</strong>
        </p>
        <p>
          User city: <strong>{userStoreData.city}</strong>
        </p>
        <button type="button" className="btn" onClick={hendleLogout}>
          Logout
        </button>
      </>
    )
  );
}
