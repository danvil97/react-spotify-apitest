import React from 'react';
import CSSModules from 'react-css-modules';

import Header from '../../components/Header/Header';

import styles from './MainPage.module.scss';
import SearchForm from '../../components/SearchForm/SearchForm';

const MainPage = () => {
  return (
    <>
      <Header />
      <SearchForm />
    </>
  );
};

export default CSSModules(MainPage, styles);
