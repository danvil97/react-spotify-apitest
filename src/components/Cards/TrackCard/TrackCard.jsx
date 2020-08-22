import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './TrackCard.module.scss';
import { getTimeFromMs } from '../../../utils/getTime';

const TrackCard = ({ track }) => {
  const album = track.album;
  const artist = track.artists.map((el) => (
    <a href={el.external_urls.spotify}>{el.name} </a>
  ));
  const trackLength = getTimeFromMs(track.duration_ms);
  const trackName = track.name;
  const trackLink = track.external_urls.spotify;
  const trackPopularity = track.popularity;

  return (
    <div styleName='base'>
      <div styleName='cover'>
        <img src={album.images[0].url} alt={album.name + ' cover'} />
        <div styleName='badge-length'>{trackLength}</div>
        <div styleName='badge-popularity'>
          {trackPopularity}
          <span role='img' aria-label='Fire emoji'>
            🔥
          </span>
        </div>
      </div>
      <div styleName='trackInfo'>
        <span>{artist}</span>
        <a href={trackLink}>{trackName}</a>
        <a href={album.external_urls.spotify}>{album.name}</a>
      </div>
    </div>
  );
};

export default CSSModules(TrackCard, styles);
