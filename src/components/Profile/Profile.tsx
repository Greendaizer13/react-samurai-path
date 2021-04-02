import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post, { IPost } from '../Post/Post';
import { IUser } from '../../core/types';
import NewPost from '../NewPost/NewPost';

export interface IProfile {
	user: IUser,
	posts: IPost[],
	newPostText: string;
	addNewPost: () => void;
	updateNewPostText: (newPostText: string) => void;
}

const Profile: React.FC<IProfile> = (props) => {
	return (
		<div>
			<div className={'block'}>
				<ProfileInfo {...props.user}/>
			</div>
			<NewPost
				addNewPost={props.addNewPost}
				newPostText={props.newPostText}
				updateNewPostText={props.updateNewPostText}/>

			{props.posts.map((post) => (
				<Post {...post}/>
			))}
		</div>
	);
};

export default Profile;
