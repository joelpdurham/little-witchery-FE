import React from 'react';
import { Featured } from './Featured';
import { LatestVideos } from './LatestVideos';
import { InstagramFeed } from './InstagramFeed';

import styles from './Styles/LandingPage.css';

export const LandingPage = () => {

  return (
    <section className={styles.landingPage}>
      <Featured />
      <LatestVideos />
      <InstagramFeed />
    </section>
  );
};