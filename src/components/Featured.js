import React from 'react';

import authorImg from '../assets/arielHeadshot.png';

import styles from './Styles/Featured.css';
import { chronicalLink, goodreadsSite, bookImg, authorSite } from '../magicStrings';

export const Featured = () => {
  console.log(bookImg)

  return (
    <section className={styles.featured}>
      <a href={chronicalLink} rel="noopener noreferrer" target="_blank"><h2>Buy the Book</h2></a>
      <div>
        <a href={goodreadsSite} rel="noopener noreferrer" target="_blank">
          <img src={bookImg} alt='The Little Witch&apos;s Book of Spells by Ariel Kusby, book cover' />
        </a>
        <a href={authorSite} rel="noopener noreferrer" target="_blank">
          <img src={authorImg} alt='Ariel Kusby headshot' />
        </a>
      </div>
      <p>An enchanting compendium of spells, potions, and activities for kids ages 8 to 12 years old.</p>
    </section>
  );
};
