import { IProfile } from '../components/Profile/Profile';
import { IMessages } from '../components/Messages/Messages';
import { DIALOGS_DATA, MAIN_USER_DATA, POSTS_DATA, USERS_DATA } from '../core/mocs';

export interface IApplicationState {
	profile: IProfile;
	messages: IMessages;
}

let state : IApplicationState = {
	profile: {
		user: MAIN_USER_DATA,
		posts: POSTS_DATA
	},
	messages: {
		dialogUsers: USERS_DATA,
		messages: DIALOGS_DATA[0],
	}
}

export default state;
