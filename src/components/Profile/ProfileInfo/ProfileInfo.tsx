import React from 'react';
import styles from './ProfileInfo.module.css';
import ProfileInfoItem from './ProfileInfoItem/ProfileInfoItem';
import { MAIN_USER } from '../../../core/mocs';

const ProfileInfo = () => {
	return (
		<div className={styles['profile-info']}>
			<div className={styles['avatar']}>
				<img
					src={MAIN_USER.imgUrl}
					alt={'avatar'}/>
			</div>
			<div>
				<div className={styles['profile-info__title']}>{MAIN_USER.firstName} {MAIN_USER.lastName}</div>
				<ProfileInfoItem title='Education' value='KubGu maestro of IT'/>
				<ProfileInfoItem title='Date of Birth' value='09.01.1994'/>
				<ProfileInfoItem title='City' value='Krasnodar'/>
			</div>
		</div>
	);
};

export default ProfileInfo;
