import React from 'react';
import styles from './ProfileInfoItem.module.css';

export interface ProfileInfoItemProps {
	title: string,
	value?: string,
}

const ProfileInfoItem = (props : ProfileInfoItemProps) => {
	return (
		<div className={styles['profile-info__item']}>{props.title}: {props.value}</div>
	);
};

export default ProfileInfoItem;
