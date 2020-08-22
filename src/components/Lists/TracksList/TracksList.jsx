import React from 'react';
import CSSModules from 'react-css-modules';

import TrackCard from '../../Cards/TrackCard/TrackCard';

import styles from './TracksList.module.scss';

const TracksList = ({ tracks }) => {
  return (
    <div styleName='base'>
      {tracks.items.map((track, idx) => (
        <TrackCard track={track} key={idx} />
      ))}
    </div>
  );
};

export default CSSModules(TracksList, styles);
