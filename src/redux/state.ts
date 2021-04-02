import { DIALOGS_DATA, MAIN_USER_DATA, POSTS_DATA, USERS_DATA } from '../core/mocs';
import { IApplicationState } from './types';

let renderAll = () => {
	console.log('This is emply function yet');
};

export const subscribe = (observe : () => void) => {
	renderAll = observe;
}

export interface IStore {
	_state: IApplicationState;
	getState: () => IApplicationState;
	addNewPost: () => void;
	updateNewPostText: (text: string) => void;
	sendNewMessage: () => void;
	updateNewReplicaText: (text: string) => void;
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

	getState() : IApplicationState {
 		return this._state;
	},

	updateNewPostText(text: string) {
		this._state.profile.newPostText = text;
	},

	addNewPost() {
		let id = this._state.profile.posts.length;
		this._state.profile.posts.push({
			id: id,
			text: this._state.profile.newPostText,
		});
		this.updateNewPostText('');
		renderAll();
	},

	updateNewReplicaText(text) {
		this._state.messages.newReplicaText = text;
	},

	sendNewMessage() {
		this._state.messages.messages.push({
			user: this._state.mainUser,
			text: this._state.messages.newReplicaText,
		});
		this.updateNewReplicaText('');
		renderAll();
	}
};

export default store;
