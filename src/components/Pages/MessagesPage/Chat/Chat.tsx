import React from 'react';
import styles from './Chat.module.css';
import Replica from './Replica/Replica';
import { IMessage, IUser } from '../../../../core/types';
import { IAction } from '../../../../redux/types';
import { SEND_MESSAGE, UPDATE_NEW_REPLICA_TEXT } from '../../../../redux/reducers/messagesReducer';

export interface IChat {
	messages: IMessage[];
	mainUser: IUser;
	newReplicaText: string;
	dispatch: (action: IAction) => void;
}

const Chat: React.FC<IChat> = (props) => {

	let onSendNewMessage = () => {
		props.dispatch({type: SEND_MESSAGE, param: ''});
	}

	let onUpdateNewReplicaText = (event: React.FormEvent<HTMLTextAreaElement>) => {
		props.dispatch({type: UPDATE_NEW_REPLICA_TEXT,
			param: event.currentTarget.value ?? ''});
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
				<textarea onChange={onUpdateNewReplicaText}/>
				<button onClick={onSendNewMessage}>Send Message</button>
			</div>
		</div>
	);
};

export default Chat;
