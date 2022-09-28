import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';
import store from '../../../redux/store';
import { MAIN_USER_DATA } from '../../../core/mocs';

const ProfilePage: React.FC = () => {
	const state = store.getState();
	return (
		<div>
			<div className={'block'}>
				<ProfileInfo user={MAIN_USER_DATA}/>
			</div>
			<NewPost
				newPostText={state.profile.newPostText}/>

			{state.profile.posts.map((post) => (
				<Post {...post}/>
			))}
		</div>
	);
};

export default ProfilePage;
