import React, { useState, useEffect } from 'react';
import CSSModules from 'react-css-modules';

import { getHash } from './utils/getHash';

import SpotifyLoginButton from './components/SpotifyLoginButton/SpotifyLoginButton';

import styles from './App.module.scss';
import './assets/styles/main.scss';

function App() {
  const [apiToken, setApiToken] = useState();

  useEffect(() => {
    const hash = getHash();
    if (hash.access_token) setApiToken(hash.access_token);
  });

  return (
    <>
      {!apiToken && <SpotifyLoginButton />}
      {apiToken && <h1>Hello my dear buddy!</h1>}
    </>
  );
}

export default CSSModules(App, styles);
