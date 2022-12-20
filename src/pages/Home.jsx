import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStorageData, removeStorageData } from '../helpers';
import { USER_STORE_KEY, PATH } from '../constants';
import AuthContext from '../context/authContext';

export default function Home() {
  const navigate = useNavigate();
  const [, setAuth] = useContext(AuthContext);
  const userStoreData = JSON.parse(getStorageData(USER_STORE_KEY));

  const hendleLogout = () => {
    removeStorageData(USER_STORE_KEY);
    navigate(PATH.auth);
    setAuth(prev => !prev);
  };

  return (
    <>
      <h1 className="app-section__title">Home Page!</h1>
      <a className="underline underline-offset-1" href="/some-wrong-link">
        Test error link
      </a>
      {userStoreData && (
        <div>
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
          <button type="button" className="btn" onClick={hendleLogout}>
            Logout
          </button>
        </div>
      )}
    </>
  );
}
