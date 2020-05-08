import React from 'react';

import authorImg from '../assets/arielHeadshot.png';

import styles from './Styles/Featured.css';

export const Featured = () => {
  const amazonLink = 'https://www.goodreads.com/buy_buttons/12/follow?book_id=50998822&ref=x_gr_w_bb_sin&tag=x_gr_w_bb_sin-20';
  const bookImg = 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1587492225l/50998822.jpg';

  return (
    <section className={styles.featured}>
      <a href={amazonLink} rel="noopener noreferrer" target="_blank"><h2>Buy the Book</h2></a>
      <div>
        <img src={bookImg} />
        <img src={authorImg} />
      </div>
      <p>An enchanting compendium of spells, potions, and activities for kids ages 8 to 12 years old.</p>
    </section>
  );
};
