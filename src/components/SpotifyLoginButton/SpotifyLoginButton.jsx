import React from 'react';
import CSSModules from 'react-css-modules';

import ENDPOINTS from '../../constants/ApiEndpoints';
import APICONSTANTS from '../../constants/ApiConstants';

import styles from './SpotifyLoginButton.module.scss';

const SpotifyLoginButton = () => {
  return (
    <div styleName='base'>
      <a
        href={ENDPOINTS.auth(
          APICONSTANTS.clientId,
          APICONSTANTS.redirectUri,
          APICONSTANTS.scopes
        )}
      >
        Login to Spotify
      </a>
    </div>
  );
};

export default CSSModules(SpotifyLoginButton, styles);
