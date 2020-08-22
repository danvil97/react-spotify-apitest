import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './PlaylistCard.module.scss';

const PlaylistCard = ({ playlist }) => {
  return (
    <div styleName='base'>
      <div styleName='cover'>
        <img src={playlist.image} alt={playlist.name + ' cover'} />
        <div styleName='badge-tracksCount'>{playlist.tracksCount}</div>
      </div>
      <div styleName='playlistInfo'>
        <a href={playlist.link}>{playlist.name}</a>
        <a href={playlist.owner.link}>{playlist.owner.name}</a>
      </div>
    </div>
  );
};
PlaylistCard.propTypes = {
  playlist: PropTypes.shape({
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tracksCount: PropTypes.number.isRequired,
    owner: PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CSSModules(PlaylistCard, styles);
