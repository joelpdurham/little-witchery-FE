import React, { useState } from 'react';

import styles from './Styles/Videos.css';

export const Videos = () => {
  //in the future this info will be pulled from an API
  const videoLinkArray = [
    {
      url: 'https://www.youtube.com/embed/7GnsL0if_6w',
      thumbnail: 'https://i.ytimg.com/vi/7GnsL0if_6w/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCKk__pbzeyAXv9hQCDLvqNn37HXQ'
    },
    {
      url: 'https://www.youtube.com/embed/gwpaA5HGo9k',
      thumbnail:'https://i.ytimg.com/vi/gwpaA5HGo9k/maxresdefault.jpg'
    },
    {
      url: 'https://www.youtube.com/embed/4Hg1Kudd_x4',
      thumbnail: 'https://i.ytimg.com/vi/4Hg1Kudd_x4/maxresdefault.jpg'
    }];

  const [currentVideo, setCurrentVideo] = useState(videoLinkArray[0].url);

  const allVideos = videoLinkArray.map(video => (
    <img onClick={() => setCurrentVideo(video.url)} key={video.url} width='200' src={video.thumbnail} />
  ));
  
  return (
    <section>
      <h1>Videos</h1>
      <iframe width='600' height='325' src={currentVideo} allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'></iframe>
      <div>
        <h2>Latest Videos</h2>
        <div className={styles.videoThumbnails}>
          {allVideos}
        </div>
      </div>
    </section>

    
  );
};
