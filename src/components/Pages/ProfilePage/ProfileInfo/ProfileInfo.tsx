import React, { useEffect } from 'react';
import styles from './ProfileInfo.module.css';
import ProfileInfoItem from './ProfileInfoItem/ProfileInfoItem';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import axios from 'axios';
import { setMainUser } from '../../../../redux/reducers/profileSlice';

const ProfileInfo: React.FC = () => {
	const {
		mainUser,
	} = useAppSelector(state => state.profile);

	const dispatch = useAppDispatch();

	useEffect(() => {
		axios.get("http://localhost:3004/users/0").then((response) =>
			dispatch(setMainUser(response.data)));
	}, []);

	return (
		<div className={styles['profile-info']}>
			<div className={styles['avatar']}>
				<img
					src={mainUser.imgUrl}
					alt={'avatar'}/>
			</div>
			<div>
				<div className={styles['profile-info__title']}>{mainUser.firstName} {mainUser.lastName}</div>
				<ProfileInfoItem title="Status" value={mainUser.status ?? ""}/>
				<ProfileInfoItem title="City" value={mainUser.location?.city ?? "No city"}/>
			</div>
		</div>
	);
};

export default ProfileInfo;
