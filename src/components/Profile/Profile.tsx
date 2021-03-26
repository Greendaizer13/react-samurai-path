import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from '../Post/Post';

const Profile = () => {
	return (
		<div>
			<div className={'block'}>
				<ProfileInfo/>
			</div>
			<div className={'block'}>
				New post form. Temporary empty
			</div>
			<Post text='Hey! I get started React!'/>
			<Post text='I managed props! Probably :3'/>
		</div>
	);
};

export default Profile;
