import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './ArtistCard.module.scss';

const ArtistCard = ({ artist }) => {
  return (
    <div styleName='base'>
      <img src={artist.image} alt={artist.name + ' image'} />
      <div>
        <a href={artist.link}>{artist.name}</a>
        <span>{artist.genres[0]}</span>
      </div>
    </div>
  );
};

ArtistCard.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }).isRequired,
};

export default CSSModules(ArtistCard, styles);
