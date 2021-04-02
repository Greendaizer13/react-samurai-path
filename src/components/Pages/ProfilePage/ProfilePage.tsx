import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post, { IPost } from './Post/Post';
import { IUser } from '../../../core/types';
import NewPost from './NewPost/NewPost';
import { IAction } from '../../../redux/types';

export interface IProfilePage {
	user: IUser,
	posts: IPost[],
	newPostText: string;
	dispatch: (action: IAction) => void;
}

const ProfilePage: React.FC<IProfilePage> = (props) => {
	return (
		<div>
			<div className={'block'}>
				<ProfileInfo {...props.user}/>
			</div>
			<NewPost

				newPostText={props.newPostText}
				dispatch={props.dispatch}/>

			{props.posts.map((post) => (
				<Post {...post}/>
			))}
		</div>
	);
};

export default ProfilePage;
