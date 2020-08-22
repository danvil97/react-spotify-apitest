import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './FormRadioButton.module.scss';

const FormRadioButton = ({ children, value, name }) => {
  return (
    <div styleName='base'>
      <input
        styleName='base__checkbox'
        name={name}
        id={'id_' + name + value}
        value={value}
        type='radio'
      />
      <label htmlFor={'id_' + name + value}>{children}</label>
    </div>
  );
};

export default CSSModules(FormRadioButton, styles, { allowMultiple: true });
