import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './AlbumCard.module.scss';

const AlbumCard = ({ album }) => {
  const artists = album.artists.map((el) => (
    <a href={el.external_urls.spotify}>{el.name} </a>
  ));

  return (
    <div styleName='base'>
      <div styleName='cover'>
        <img src={album.images[0].url} alt={album.name + ' image'} />
        <div styleName='badge-trackCount'>{album.total_tracks}</div>
        <div styleName='badge-year'>{album.release_date.slice(0, 4)}</div>
      </div>

      <div>
        <a href={album.external_urls.spotify}>{album.name}</a>
        {artists}
      </div>
    </div>
  );
};

export default CSSModules(AlbumCard, styles);
