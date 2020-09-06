import React, { useCallback, useEffect } from 'react';
import CSSModules from 'react-css-modules';
import { useSelector, useDispatch } from 'react-redux';

import { getTimeFromMs } from '../../../utils/getTime';
import TrackCard from '../../Cards/TrackCard/TrackCard';

import styles from './TracksList.module.scss';
import { tracksSearch } from '../../../store/actions/tracksActions';

const TracksList = () => {
  const tracks = useSelector((state) => state.tracksReducer.data);
  const apiToken = useSelector((state) => state.tokenReducer.token);
  const dispatch = useDispatch();
  const query = { q: 'bon iver' };
  const handleSearch = useCallback(
    (query, token) => dispatch(tracksSearch(query, token)),
    [dispatch]
  );

  useEffect(() => {
    handleSearch(query, apiToken);
  },[]);

  return (
    <div styleName='base'>
      {tracks.map((track, idx) => {
        const trackObj = {
          link: track.external_urls.spotify,
          name: track.name,
          lengthString: getTimeFromMs(track.duration_ms),
          popularity: track.popularity,
          album: { image: track.album.images[0].url, name: track.album.name },
          artists: track.artists.map((el, idx) => (
            <a href={el.external_urls.spotify} key={idx}>
              {el.name}
            </a>
          )),
        };
        return <TrackCard track={trackObj} key={idx} />;
      })}
    </div>
  );
};

export default CSSModules(TracksList, styles);
