import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './SearchField.module.scss';

const SearchField = (field) => {

  return (
    <input
      type='search'
      styleName='base'
      placeholder='search text...'
      {...field.input}
    />
  );
};

export default CSSModules(SearchField, styles);
