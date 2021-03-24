import React from 'react';
import styles from './Profile.module.css';
import ProfileItem from './ProfileItem/ProfileItem';

const Profile = () => {
	return <div className={styles['profile']}>
		<div className={styles['avatar']}>
			<img src={'https://yt3.ggpht.com/a/AATXAJwcjuvfzamlEQqn3uFmAol0Q_zTloG96JtpB1de=s900-c-k-c0xffffffff-no-rj-mo'} alt={'avatar'}/>
		</div>
		<div>
			<div className={styles['profile-info__item-title']}>Name</div>
			<ProfileItem/>
		</div>
	</div>
}

export default Profile;
