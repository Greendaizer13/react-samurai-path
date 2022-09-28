import React from 'react';
import styles from './Messages.module.css';
import Dialogs from './Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import { MESSAGES_ROUTE } from '../../../core/constants';
import Chat from './Chat/Chat';
import classNames from 'classnames';
import store from '../../../redux/store';
import { MAIN_USER_DATA } from '../../../core/mocs';

const MessagesPage: React.FC = () => {
	const state = store.getState();

	return (
		<div className={classNames('block', styles['messages'])}>
			<Dialogs users={state.messages.dialogUsers}/>
			<Route render={() => (
				<Chat
					mainUser={MAIN_USER_DATA} // todo
					messages={state.messages.messages}
					newReplicaText={state.messages.newReplicaText}
				/>
			)}
			       path={MESSAGES_ROUTE}
			/>
		</div>
	);
};

export default MessagesPage;
