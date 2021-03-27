import React from 'react';
import styles from './Replica.module.css';
import { IMessage } from '../../../../core/types';
import classNames from 'classnames';
import { MAIN_USER } from '../../../../core/mocs';

const Replica: React.FC<IMessage> = (props) => {
	return (
		<div className={classNames(styles['replica'], props.user.id !== MAIN_USER.id && styles['replica__item--reflexed'])}>
			<div className={classNames(classNames(styles['avatar'], styles['replica__avatar']))}>
				<img src={props.user.imgUrl ?? 'https://www.flaticon.com/svg/vstatic/svg/2341/2341834.svg?token=exp=1616792586~hmac=91737c6917dfe1f252977dec82836d11'} alt={''}/>
			</div>
			<div className={classNames(styles['replica__item'], styles['replica--text'])}>
				{props.text}
			</div>
		</div>
	);
};

export default Replica;
