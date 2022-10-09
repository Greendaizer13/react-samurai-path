import React from 'react';
import { User } from '../../../../core/types';
import styles from './UserInfo.module.css'
import { EMPTY_AVATAR_URL } from '../../../../core/constants';
import CommonButton from '../../../controls/commonButton/CommonButton';

export const UserInfo = (props: User) => {
	return (
		<div className={'block'}>
			<div className={styles['user-info']}>
				<div className={styles['avatar']}>
					<img
						src={props.imgUrl ?? EMPTY_AVATAR_URL}
						alt={'avatar'}/>
				</div>
				<div>
					<div>{props.firstName} {props.lastName ?? ""}</div>
					<div>{props.status ?? ''}</div>
					<CommonButton onClick={() => {}} text={'Follow'}></CommonButton>
				</div>
			</div>
		</div>);
};
