import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './App.module.scss';

import SpotifyLoginButton from './components/SpotifyLoginButton/SpotifyLoginButton';

import './assets/styles/main.scss';

function App() {
  return (
    <>
      <SpotifyLoginButton />
    </>
  );
}

export default CSSModules(App, styles);
