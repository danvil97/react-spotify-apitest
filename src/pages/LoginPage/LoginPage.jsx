import React from 'react';
import CSSModules from 'react-css-modules';
import { FaSpotify } from 'react-icons/fa';

import ENDPOINTS from '../../constants/ApiEndpoints';
import APICONSTANTS from '../../constants/ApiConstants';

import styles from './LoginPage.module.scss';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

const SpotifyLoginButton = () => {
  const navigateToSpotifyLogin = () => {
    window.location.assign(
      ENDPOINTS.auth(
        APICONSTANTS.clientId,
        APICONSTANTS.redirectUri,
        APICONSTANTS.scopes
      )
    );
  };
  return (
    <div styleName='base'>
      <FaSpotify value={{ className: styles.reactIcon }} />
      <span>Please login using spotify</span>
      <PrimaryButton onClick={navigateToSpotifyLogin}>Login</PrimaryButton>
    </div>
  );
};

export default CSSModules(SpotifyLoginButton, styles);
