import React from 'react';
import CSSModules from 'react-css-modules';

import { getTimeFromMs } from '../../../utils/getTime';
import TrackCard from '../../Cards/TrackCard/TrackCard';

import styles from './TracksList.module.scss';

const TracksList = ({ tracks }) => {
  return (
    <div styleName='base'>
      {tracks.items.map((track, idx) => {
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
