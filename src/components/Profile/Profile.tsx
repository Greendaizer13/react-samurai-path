import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post, { IPost } from '../Post/Post';
import { IUser } from '../../core/types';
import NewPost from '../NewPost/NewPost';

export interface IProfile {
	user: IUser,
	posts: IPost[],
	addNewPost: (newPostText: string) => void,
}

const Profile: React.FC<IProfile> = (props) => {
	return (
		<div>
			<div className={'block'}>
				<ProfileInfo {...props.user}/>
			</div>
			<NewPost addNewPost={props.addNewPost}/>

			{props.posts.map((post) => (
				<Post {...post}/>
			))}
		</div>
	);
};

export default Profile;
