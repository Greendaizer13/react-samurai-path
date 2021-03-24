import React from 'react';
import styles from './ProfileInfo.module.css';
import ProfileInfoItem from './ProfileInfoItem/ProfileInfoItem';

const ProfileInfo = () => {
	return (
		<div className={styles['profile-info']}>
			<div className={styles['avatar']}>
				<img
					src={'https://yt3.ggpht.com/a/AATXAJwcjuvfzamlEQqn3uFmAol0Q_zTloG96JtpB1de=s900-c-k-c0xffffffff-no-rj-mo'}
					alt={'avatar'}/>
			</div>
			<div>
				<div className={styles['profile-info__title']}>Name</div>
				<ProfileInfoItem/>
			</div>
		</div>
	);
};

export default ProfileInfo;
