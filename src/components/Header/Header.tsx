import React from 'react';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles['app-header']}>
			<div className={styles['app-header__content']}>
				<div className={styles['app-header__title']}>The Way of the Samurai named Frog's lag</div>
			</div>
		</header>
	);
}

export default Header;
