import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './ArtistsList.module.scss';
import ArtistCard from '../../Cards/ArtistCard/ArtistCard';

const ArtistsList = ({ artists }) => {
  return (
    <div styleName='base'>
      {artists.items.map((artist, idx) => (
        <ArtistCard artist={artist} key={idx} />
      ))}
    </div>
  );
};

export default CSSModules(ArtistsList, styles);
