import React from 'react';
import { useHistory } from 'react-router-dom';

export const LatestVideos = () => {
  const history = useHistory();

  const handleClick = () => history.push('/videos');

  return (
    <section>
      <a><h2 onClick={handleClick}>Latest Videos</h2></a>
      <iframe width="300" height="175" src='https://www.youtube.com/embed/7GnsL0if_6w' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'></iframe>
    </section>
  );
};
