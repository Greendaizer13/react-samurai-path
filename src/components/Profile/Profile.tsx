import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from '../Post/Post';

const Profile = () => {
	return (
		<div>
			<div className={styles['block']}>
				<ProfileInfo/>
			</div>
			<div className={styles['block']}>
				<div className={styles.content__item}>
					New post form
				</div>
			</div>
			<div className={styles['block']}>
				<Post/>
			</div>
		</div>
	);
};

export default Profile;
