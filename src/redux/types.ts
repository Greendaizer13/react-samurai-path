import { IPost } from '../components/Pages/ProfilePage/Post/Post';
import { User } from '../core/types';

export interface IProfileData {
	mainUser: User,
	posts: IPost[],
	newPostText: string,
}
