import React from 'react';
import styles from './Messages.module.css';
import Dialogs from './Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import { MESSAGES_ROUTE } from '../../../core/constants';
import Chat from './Chat/Chat';
import classNames from 'classnames';
import { MAIN_USER_DATA } from '../../../core/mocs';
import { useAppSelector } from '../../../redux/hooks';

const MessagesPage: React.FC = () => {
	const {
		messages,
		dialogUsers,
		newReplicaText,
	} = useAppSelector((state) => state.dialogs);

	return (
		<div className={classNames('block', styles['messages'])}>
			<Dialogs users={dialogUsers}/>
			<Route render={() => (
				<Chat
					mainUser={MAIN_USER_DATA} // todo
					messages={messages}
					newReplicaText={newReplicaText}
				/>
			)}
			       path={MESSAGES_ROUTE}
			/>
		</div>
	);
};

export default MessagesPage;
