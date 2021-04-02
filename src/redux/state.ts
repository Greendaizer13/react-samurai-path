import { DIALOGS_DATA, MAIN_USER_DATA, POSTS_DATA, USERS_DATA } from '../core/mocs';
import { IAction, IApplicationState } from './types';

let renderAll = () => {
	console.log('This is emply function yet');
};

export const subscribe = (observe: () => void) => {
	renderAll = observe;
};

export interface IStore {
	_state: IApplicationState;
	getState: () => IApplicationState;
	dispatch: (action: IAction) => void;
}

export let store: IStore = {
	_state: {
		mainUser: MAIN_USER_DATA,
		profile: {
			posts: POSTS_DATA,
			newPostText: '',
		},
		messages: {
			dialogUsers: USERS_DATA,
			messages: DIALOGS_DATA[0],
			newReplicaText: '',
		},
	},

	getState(): IApplicationState {
		return this._state;
	},

	dispatch(action) {
		if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._state.profile.newPostText = action.param;
		}

		if (action.type === 'ADD-NEW-POST') {
			let id = this._state.profile.posts.length;
			this._state.profile.posts.push({
				id: id,
				text: this._state.profile.newPostText,
			});
			this._state.profile.newPostText = '';
			renderAll();
		}

		if (action.type === 'UPDATE-NEW-REPLICA-TEXT') {
			this._state.messages.newReplicaText = action.param;
		}

		if (action.type === 'SEND-MESSAGE') {
			this._state.messages.messages.push({
				user: this._state.mainUser,
				text: this._state.messages.newReplicaText,
			});
			this._state.messages.newReplicaText = '';
			renderAll();
		}
	},
};

export default store;
