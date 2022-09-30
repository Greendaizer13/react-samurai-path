import React from 'react';
import styles from './AllUsersPage.module.css';
import { useAppSelector } from '../../../../redux/hooks';
import { UserInfo } from '../UserInfo/UserInfo';

export const AllUsersPage = () => {
	const users = useAppSelector(state => state.allUsers.users);
	return (
		<div className={styles['users']}>
			{
				users.map((user, index) => (
					<UserInfo
						key={index}
						{...user}
					/>
				))}
		</div>
	);
};
