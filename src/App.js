import React, { useState, useEffect } from 'react';
import CSSModules from 'react-css-modules';

import { getHash } from './utils/getHash';

import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';

import styles from './App.module.scss';
import './assets/styles/main.scss';

function App() {
  const [apiToken, setApiToken] = useState();

  useEffect(() => {
    if (localStorage.getItem('spotify_token'))
      setApiToken(localStorage.getItem('spotify_token'));
    else {
      const hash = getHash();
      if (hash.access_token) {
        setApiToken(hash.access_token);
        localStorage.setItem('spotify_token', hash.access_token);
      }
    }
  }, [apiToken]);

  return (
    <>
      {!apiToken && <LoginPage />}
      {apiToken && <MainPage />}
    </>
  );
}

export default CSSModules(App, styles);
