import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './PlaylistCard.module.scss';

const PlaylistCard = ({ playlist }) => {
  return (
    <div styleName='base'>
      <div styleName='cover'>
        <img src={playlist.images[0].url} alt={playlist.name + ' cover'} />
        <div styleName='badge-tracksCount'>{playlist.tracks.total}</div>
      </div>
      <div styleName='playlistInfo'>
        <a href={playlist.external_urls.spotify}>{playlist.name}</a>
        <a href={playlist.owner.external_urls.spotify}>
          {playlist.owner.display_name}
        </a>
      </div>
    </div>
  );
};

export default CSSModules(PlaylistCard, styles);
