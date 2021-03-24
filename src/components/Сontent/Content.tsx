import React from 'react';
import Profile from '../Profile/Profile';
import styles from './Content.module.css';
import Post from '../Post/Post';

const Content = () => {
	return <div className={styles.content}>
		<div className={styles.content__item}>
			<Profile/>
		</div>
		<div className={styles.content__item}>
			New post form
		</div>
		<Post/>
	</div>
}

export default Content;
