import React from 'react';
import styles from './Chat.module.css';
import { DIALOGS } from '../../../core/mocs';
import Replica from './Replica/Replica';

const Chat = () => {
	return (
		<div className={styles['chat']}>
			{DIALOGS[0].map((message) => (
				<Replica user={message.user} text={message.text}/>
			))}
		</div>
	);
}

export default Chat;
