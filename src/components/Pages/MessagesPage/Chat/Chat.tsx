import React from 'react';
import styles from './Chat.module.css';
import Replica from './Replica/Replica';
import { IMessage, IUser } from '../../../../core/types';
import { IAction } from '../../../../redux/types';
import { SEND_MESSAGE, UPDATE_NEW_REPLICA_TEXT } from '../../../../redux/reducers/messagesReducer';
import CommonButton from '../../../controls/commonButton/CommonButton';
import classNames from 'classnames';
import store from '../../../../redux/store';

export interface IChat {
	messages: IMessage[];
	mainUser: IUser;
	newReplicaText: string;
}

const Chat: React.FC<IChat> = (props) => {
	const dispatch = store.dispatch.bind(store);

	let onSendNewMessage = () => {
		dispatch({type: SEND_MESSAGE, param: ''});
	}

	let onUpdateNewReplicaText = (event: React.FormEvent<HTMLTextAreaElement>) => {
		dispatch({type: UPDATE_NEW_REPLICA_TEXT,
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
			<div className={classNames(styles['chat__new-replica'])}>
				<textarea className={styles['new-replica--input']} onChange={onUpdateNewReplicaText}/>
				<CommonButton className={styles['new-replica--button']} text={'Send message'} onClick={onSendNewMessage}/>
			</div>
		</div>
	);
};

export default Chat;
