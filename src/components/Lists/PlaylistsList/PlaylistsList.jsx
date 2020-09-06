import React, { useCallback, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import { useSelector, useDispatch } from 'react-redux';

import styles from './PlaylistsList.module.scss';
import PlaylistCard from '../../Cards/PlaylistCard/PlaylistCard';

import { search } from '../../../store/actions/playlistsActions';

const PlaylistsList = () => {
  const playlists = useSelector((state) => state.playlistsReducer.data);
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
      {playlists.map((playlist, idx) => {
        const playlistObj = {
          image: playlist.images[0].url,
          link: playlist.external_urls.spotify,
          name: playlist.name,
          tracksCount: playlist.tracks.total,
          owner: {
            name: playlist.owner.display_name,
            link: playlist.owner.external_urls.spotify,
          },
        };
        return <PlaylistCard playlist={playlistObj} key={idx} />;
      })}
    </div>
  );
};

export default CSSModules(PlaylistsList, styles);
