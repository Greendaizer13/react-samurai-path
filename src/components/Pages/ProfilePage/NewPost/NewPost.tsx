import React from 'react';
import classNames from 'classnames';
import styles from './NewPost.module.css';
import { IAction } from '../../../../redux/types';

export interface INewPost {
	dispatch: (action: IAction) => void;
	newPostText: string;
}

const NewPost: React.FC<INewPost> = (props) => {

	const newPostElement = React.useRef<HTMLTextAreaElement>(null);

	let onAddNewPost = () => {
		props.dispatch({type: 'ADD-NEW-POST', param: ''});
	};

	let onNewPostTextChange = () => {
		props.dispatch({type: 'UPDATE-NEW-POST-TEXT',
			param: newPostElement.current?.value ?? 'Text is empty. Do something'});
	}

	return (
		<div className={'block'}>
			<div className={classNames(styles['new-post'])}>
				<div className={styles['new-post--input']} >
					<textarea placeholder={'What\'s new?'}
					          ref={newPostElement} onChange={onNewPostTextChange}/>
				</div>
				<div className={styles['new-post--button']}>
					<button onClick={onAddNewPost}>Add post</button>
				</div>
			</div>
		</div>
	);
};

export default NewPost;
