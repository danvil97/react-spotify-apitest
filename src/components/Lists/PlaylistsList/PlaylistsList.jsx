import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './PlaylistsList.module.scss';
import PlaylistCard from '../../Cards/PlaylistCard/PlaylistCard';

const PlaylistsList = ({ playlists }) => {
  return (
    <div styleName='base'>
      {playlists.items.map((playlist, idx) => (
        <PlaylistCard playlist={playlist} key={idx} />
      ))}
    </div>
  );
};

export default CSSModules(PlaylistsList, styles);
