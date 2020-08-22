import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './ArtistCard.module.scss';

const ArtistCard = ({ artist }) => {
  return (
    <div styleName='base'>
      <img src={artist.images[0].url} alt={artist.name + ' image'} />
      <div>
        <a href={artist.external_urls.spotify}>{artist.name}</a>
        <span>{artist.genres[0]}</span>
      </div>
    </div>
  );
};

export default CSSModules(ArtistCard, styles);
