import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './AlbumsList.module.scss';
import AlbumCard from '../../Cards/AlbumCard/AlbumCard';

const AlbumsList = ({ albums }) => {
  return (
    <div styleName='base'>
      {albums.items.map((album, idx) => (
        <AlbumCard album={album} key={idx} />
      ))}
    </div>
  );
};

export default CSSModules(AlbumsList, styles);
