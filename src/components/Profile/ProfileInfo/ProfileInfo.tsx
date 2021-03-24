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
				<div className={styles['profile-info__title']}>Frog's Lag</div>
				<ProfileInfoItem title='Education' value='KubGu maestro of IT'/>
				<ProfileInfoItem title='Date of Birth' value='09.01.1994'/>
				<ProfileInfoItem title='City' value='Krasnodar'/>
			</div>
		</div>
	);
};

export default ProfileInfo;
