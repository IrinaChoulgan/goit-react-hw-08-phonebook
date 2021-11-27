import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../AuthNav/AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register" exact className={styles.nav}>
        Registration
      </NavLink>
      <NavLink to="/login" exact className={styles.nav}>
        Log in
      </NavLink>
    </div>
  );
}
