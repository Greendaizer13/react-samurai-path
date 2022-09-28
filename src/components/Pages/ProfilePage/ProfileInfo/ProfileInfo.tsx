import React from 'react';
import styles from './ProfileInfo.module.css';
import ProfileInfoItem from './ProfileInfoItem/ProfileInfoItem';
import { IUser } from '../../../../core/types';

interface ProfileInfoProps {
	user: IUser;
}

const ProfileInfo: React.FC<ProfileInfoProps> = (props) => {
	return (
		<div className={styles['profile-info']}>
			<div className={styles['avatar']}>
				<img
					src={props.user.imgUrl}
					alt={'avatar'}/>
			</div>
			<div>
				<div className={styles['profile-info__title']}>{props.user.firstName} {props.user.lastName}</div>
				<ProfileInfoItem title="Education" value="KubGu maestro of IT"/>
				<ProfileInfoItem title="Date of Birth" value="09.01.1994"/>
				<ProfileInfoItem title="City" value="Krasnodar"/>
			</div>
		</div>
	);
};

export default ProfileInfo;
