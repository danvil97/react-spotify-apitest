import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './PrimaryButton.module.scss';

const PrimaryButton = ({ children, onClick, withBorder }) => {
  return (
    <button styleName={withBorder ? 'base border' : 'base'} onClick={onClick}>
      {children}
    </button>
  );
};

export default CSSModules(PrimaryButton, styles, { allowMultiple: true });
