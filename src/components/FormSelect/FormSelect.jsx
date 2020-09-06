import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './FormSelect.module.scss';

const FormSelect = (field) => {

  return (
    <div styleName='base'>
      <select {...field.input}>
        {field.optionsList.map((option, idx) => (
          <option key={idx} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CSSModules(FormSelect, styles, { allowMultiple: true });
