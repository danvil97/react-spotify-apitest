import React from 'react';
import CSSModules from 'react-css-modules';

import Header from '../../components/Header/Header';
import SearchForm from '../../components/SearchForm/SearchForm';
import ArtistsList from '../../components/Lists/ArtistsList/ArtistsList';

import MOCK_DATA from '../../constants/mockedData';

import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <>
      <Header />
      <div styleName='base'>
        <SearchForm />
        <ArtistsList artists={MOCK_DATA.artists} />
      </div>
    </>
  );
};

export default CSSModules(MainPage, styles);
