import React from 'react';

export const InstagramFeed = () => {
  const instaLink = 'https://www.instagram.com/little_witchery/';
  return (
    <section>
      <a href={instaLink} 
        rel="noopener noreferrer" 
        target="_blank">
        <h2>@little_witchery</h2>
      </a>
      <p>instagram feed here</p>
    </section>
  );
};
