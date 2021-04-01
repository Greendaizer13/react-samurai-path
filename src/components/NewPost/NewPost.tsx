import React from 'react';
import classNames from 'classnames';
import styles from './NewPost.module.css';

export interface INewPost {
	addNewPost: (newPostText: string) => void,
}

const NewPost: React.FC<INewPost> = (props) => {

	const newPostElement = React.useRef<HTMLTextAreaElement>(null);

	let addNewPost = () => {
		let text = newPostElement.current?.value;
		props.addNewPost(text ?? 'Text is empty. Do something');
		if (newPostElement.current !== null)
			newPostElement.current.value = '';
	};

	return (
		<div className={'block'}>
			<div className={classNames(styles['new-post'])}>
				<div className={styles['new-post--input']} >
					<textarea placeholder={'What\'s new?'}
					          ref={newPostElement}/>
				</div>
				<div className={styles['new-post--button']}>
					<button onClick={addNewPost}>Add post</button>
				</div>
			</div>
		</div>
	);
};

export default NewPost;
