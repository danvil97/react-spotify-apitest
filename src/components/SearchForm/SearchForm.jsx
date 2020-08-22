import React from 'react';
import CSSModules from 'react-css-modules';

import FormSelect from '../FormSelect/FormSelect';
import FormCheckbox from '../FormCheckbox/FormCheckbox';
import TypeButtons from '../TypeButtons/TypeButtons';
import SearchField from '../SearchField/SearchField';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { BsSearch } from 'react-icons/bs';

import SEARCH from '../../constants/searchButtons';
import styles from './SearchForm.module.scss';

const SearchForm = () => {
  return (
    <div styleName='base'>
      <div styleName='searchBox'>
        <SearchField placeholder='search text...' />
        <FormSelect optionsList={SEARCH.limitList} />
        <PrimaryButton withBorder>
          <BsSearch />
        </PrimaryButton>
      </div>
      <FormCheckbox>Checkbox test</FormCheckbox>
      <TypeButtons typeList={SEARCH.typeList} />
    </div>
  );
};

export default CSSModules(SearchForm, styles);
