import React, { useEffect, useCallback } from 'react';
import CSSModules from 'react-css-modules';
import { useSelector, useDispatch } from 'react-redux';

import styles from './ArtistsList.module.scss';
import ArtistCard from '../../Cards/ArtistCard/ArtistCard';

import { search } from '../../../store/actions/artistsActions';

const ArtistsList = () => {
  const artists = useSelector((state) => state.artistsReducer.data);
  const apiToken = useSelector((state) => state.tokenReducer.token);
  const dispatch = useDispatch();
  const query = { q: 'bon iver' };
  const handleSearch = useCallback(
    (query, token) => dispatch(search(query, token)),
    [dispatch]
  );

  useEffect(() => {
    handleSearch(query, apiToken);
  }, []);

  return (
    <div styleName='base'>
      {artists.map((artist, idx) => {
        const artistObj = {
          name: artist.name,
          link: artist.external_urls.spotify,
          image: artist.images[0].url,
          genres: artist.genres,
        };
        return <ArtistCard artist={artistObj} key={idx} />;
      })}
    </div>
  );
};

export default CSSModules(ArtistsList, styles);
