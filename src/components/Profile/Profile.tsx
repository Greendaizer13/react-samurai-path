import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post, { IPost } from '../Post/Post';
import { IUser } from '../../core/types';

export interface IProfile {
	user: IUser,
	posts: IPost[],
}

const Profile: React.FC<IProfile> = (props) => {
	return (
		<div>
			<div className={'block'}>
				<ProfileInfo {...props.user}/>
			</div>
			<div className={'block'}>
				New post form. Temporary empty
			</div>

			{props.posts.map((post) => (
				<Post {...post}/>
			))}
		</div>
	);
};

export default Profile;
