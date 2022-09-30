import React, { useRef } from 'react';
import styles from './Chat.module.css';
import Replica from './Replica/Replica';
import { IMessage, User } from '../../../../core/types';
import CommonButton from '../../../controls/commonButton/CommonButton';
import classNames from 'classnames';
import { useAppDispatch } from '../../../../redux/hooks';
import { sendMessage, updateNewReplicaText } from '../../../../redux/reducers/dialogsSlice';

export interface IChat {
	messages: IMessage[];
	mainUser: User;
	newReplicaText: string;
}

const Chat: React.FC<IChat> = (props) => {
	const dispatch = useAppDispatch();
	const ref = useRef<HTMLTextAreaElement>(null);

	let onSendNewMessage = () => {
		dispatch(sendMessage(Math.random().toString()));
		if (ref.current) {
			ref.current.value = '';
		}
	};

	let onUpdateNewReplicaText = (event: React.FormEvent<HTMLTextAreaElement>) => {
		dispatch(updateNewReplicaText(event.currentTarget.value ?? ''));
	};

	return (
		<div className={styles['chat']}>
			<div className={styles['chat__replicas']}>
				{
					props.messages.map((message, index) => (
						<Replica
							key={index}
							mainUser={props.mainUser}
							message={message}
						/>
					))}
			</div>
			<div className={classNames(styles['chat__new-replica'])}>
				<textarea ref = {ref} className={styles['new-replica--input']} onChange={onUpdateNewReplicaText}/>
				<CommonButton className={styles['new-replica--button']} text={'Send message'}
				              onClick={onSendNewMessage}/>
			</div>
		</div>
	);
};

export default Chat;
