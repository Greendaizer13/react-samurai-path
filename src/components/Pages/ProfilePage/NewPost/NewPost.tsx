import React from 'react';
import classNames from 'classnames';
import styles from './NewPost.module.css';
import { IAction } from '../../../../redux/types';
import { ADD_NEW_POST, UPDATE_NEW_POST_TEXT } from '../../../../redux/reducers/profileReducer';
import CommonButton from '../../../controls/commonButton/CommonButton';

export interface INewPost {
	dispatch: (action: IAction) => void;
	newPostText: string;
}

const NewPost: React.FC<INewPost> = (props) => {

	let onAddNewPost = () => {
		props.dispatch({type: ADD_NEW_POST, param: ''});
	};

	let onNewPostTextChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
		props.dispatch({type: UPDATE_NEW_POST_TEXT,
			param: event.currentTarget.value ?? 'Text is empty. Do something'});
	}

	return (
		<div className={'block'}>
			<div className={classNames(styles['new-post'])}>
				<div className={styles['new-post--input']} >
					<textarea placeholder={'What\'s new?'}
					          onChange={onNewPostTextChange}/>
				</div>
				<div className={styles['new-post--button']}>
					<CommonButton onClick={onAddNewPost} text={'Add post'}/>
				</div>
			</div>
		</div>
	);
};

export default NewPost;
