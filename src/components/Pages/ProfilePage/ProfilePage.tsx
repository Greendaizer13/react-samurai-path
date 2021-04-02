import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post, { IPost } from './Post/Post';
import { IUser } from '../../../core/types';
import NewPost from './NewPost/NewPost';

export interface IProfilePage {
	user: IUser,
	posts: IPost[],
	newPostText: string;
	addNewPost: () => void;
	updateNewPostText: (newPostText: string) => void;
}

const ProfilePage: React.FC<IProfilePage> = (props) => {
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

export default ProfilePage;
