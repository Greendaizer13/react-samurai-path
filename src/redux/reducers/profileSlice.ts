import { POSTS_DATA } from '../../core/mocs';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProfileData } from '../types';

export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const ADD_NEW_POST = 'ADD-NEW-POST';

const initialState: IProfileData = {
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
		addNewPost: (state, action: PayloadAction<string>) => {
			let id = state.posts.length;
			state.posts.push({
				id: id,
				text: state.newPostText,
			});
			state.newPostText = '';
		},
	},
});

export const { updateNewPostText, addNewPost } = profileSlice.actions;
