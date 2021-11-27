import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from '../../redux/auth/auth-selectors';
import styles from '../Navigation/Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  return (
    <nav className={styles.wrapper}>
      <NavLink to="/" exact className={styles.nav}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" exact className={styles.nav}>
          Contact list
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
