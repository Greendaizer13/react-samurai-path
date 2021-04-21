import { IAction, IApplicationState } from '../types';

export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const ADD_NEW_POST = 'ADD-NEW-POST';

function ProfileReducer(state: IApplicationState, action: IAction): IApplicationState {

	let newState = { ...state };

	switch (action.type) {
		case (UPDATE_NEW_POST_TEXT):
			newState.profile.newPostText = action.param;
			return newState;
		case (ADD_NEW_POST):
			let id = newState.profile.posts.length;
			newState.profile.posts.push({
				id: id,
				text: newState.profile.newPostText,
			});
			newState.profile.newPostText = '';
			return newState;
		default: return newState;
	}
}

export default ProfileReducer;
