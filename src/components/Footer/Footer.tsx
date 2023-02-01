import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles['footer']}>
			<div className={styles["legal"]}>
				<div>&copy; 2023 Froggie social. All rights reserved.</div>
			</div>
			<div className={styles["legal"]}>
				<div>Made with love from Sweet Froggie Olga Saveleva</div>
			</div>
		</footer>
	);
}

export default Footer;
