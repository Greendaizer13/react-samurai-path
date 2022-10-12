import React, { useRef } from 'react';
import classNames from 'classnames';
import styles from './NewPost.module.css';
import {
	addNewPost,
	updateNewPostText,
} from '../../../redux/reducers/profileSlice';
import CommonButton from '../../../components/CommonButton/CommonButton';
import { useAppDispatch } from '../../../redux/hooks';

export interface INewPost {
	newPostText: string;
}

const NewPost: React.FC<INewPost> = () => {
	const ref = useRef<HTMLTextAreaElement>(null);
	const dispatch = useAppDispatch();

	const onAddNewPost = () => {
		dispatch(addNewPost());
		if (ref.current) {
			ref.current.value = '';
		}
	};

	let onNewPostTextChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
		dispatch(updateNewPostText(event.currentTarget.value ?? 'Text is empty. Do something'));
	};

	return (
		<div className={'block'}>
			<div className={classNames(styles['new-post'])}>
				<div className={styles['new-post--input']}>
					<textarea
						ref = {ref}
						placeholder={'What\'s new?'}
					          onChange={onNewPostTextChange}
					/>
				</div>
				<div className={styles['new-post--button']}>
					<CommonButton onClick={onAddNewPost} text={'Add post'}/>
				</div>
			</div>
		</div>
	);
};

export default NewPost;
