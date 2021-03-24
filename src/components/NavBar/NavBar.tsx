import React from 'react';
import styles from './NavBar.module.css';

const NavBar = () => {
	return (
		<nav className={styles['nav']}>
			<div className={styles['nav__item']}>
				<a href={'/profile'}>Profile</a>
			</div>
			<div className={styles['nav__item']}>
				<a href={'/messages'}>Messages</a>
			</div>
			<div className={styles['nav__item']}>News</div>
			<div className={styles['nav__item']}>Music</div>
			<div className={styles['nav__item']}>Settings</div>
		</nav>
	);
};

export default NavBar;
