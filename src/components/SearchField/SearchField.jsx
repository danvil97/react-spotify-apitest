import React, { useState } from 'react';
import CSSModules from 'react-css-modules';

import styles from './PrimaryButton.module.scss';

const SearchField = ({ placeholder, name }) => {
  const [fieldValue, setFieldValue] = useState('');
  const handleChange = (event) => {
    setFieldValue(event.target.value);
  };
  return (
    <input
      type='search'
      styleName='base'
      palceholder={placeholder}
      onChange={handleChange}
      value={fieldValue}
    />
  );
};

export default CSSModules(SearchField, styles);
