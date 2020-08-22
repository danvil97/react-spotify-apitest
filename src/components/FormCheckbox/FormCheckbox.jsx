import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './FormCheckbox.module.scss';

const FormCheckbox = ({ children, value, name }) => {
  return (
    <div styleName='base'>
      <input
        styleName='base__checkbox'
        name={name}
        id={'id_' + name}
        value={value}
        type='checkbox'
      />
      <label htmlFor={'id_' + name}>{children}</label>
    </div>
  );
};

export default CSSModules(FormCheckbox, styles, { allowMultiple: true });
