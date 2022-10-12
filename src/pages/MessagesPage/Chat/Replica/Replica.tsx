import React from 'react';
import styles from './Replica.module.css';
import { IMessage, User } from '../../../../core/types';
import classNames from 'classnames';
import { EMPTY_AVATAR_URL } from '../../../../core/constants';

export interface IReplica {
	message: IMessage;
	mainUser: User;
}

const Replica: React.FC<IReplica> = (props) => {
	return (
		<div className={classNames(styles['replica'], props.message.user.id !== props.mainUser.id && styles['replica__item--reflexed'])}>
			<div className={classNames(classNames(styles['avatar'], styles['replica__avatar']))}>
				<img src={props.message.user.imgUrl ?? EMPTY_AVATAR_URL} alt={''}/>
			</div>
			<div className={classNames(styles['replica__item'], styles['replica--text'])}>
				{props.message.text}
			</div>
		</div>
	);
};

export default Replica;
