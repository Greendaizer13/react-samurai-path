import { POSTS_DATA } from '../../core/mocs';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfileData } from '../types';
import { User } from '../../core/types';

export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const ADD_NEW_POST = 'ADD-NEW-POST';

const initialState: IProfileData = {
	mainUser: {
		id: 0,
		firstName: 'Name',
	},
	posts: POSTS_DATA,
	newPostText: '',
};

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		updateNewPostText: (state, action: PayloadAction<string>) => {
			state.newPostText = action.payload;
		},
		addNewPost: (state) => {
			if (state.newPostText === '')
				return;

			let id = state.posts.length;
			state.posts.push({
				id: id,
				text: state.newPostText,
			});
			state.newPostText = '';
		},
		setMainUser: (state, action: PayloadAction<User>) => {
			state.mainUser = action.payload;
		}
	},
});

export const {
	updateNewPostText,
	addNewPost,
	setMainUser,
} = profileSlice.actions;
