import React from 'react';

export interface PostProps {
	text: string,
}

const Post = (props: PostProps) => {
	return (
		<div className={'block'}>
			{props.text}
		</div>
	);
};

export default Post;
