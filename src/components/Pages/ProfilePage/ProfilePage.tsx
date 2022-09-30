import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from './Post/Post';
import NewPost from './NewPost/NewPost';
import { MAIN_USER_DATA } from '../../../core/mocs';
import { useAppSelector } from '../../../redux/hooks';

const ProfilePage: React.FC = () => {
	const {
		newPostText,
		posts,
	} = useAppSelector(state => state.profile);
	return (
		<div>
			<div className={'block'}>
				<ProfileInfo user={MAIN_USER_DATA}/>
			</div>
			<NewPost
				newPostText={newPostText}/>

			{posts.map((post, index) => (
				<Post
					key={index}
					{...post}
				/>
			))}
		</div>
	);
};

export default ProfilePage;
