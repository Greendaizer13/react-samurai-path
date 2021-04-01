import React from 'react';
import styles from './Chat.module.css';
import Replica from './Replica/Replica';
import { IMessage, IUser } from '../../../core/types';

export interface IChat {
	messages: IMessage[];
	mainUser: IUser;
}

const Chat: React.FC<IChat> = (props) => {

	const newMessageElement = React.useRef<HTMLTextAreaElement>(null);

	let sendNewMessage = () => {
		alert(newMessageElement.current?.value)
	}

	return (
		<div className={styles['chat']}>
			<div className={styles['chat__replicas']}>
				{
					props.messages.map((message) => (
						<Replica mainUser={props.mainUser} message={message}/>
					))}
			</div>
			<div className={styles['chat__new-replica']}>
				<textarea ref={newMessageElement}/>
				<button onClick={sendNewMessage}>Send Message</button>
			</div>
		</div>
	);
};

export default Chat;
