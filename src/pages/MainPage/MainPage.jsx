import React from 'react';
import CSSModules from 'react-css-modules';

import Header from '../../components/Header/Header';
// import FormCheckbox from '../../components/FormCheckbox/FormCheckbox';

import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default CSSModules(MainPage, styles);
