import { IProfile } from '../components/Profile/Profile';
import { IMessages } from '../components/Messages/Messages';
import { DIALOGS_DATA, MAIN_USER_DATA, POSTS_DATA, USERS_DATA } from '../core/mocs';
import { renderAll } from '../render';

export interface IApplicationState {
	profile: IProfile;
	messages: IMessages;
}

export let addNewPost = (newPostText: string) => {
	let id = state.profile.posts.length;
	state.profile.posts.push({
		id: id,
		text: newPostText,
	});
	renderAll();
}

let state : IApplicationState = {
	profile: {
		user: MAIN_USER_DATA,
		posts: POSTS_DATA,
		addNewPost: addNewPost,
	},
	messages: {
		dialogUsers: USERS_DATA,
		messages: DIALOGS_DATA[0],
		mainUser: MAIN_USER_DATA,
	},
}

export default state;
