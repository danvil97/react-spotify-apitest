import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './SpotifyLoginButton.module.scss';

const SpotifyLoginButton = () => {
  return (
    <div styleName='base'>
      <button>Login to Spotify</button>
    </div>
  );
};

export default CSSModules(SpotifyLoginButton, styles);
