import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
	return <div className={styles['profile']}>
		<div className={styles['avatar']}>
			<img src={'https://yt3.ggpht.com/a/AATXAJwcjuvfzamlEQqn3uFmAol0Q_zTloG96JtpB1de=s900-c-k-c0xffffffff-no-rj-mo'} alt={'avatar'}/>
		</div>
		<div className={styles['profile-info']}>
			<div className={styles['profile-info__item-title']}>Name</div>
			<div className={styles['profile-info__item']}>Date of birth</div>
			<div className={styles['profile-info__item']}>City</div>
			<div className={styles['profile-info__item']}>Education</div>
		</div>
	</div>
}

export default Profile;
