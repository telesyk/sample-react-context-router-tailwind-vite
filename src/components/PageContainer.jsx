import React, { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AuthContext from '../context/authContext';
import { PATH } from '../constants';

export default function PageContainer() {
  const navigate = useNavigate();
  const [isAuth] = useContext(AuthContext);

  useEffect(() => {
    if (!isAuth) {
      navigate(PATH.auth);
    }
  }, [isAuth]);

  return (
    <div className="app-section">
      <div className="app-container">
        <Outlet />
      </div>
    </div>
  );
}
