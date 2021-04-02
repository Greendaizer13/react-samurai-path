import React from 'react';
import styles from './ProfileInfo.module.css';
import ProfileInfoItem from './ProfileInfoItem/ProfileInfoItem';
import { IUser } from '../../../../core/types';

const ProfileInfo : React.FC<IUser> = (props) => {
	return (
		<div className={styles['profile-info']}>
			<div className={styles['avatar']}>
				<img
					src={props.imgUrl}
					alt={'avatar'}/>
			</div>
			<div>
				<div className={styles['profile-info__title']}>{props.firstName} {props.lastName}</div>
				<ProfileInfoItem title='Education' value='KubGu maestro of IT'/>
				<ProfileInfoItem title='Date of Birth' value='09.01.1994'/>
				<ProfileInfoItem title='City' value='Krasnodar'/>
			</div>
		</div>
	);
};

export default ProfileInfo;
