import React from 'react';
import styles from './NavBar.module.css';

const NavBar = () => {
	return <nav className={styles['nav']}>
		<div className={styles['nav__item']}>Profile</div>
		<div className={styles['nav__item']}>Messages</div>
		<div className={styles['nav__item']}>News</div>
		<div className={styles['nav__item']}>Music</div>
		<div className={styles['nav__item']}>Settings</div>
	</nav>
}

export default NavBar;
