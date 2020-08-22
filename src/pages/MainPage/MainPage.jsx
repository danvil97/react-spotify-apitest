import React from 'react';
import CSSModules from 'react-css-modules';

import Header from '../../components/Header/Header';
import SearchForm from '../../components/SearchForm/SearchForm';
import ArtistsList from '../../components/Lists/ArtistsList/ArtistsList';
import TracksList from '../../components/Lists/TracksList/TracksList';

import MOCK_DATA from '../../constants/mockedData';

import styles from './MainPage.module.scss';
import PlaylistsList from '../../components/Lists/PlaylistsList/PlaylistsList';

const MainPage = () => {
  return (
    <>
      <Header />
      <div styleName='base'>
        <SearchForm />
        <ArtistsList artists={MOCK_DATA.artists} />
        <TracksList tracks={MOCK_DATA.tracks} />
        <PlaylistsList playlists={MOCK_DATA.playlists} />
      </div>
    </>
  );
};

export default CSSModules(MainPage, styles);
