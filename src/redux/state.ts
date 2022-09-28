import { DIALOGS_DATA, MAIN_USER_DATA, POSTS_DATA, USERS_DATA } from '../core/mocs';
// import { IAction, IApplicationState } from './types';
// import ProfileReducer from './reducers/profileReducer';
// import MessagesReducer from './reducers/messagesReducer';

// export interface IStore {
// 	_state: IApplicationState;
// 	_callSubscriber: () => void;
//
// 	getState: () => IApplicationState;
// 	subscribe: (observe: () => void) => void;
// 	dispatch: (action: IAction) => void;
// }

// export let store: IStore = {
// 	_state: {
// 		mainUser: MAIN_USER_DATA,
// 		profile: {
// 			posts: POSTS_DATA,
// 			newPostText: '',
// 		},
// 		messages: {
// 			dialogUsers: USERS_DATA,
// 			messages: DIALOGS_DATA[0],
// 			newReplicaText: '',
// 		},
// 	},
//
// 	_callSubscriber() {
// 		console.log('This is empty function yet');
// 	},
//
// 	getState(): IApplicationState {
// 		return this._state;
// 	},
//
// 	subscribe (observe: () => void) {
// 		this._callSubscriber = observe;
// 	},
//
// 	dispatch(action) {
//
// 		this._state = ProfileReducer(this._state, action);
// 		this._state = MessagesReducer(this._state, action);
// 		this._callSubscriber();
// 	},
// };
