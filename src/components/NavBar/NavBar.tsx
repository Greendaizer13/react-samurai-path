import React from 'react';
import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className={styles['nav']}>
			<div className={styles['nav__item']}>
				<NavLink activeClassName={styles['nav__item--active']} to={'/profile'}>Profile</NavLink>
			</div>
			<div className={styles['nav__item']}>
				<NavLink activeClassName={styles['nav__item--active']} to={'/messages'}>Messages</NavLink>
			</div>
		</nav>
	);
};

export default NavBar;
