import React from 'react';
import classNames from 'classnames';
import styles from './NewPost.module.css';

export interface INewPost {
	addNewPost: () => void;
	updateNewPostText: (newPostText: string) => void;
	newPostText: string;
}

const NewPost: React.FC<INewPost> = (props) => {

	const newPostElement = React.useRef<HTMLTextAreaElement>(null);

	let onAddNewPost = () => {
		props.addNewPost();
	};

	let onNewPostTextChange = () => {
		props.updateNewPostText(newPostElement.current?.value ?? 'Text is empty. Do something');
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
