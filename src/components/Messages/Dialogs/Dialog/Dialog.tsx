import React from 'react';
import styles from './Dialog.module.css';
import { IUser } from '../../../../core/types';
import classNames from 'classnames';

export interface IDialog {
	user: IUser
}

const Dialog: React.FC<IDialog> = (props) => {
	return (
		<div className={styles['dialog']}>
			<div className={classNames(styles['avatar'], styles['dialog__item'])}>
				<img src={props.user.imgUrl ?? 'https://www.flaticon.com/svg/vstatic/svg/2341/2341834.svg?token=exp=1616792586~hmac=91737c6917dfe1f252977dec82836d11'} alt={''}/>
			</div>
			<div className={classNames(styles['dialog__item'])}>
				{props.user.firstName} {props.user.lastName}
			</div>
		</div>
	);
};

export default Dialog;
