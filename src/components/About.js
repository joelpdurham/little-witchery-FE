import React from 'react';

import styles from './Styles/About.css';

import ariel2 from '../assets/ariel2.png';
import { chronicalLink, authorSite } from '../magicStrings';

export const About = () => {
  return (
    <section>
      <h2>About</h2>
      <p><strong>Little Witchery</strong> is an online resource center and community dedicated to accessible everyday magic. We believe that a little bit of witchery, infused with practical ritual, imaginative play, and positive intention, can nurture and heal kids (and adults’ inner children).</p>

      <div className={styles.lists}>
        <h3>Little Witchery is for:</h3>
        <ul>
          <li>Kids who love magical stories and want to become witches themselves.</li>
          <li>Adults who want to nurture their inner child, harness creativity, or have fun through re-learning how to play.</li> 
          <li>Parents looking for imaginative activities for their children.</li> 
          <li>Teachers looking for hands-on and empowering ways to inspire students.</li> 
          <li>The magically curious.</li> 
        </ul>
      </div>

      <div className={styles.lists}>
        <h3>Our Values:</h3>
        <ul>
          <li>Imagination and play are sacred rights that deserve to be nurtured.</li>
          <li>Witchery can be accessible, simple, and practical.</li>
          <li>Magic is for anyone and everyone. It it is for people of any age, gender, sex, race, ethnicity,  disability, sexuality, religion, color, size, and country of origin.</li> 
        </ul>
      </div>

      <p>Little Witchery is here to help you bring a bit more magic into your life. You deserve mystery and enchantment every day: just a little witchery.</p>

      <div>
        <h2>About The Creator Behind Little Witchery</h2>
        <div className={styles.creator}>
          <img className={styles.arielPic} src={ariel2} alt='Ariel in the garden' />
          <p><strong>Ariel Kusby</strong> is a writer, children&apos;s bookseller, and practicing witch. She is the author of <a href={chronicalLink} 
            rel="noopener noreferrer" 
            target="_blank">
             The Little Witch’s Book of Spells</a> (Chronicle Books, August 2020), a magical handbook for children 8 to 12 years old. Her work is inspired by folklore, writing rituals, herbalism, and the power of imaginative play. She lives in Portland, Oregon where she studies magic at the Blue Iris Mystery School. To learn more about her other writing projects, visit <a href={authorSite} 
            rel="noopener noreferrer" 
            target="_blank">www.arielkusby.com</a>.</p>
        </div>
      </div>
    </section>
  );
};
