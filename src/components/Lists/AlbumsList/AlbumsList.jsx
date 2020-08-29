import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './AlbumsList.module.scss';
import AlbumCard from '../../Cards/AlbumCard/AlbumCard';

const AlbumsList = ({ albums }) => {
  return (
    <div styleName='base'>
      {albums.items.map((album, idx) => {
        const albumObj = {
          image: album.images[0].url,
          link: album.external_urls.spotify,
          name: album.name,
          tracksCount: album.total_tracks,
          year: Number(album.release_date.slice(0, 4)),
          artists: album.artists.map((el, idx) => (
            <a href={el.external_urls.spotify} key={idx}>
              {el.name}
            </a>
          )),
        };
        return <AlbumCard album={albumObj} key={idx} />;
      })}
    </div>
  );
};

export default CSSModules(AlbumsList, styles);
