import React from 'react';
import styles from './ProfileInfoItem.module.css';

export interface IProfileInfoItem {
	title: string,
	value?: string,
}

const ProfileInfoItem: React.FC<IProfileInfoItem> = (props) => {
	return (
		<div className={styles['profile-info__item']}>{props.title}: {props.value}</div>
	);
};

export default ProfileInfoItem;
