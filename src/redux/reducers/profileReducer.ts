import { IAction, IProfileData } from '../types';
import { POSTS_DATA } from '../../core/mocs';
import { Reducer } from 'redux';

export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const ADD_NEW_POST = 'ADD-NEW-POST';

const initialProfile: IProfileData = {
	posts: POSTS_DATA,
	newPostText: '',
};

const profileReducer: Reducer<IProfileData, IAction> = (state, action) => {
	state = state ?? initialProfile;

	switch (action.type) {
		case (UPDATE_NEW_POST_TEXT):
			state.newPostText = action.param;
			return state;
		case (ADD_NEW_POST):
			let id = state.posts.length;
			state.posts.push({
				id: id,
				text: state.newPostText,
			});
			state.newPostText = '';
			return state;
		default:
			return state;
	}
};

export default profileReducer;
