import React from 'react';
import styles from './Messages.module.css';
import Dialogs from './Dialogs/Dialogs';
import classNames from 'classnames';
import { Route } from 'react-router-dom';
import { MESSAGES_ROUTE } from '../../core/constants';
import { IMessage, IUser } from '../../core/types';
import Chat from './Chat/Chat';

export interface IMessages {
	dialogUsers: IUser[];
	messages: IMessage[];
	mainUser: IUser;
	newReplicaText: string;
	updateNewReplicaText: (newReplicaText: string) => void;
	sendNewMessage: () => void;
}

const Messages: React.FC<IMessages> = (props) => {
	return (
		<div className={classNames('block', styles['messages'])}>
			<Dialogs users={props.dialogUsers}/>
			<Route render={() => <Chat
				mainUser={props.mainUser}
				messages={props.messages}
				newReplicaText={props.newReplicaText}
				updateNewReplicaText={props.updateNewReplicaText}
				sendNewMessage={props.sendNewMessage}
			/>}
			       path={MESSAGES_ROUTE}
			/>
		</div>
	);
};

export default Messages;
