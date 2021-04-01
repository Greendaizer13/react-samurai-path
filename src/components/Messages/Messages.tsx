import React from 'react';
import styles from './Messages.module.css';
import Dialogs from './Dialogs/Dialogs';
import Chat from './Chat/Chat';
import classNames from 'classnames';
import { IMessage, IUser } from '../../core/types';
import { Route } from 'react-router-dom';
import { MESSAGES_ROUTE } from '../../core/constants';

export interface IMessages {
	dialogUsers: IUser[];
	messages: IMessage[];
	mainUser: IUser;
}

const Messages: React.FC<IMessages> = (props) => {
	return (
		<div className={classNames('block', styles['messages'])}>
			<Dialogs users={props.dialogUsers}/>
			<Route render={() => <Chat mainUser={props.mainUser} messages={props.messages}/>} path={MESSAGES_ROUTE}/>
		</div>
	);
};

export default Messages;
