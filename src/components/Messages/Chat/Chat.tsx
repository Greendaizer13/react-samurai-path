import React from 'react';
import styles from './Chat.module.css';
import Replica from './Replica/Replica';
import { IMessage } from '../../../core/types';

export interface IChat {
	messages: IMessage[];
}

const Chat : React.FC<IChat> = (props) => {
	return (
		<div className={styles['chat']}>
			{
				props.messages.map((message) => (
				<Replica user={message.user} text={message.text}/>
			))}
		</div>
	);
}

export default Chat;
