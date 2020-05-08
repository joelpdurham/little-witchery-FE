import React from 'react';

import styles from '../Styles/Socials.css';

export const Socials = () => {
  const intsagramImg = 'https://image.flaticon.com/icons/png/512/87/87390.png';
  const instagramLink = 'https://www.instagram.com/little_witchery/';
  const youtubeImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/YouTube_dark_icon_%282017%29.svg/1200px-YouTube_dark_icon_%282017%29.svg.png';
  const youtubeLink = 'https://www.youtube.com/channel/UC9YUHEICYy9FbVaskuCDl-Q';

  return (
    <div className={styles.socials}>
      <a href={instagramLink} rel="noopener noreferrer" target="_blank"><img src={intsagramImg} /></a>
      <a href={youtubeLink} rel="noopener noreferrer" target="_blank"><img src={youtubeImg} /></a>
    </div>
  );
}