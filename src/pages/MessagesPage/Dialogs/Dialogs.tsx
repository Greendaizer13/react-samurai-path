import React from 'react';
import styles from './Dialogs.module.css';
import { User } from '../../../core/types';
import Dialog from './Dialog/Dialog';
import { NavLink } from 'react-router-dom';
import { MESSAGES_ROUTE } from '../../../core/constants';

export interface IDialogs {
	users: User[];
}

const Dialogs: React.FC<IDialogs> = (props) => {
	return (
		<div className={styles['dialogs']}>
			{
				props.users.map((user, index) => (
					<NavLink
						key={index}
						to={MESSAGES_ROUTE + user.id}
					>
						<Dialog {...user}/>
					</NavLink>
				))
			}
		</div>
	);
};

export default Dialogs;
