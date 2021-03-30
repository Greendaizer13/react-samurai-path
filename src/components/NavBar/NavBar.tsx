import React from 'react';
import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import { MESSAGES_ROUTE, PROFILE_ROUTE } from '../../core/constants';

const NavBar = () => {
	return (
		<nav className={styles['nav']}>
			<div className={styles['nav__item']}>
				<NavLink activeClassName={styles['nav__item--active']} to={PROFILE_ROUTE}>Profile</NavLink>
			</div>
			<div className={styles['nav__item']}>
				<NavLink activeClassName={styles['nav__item--active']} to={MESSAGES_ROUTE}>Messages</NavLink>
			</div>
		</nav>
	);
};

export default NavBar;
