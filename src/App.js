import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CSSModules from 'react-css-modules';

import { setToken } from './store/actions/tokenActions';
import { getHash } from './utils/getHash';

import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';

import styles from './App.module.scss';
import './assets/styles/main.scss';

function App() {
  const apiToken = useSelector((state) => state.tokenReducer.token);
  const dispatch = useDispatch();
  const setApiToken = useCallback((token) => dispatch(setToken(token)), [
    dispatch,
  ]);

  useEffect(() => {
    if (localStorage.getItem('spotify_token'))
      setApiToken(localStorage.getItem('spotify_token'));
    else {
      const hash = getHash();
      if (hash.access_token) {
        setApiToken(hash.access_token);
        localStorage.setItem('spotify_token', hash.access_token);
        // TODO Clear url from responce parameters
      }
    }
  });

  return (
    <>
      {!apiToken && <LoginPage />}
      {apiToken && <MainPage />}
    </>
  );
}

export default CSSModules(App, styles);
