/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../constants';

export default function ErrorPage() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10000);

  useEffect(() => {
    if (countdown < 0) navigate(PATH.home);
    const interval = setInterval(() => setCountdown(prev => prev - 1000), 1000);
    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <>
      <h1 className="app-section__title">Oops!</h1>
      <p className="text-center text-gray-300">Page Not Found</p>
      <p className="my-8 text-center">Get back to Home page in</p>
      <div className="mx-auto my-8 flex justify-center items-center w-32 h-32 rounded-full border-5 bg-rose-800 text-rose-100 text-5xl">
        {countdown / 1000}
      </div>
    </>
  );
}
