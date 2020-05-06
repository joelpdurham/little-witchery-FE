import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';
// import logo from '../../assets/logo2.png';
import styles from '../Styles/Header.css';

export const Header = () => {
  const history = useHistory();

  const handleClick = () => history.push('/');

  return (
    <section className={styles.header}>
      <div className={styles.navLinks}>
        <NavLink to='/about' activeStyle={{ backgroundColor: 'white' }}>About</NavLink>
        <NavLink to='/'>Book of Spells</NavLink>
        <NavLink to='/'>Shop</NavLink>
      </div>
      <div onClick={handleClick} className={styles.logo}>
        <h1>Little Witchery</h1>
        <img src={logo} />
      </div>
      <div className={styles.navLinks}>
        <NavLink to='/blog' activeStyle={{ backgroundColor: 'white' }}>Blog</NavLink>
        <NavLink to='/'>Videos</NavLink>
        <NavLink to='/'>Contact</NavLink>
      </div>
    </section>
  );
};
