import React, { useCallback, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import { useSelector, useDispatch } from 'react-redux';

import styles from './AlbumsList.module.scss';
import AlbumCard from '../../Cards/AlbumCard/AlbumCard';

import { albumsSearch } from '../../../store/actions/albumsActions';

const AlbumsList = () => {
  const albums = useSelector((state) => state.albumsReducer.data);
  const apiToken = useSelector((state) => state.tokenReducer.token);
  const dispatch = useDispatch();
  const query = { q: 'bon iver' };
  const handleSearch = useCallback(
    (query, token) => dispatch(albumsSearch(query, token)),
    [dispatch]
  );

  useEffect(() => {
    handleSearch(query, apiToken);
  },[]);

  return (
    <div styleName='base'>
      {albums.map((album, idx) => {
        const albumObj = {
          image: album.images[0].url,
          link: album.external_urls.spotify,
          name: album.name,
          tracksCount: album.total_tracks,
          year: Number(album.release_date.slice(0, 4)),
          artists: album.artists.map((el, idx) => (
            <a href={el.external_urls.spotify} key={idx}>
              {el.name}
            </a>
          )),
        };
        return <AlbumCard album={albumObj} key={idx} />;
      })}
    </div>
  );
};

export default CSSModules(AlbumsList, styles);
