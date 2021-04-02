import { IMessage, IUser } from '../core/types';
import { IPost } from '../components/Post/Post';

export interface IApplicationState {
	mainUser: IUser;
	profile: IProfileData;
	messages: IMessagesData;
}

export interface IProfileData {
	posts: IPost[],
	newPostText: string,
}

export interface IMessagesData {
	dialogUsers: IUser[];
	messages: IMessage[];
	newReplicaText: string;
}
