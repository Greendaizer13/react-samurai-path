import React from 'react';
import styles from './Dialogs.module.css';
import { IUser } from '../../../../core/types';
import Dialog from './Dialog/Dialog';
import { NavLink } from 'react-router-dom';
import { MESSAGES_ROUTE } from '../../../../core/constants';

export interface IDialogs {
	users: IUser[];
}

const Dialogs: React.FC<IDialogs> = (props) => {
	return (
		<div className={styles['dialogs']}>
			{
				props.users.map((user) => (
					<NavLink to={MESSAGES_ROUTE + user.id}><Dialog {...user}/></NavLink>
				))
			}
		</div>
	);
};

export default Dialogs;
