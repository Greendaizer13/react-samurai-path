import React from 'react';
import styles from '../../ProfilePage/ProfileInfo/ProfileInfo.module.css';
import { User } from '../../../../core/types';

export const UserInfo = (props: User) => {
	return (
		<div className={'block'}>
			<div>{props.firstName} {props.lastName ?? ""}</div>
		</div>);
};
