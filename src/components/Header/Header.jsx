import React from 'react';
import CSSModules from 'react-css-modules';
import { FaSpotify } from 'react-icons/fa';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header styleName='base'>
      <div styleName='logo'>
        <FaSpotify />
        <span>Spooty</span>
      </div>
    </header>
  );
};

export default CSSModules(Header, styles);
