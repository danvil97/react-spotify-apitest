import React from 'react';
import CSSModules from 'react-css-modules';

import FormRadioButton from '../FormRadioButton/FormRadioButton';

import styles from './TypeButtons.module.scss';

const TypeButtons = ({ typeList }) => {
  return (
    <div styleName='base'>
      {typeList.map((type, idx) => (
        <FormRadioButton name='type' value={type.value} key={idx}>
          {type.name}
        </FormRadioButton>
      ))}
    </div>
  );
};

export default CSSModules(TypeButtons, styles);
