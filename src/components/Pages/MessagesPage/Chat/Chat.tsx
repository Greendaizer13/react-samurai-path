import React from 'react';
import styles from './Chat.module.css';
import Replica from './Replica/Replica';
import { IMessage, IUser } from '../../../../core/types';
import { IAction } from '../../../../redux/types';

export interface IChat {
	messages: IMessage[];
	mainUser: IUser;
	newReplicaText: string;
	dispatch: (action: IAction) => void;
}

const Chat: React.FC<IChat> = (props) => {

	const newMessageElement = React.useRef<HTMLTextAreaElement>(null);

	let onSendNewMessage = () => {
		props.dispatch({type: 'SEND-NEW-MESSAGE', param: ''});
	}

	let onUpdateNewReplicaText = () => {
		props.dispatch({type: 'UPDATE-NEW-REPLICA-TEXT',
			param: newMessageElement.current?.value ?? ''});
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
				<textarea ref={newMessageElement} onChange={onUpdateNewReplicaText}/>
				<button onClick={onSendNewMessage}>Send Message</button>
			</div>
		</div>
	);
};

export default Chat;
