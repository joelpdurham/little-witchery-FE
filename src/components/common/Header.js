import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
// import logo from '../../assets/logo2.png';
import styles from '../Styles/Header.css';

export const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.navLinks}>
        <NavLink to='/'>About</NavLink>
        <NavLink to='/'>Book of Spells</NavLink>
        <NavLink to='/'>Shop</NavLink>
      </div>
      <div className={styles.logo}>
        <h1>Little Witchery</h1>
        <img src={logo} />
      </div>
      <div className={styles.navLinks}>
        <NavLink to='/'>Blog</NavLink>
        <NavLink to='/'>Videos</NavLink>
        <NavLink to='/'>Contact</NavLink>
      </div>
    </section>
  );
};
