import React from 'react';

import styles from './Styles/Featured.css';

export const Featured = () => {

  return (
    <section className={styles.featured}>
      <h2>Buy the Book</h2>
      <img src='https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1587492225l/50998822.jpg' />
      <p>An enchanting compendium of spells, potions, and activities for kids ages 8 to 12 years old.</p>
    </section>
  );
}