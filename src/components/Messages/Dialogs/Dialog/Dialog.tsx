import React from 'react';
import styles from './Dialog.module.css';
import { IUser } from '../../../../core/types';
import classNames from 'classnames';
import { EMPTY_AVATAR_URL } from '../../../../core/constants';

const Dialog: React.FC<IUser> = (props) => {
	return (
		<div className={styles['dialog']}>
			<div className={classNames(styles['avatar'], styles['dialog__item'])}>
				<img src={props.imgUrl ?? EMPTY_AVATAR_URL} alt={''}/>
			</div>
			<div className={classNames(styles['dialog__item'])}>
				{props.firstName} {props.lastName}
			</div>
		</div>
	);
};

export default Dialog;
