import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './TrackCard.module.scss';

const TrackCard = ({ track }) => {
  return (
    <div styleName='base'>
      <div styleName='cover'>
        <img src={track.album.image} alt={track.album.name + ' cover'} />
        <div styleName='badge-length'>{track.lengthString}</div>
        <div styleName='badge-popularity'>
          {track.popularity}
          <span role='img' aria-label='Fire emoji'>
            🔥
          </span>
        </div>
      </div>
      <div styleName='trackInfo'>
        <span>{track.artists}</span>
        <a href={track.link}>{track.name}</a>
        <a href={track.album.link}>{track.album.name}</a>
      </div>
    </div>
  );
};

TrackCard.propTypes = {
  track: PropTypes.shape({
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    lengthString: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    album: PropTypes.shape({ image: PropTypes.string, name: PropTypes.string })
      .isRequired,
    artists: PropTypes.array.isRequired,
  }).isRequired,
};
export default CSSModules(TrackCard, styles);
