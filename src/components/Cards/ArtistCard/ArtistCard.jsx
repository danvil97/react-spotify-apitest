import React, { useState } from 'react';
import CSSModules from 'react-css-modules';

import styles from './ArtistCard.module.scss';

const ArtistCard = ({ artist }) => {
  const { name, link, genres, image } = artist;

  return (
    <div
      styleName='base'
      onClick={() => {
        console.log(link);
      }}
    >
      <img src={image} alt={name + ' image'} />
      <div>
        <a href={link}>{name}</a>
        <span>{genres[0]}</span>
      </div>
    </div>
  );
};

export default CSSModules(ArtistCard, styles);
