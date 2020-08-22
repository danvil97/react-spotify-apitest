import React from 'react';
import CSSModules from 'react-css-modules';

import FormSelect from '../FormSelect/FormSelect';
import TypeButtons from '../TypeButtons/TypeButtons';
import SearchField from '../SearchField/SearchField';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import { BsSearch } from 'react-icons/bs';

import SEARCH from '../../constants/searchButtons';
import styles from './SearchForm.module.scss';

const SearchForm = () => {
  return (
    <div styleName='base'>
      <div styleName='base__firstRow'>
        <SearchField placeholder='search text...' />
        <FormSelect optionsList={SEARCH.limitList} />
      </div>
      <div styleName='base__secondRow'>
        <TypeButtons typeList={SEARCH.typeList} />
        <div styleName='searchButton'>
          <PrimaryButton withBorder>
            <BsSearch />
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default CSSModules(SearchForm, styles);
