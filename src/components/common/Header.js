import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
import styles from '../Styles/Header.css';

export const Header = () => {
  return (
    <section className={styles.header}>
      <NavLink to='/'>About</NavLink>
      <NavLink to='/'>Book of Spells</NavLink>
      <NavLink to='/'>Shop</NavLink>
      <div className={styles.logo}>
        <h1>Little Witchery</h1>
        <img src={logo} />
      </div>
      <NavLink to='/'>Blog</NavLink>
      <NavLink to='/'>Videos</NavLink>
      <NavLink to='/'>Contact</NavLink>
    </section>
  );
};
