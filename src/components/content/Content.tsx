import React from 'react';
import Profile from '../profile/Profile';
import styles from './Content.module.css';

const Content = () => {
	return <div className={styles.content}>
		<div className={styles.content__item}>
			<Profile/>
		</div>
		<div className={styles.content__item}>
			New post form
		</div>
		<div className={styles.content__item}>
			Example of post text first
		</div>
		<div className={styles.content__item}>
			Example of post text
		</div>
		<div className={styles.content__item}>
			Example of post text last
		</div>
	</div>
}

export default Content;
