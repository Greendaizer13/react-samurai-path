import React from 'react';
import styles from './Messages.module.css';
import Dialogs from './Dialogs/Dialogs';
import Chat from './Chat/Chat';
import classNames from 'classnames';

const Messages = () => {
	return (
		<div className={classNames('block', styles['messages'])} >
			<Dialogs/>
			<Chat/>
		</div>
	);
}

export default Messages;
