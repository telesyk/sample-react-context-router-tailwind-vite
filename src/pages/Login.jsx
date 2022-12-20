import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/authContext';
import { PATH, FAKE_PROFILES } from '../constants';
import { checkUserAuth, setStorageData } from '../helpers';

export default function Login() {
  const [loginValues, setLoginValues] = useState({ email: '', password: '' });
  const [isValid, setValid] = useState(true);
  const [validText, setValidText] = useState('');
  const [, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();

  const checkValidation = values => {
    const { email, password } = values;
    if (email.length) {
      const registeredUser = checkUserAuth(email, FAKE_PROFILES);
      if (registeredUser) {
        if (registeredUser.password === password) {
          const stringifyUserData = JSON.stringify(registeredUser);
          setValid(true);
          setAuth(prev => !prev);
          setStorageData('current', stringifyUserData);
          navigate(PATH.home);
        } else {
          setValid(false);
          setValidText('Password is wrong.');
        }
      } else {
        setValid(false);
        setValidText('Email is not registered.');
      }
    } else {
      setValid(false);
      setValidText('Email is empty.');
    }
  };

  const handleEmailChange = e => {
    const { target } = e;
    setLoginValues(prevValues => ({ ...prevValues, email: target.value }));
  };

  const handlePasswordChange = e => {
    const { target } = e;
    setLoginValues(prevValues => ({ ...prevValues, password: target.value }));
  };

  const handleLogin = () => checkValidation(loginValues);

  const handleInputEnter = e => {
    if (e.keyCode !== 13) return;
    checkValidation(loginValues);
  };

  return (
    <>
      <h1 className="app-section__title">Login Page</h1>
      <div className="my-4">
        <input
          type="email"
          placeholder="example@email"
          className="block w-64 mx-auto py-2 px-3 rounded text-gray-900"
          value={loginValues.email}
          onChange={handleEmailChange}
          onKeyDown={handleInputEnter}
        />
      </div>
      <div className="my-4">
        <input
          type="password"
          placeholder="password"
          className="block w-64 mx-auto py-2 px-3 rounded text-gray-900"
          value={loginValues.password}
          onChange={handlePasswordChange}
          onKeyDown={handleInputEnter}
        />
      </div>
      <div className="my-4">
        <button
          type="button"
          className="block w-48 mx-auto py-2 px-3 rounded text-center bg-green-800"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
      {!isValid && (
        <div className="my-4 p-2 rounded bg-rose-300 text-orange-800">
          <span className="mr-2">{validText}</span>
          <Link className="underline" to={PATH.signup}>
            Registration
          </Link>
        </div>
      )}
    </>
  );
}
