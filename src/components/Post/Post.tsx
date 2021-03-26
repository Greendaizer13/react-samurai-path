import React from 'react';

export interface IPost {
	text: string,
}

const Post : React.FC<IPost> = (props) => {
	return (
		<div className={'block'}>
			{props.text}
		</div>
	);
};

export default Post;
