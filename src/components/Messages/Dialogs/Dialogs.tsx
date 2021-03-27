import React from 'react';
import styles from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import { USERS } from '../../../core/mocs';

const Dialogs = () => {
	return (
		<div className={styles['dialogs']}>
			{
				USERS.map((user) => (
					<Dialog user={user}/>
				))
			}
		</div>
	);
}

export default Dialogs;
