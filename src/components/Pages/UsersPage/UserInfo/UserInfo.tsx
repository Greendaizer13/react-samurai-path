import React from 'react';
import styles from './UserInfo.module.css'
import { EMPTY_AVATAR_URL } from '../../../../core/constants';
import CommonButton from '../../../controls/commonButton/CommonButton';
import { UserViewModel } from '../types/UserViewModel';
import { useAppDispatch } from '../../../../redux/hooks';
import { follow, unfollow } from '../../../../redux/reducers/allUsersSlice';

export const UserInfo = (props: UserViewModel) => {
	const dispatch = useAppDispatch();

	const onFollowClick = () => {
		if(props.followed)
			dispatch(unfollow(props.id));
		else
			dispatch(follow(props.id));
	};

	return (
		<div className={'block'}>
			<div className={styles['user-info']}>
				<div className={styles['avatar']}>
					<img
						src={props.imgUrl ?? EMPTY_AVATAR_URL}
						alt={'avatar'}/>
				</div>
				<div>
					<div className={styles['user-info__item']}>{props.firstName} {props.lastName ?? ""}</div>
					<div className={styles['user-info__item__status']}>{props.status ?? ''}</div>
					<div className={styles['user-info__item']}>
						<CommonButton onClick={onFollowClick} text={props.followed ? 'Follow' : 'Unfollow'}></CommonButton>
					</div>
				</div>
			</div>
		</div>);
};
