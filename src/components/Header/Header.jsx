import React from 'react';
import CSSModules from 'react-css-modules';
import { FaSpotify } from 'react-icons/fa';

import PrimaryButton from '../PrimaryButton/PrimaryButton';

import styles from './Header.module.scss';

const Header = () => {
  const navigateToProfilePage = () => {
    window.location.push('/profile');
  };

  return (
    <header styleName='base'>
      <div styleName='logo'>
        <FaSpotify />
        <span>Spooty</span>
      </div>
      <div styleName='links'>
        <PrimaryButton onClick={navigateToProfilePage}>profile</PrimaryButton>
      </div>
    </header>
  );
};

export default CSSModules(Header, styles);
