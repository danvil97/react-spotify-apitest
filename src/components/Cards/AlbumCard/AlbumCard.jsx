import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './AlbumCard.module.scss';

const AlbumCard = ({ album }) => {
  return (
    <div styleName='base'>
      <div styleName='cover'>
        <img src={album.image} alt={album.name + ' image'} />
        <div styleName='badge-trackCount'>{album.tracksCount}</div>
        <div styleName='badge-year'>{album.year}</div>
      </div>

      <div>
        <a href={album.link}>{album.name}</a>
        {album.artists}
      </div>
    </div>
  );
};

AlbumCard.propTypes = {
  album: PropTypes.shape({
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tracksCount: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    artists: PropTypes.array.isRequired,
  }).isRequired,
};

export default CSSModules(AlbumCard, styles);
