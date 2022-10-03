import React, { useEffect, useState } from 'react';
import styles from './AllUsersPage.module.css';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { UserInfo } from '../UserInfo/UserInfo';
import axios from 'axios';
import { setUsers } from '../../../../redux/reducers/allUsersSlice';

export const AllUsersPage = () => {
	const users = useAppSelector(state => state.allUsers.users);
	const dispatch = useAppDispatch();

	useEffect(() => {
		axios.get("http://localhost:3004/users").then((response) => {
			dispatch(setUsers(response.data));
		});
	}, []);

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
