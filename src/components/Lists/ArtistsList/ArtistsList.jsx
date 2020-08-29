import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './ArtistsList.module.scss';
import ArtistCard from '../../Cards/ArtistCard/ArtistCard';

const ArtistsList = ({ artists }) => {
  return (
    <div styleName='base'>
      {artists.items.map((artist, idx) => {
        const artistObj = {
          name: artist.name,
          link: artist.external_urls.spotify,
          image: artist.images[0].url,
          genres: artist.genres,
        };
        return <ArtistCard artist={artistObj} key={idx} />;
      })}
    </div>
  );
};

export default CSSModules(ArtistsList, styles);
