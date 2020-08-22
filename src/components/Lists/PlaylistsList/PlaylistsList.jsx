import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './PlaylistsList.module.scss';
import PlaylistCard from '../../Cards/PlaylistCard/PlaylistCard';

const PlaylistsList = ({ playlists }) => {
  return (
    <div styleName='base'>
      {playlists.items.map((playlist, idx) => {
        const playlistObj = {
          image: playlist.images[0].url,
          link: playlist.external_urls.spotify,
          name: playlist.name,
          tracksCount: playlist.tracks.total,
          owner: {
            name: playlist.owner.display_name,
            link: playlist.owner.external_urls.spotify,
          },
        };
        return <PlaylistCard playlist={playlistObj} key={idx} />;
      })}
    </div>
  );
};

export default CSSModules(PlaylistsList, styles);
