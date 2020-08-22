import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './PrimaryButton.module.scss';

const PrimaryButton = ({ children, onClick }) => {
  return (
    <button styleName='base' onClick={onClick}>
      {children}
    </button>
  );
};

export default CSSModules(PrimaryButton, styles);
