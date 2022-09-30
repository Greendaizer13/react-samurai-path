import { IPost } from '../components/Pages/ProfilePage/Post/Post';

export interface IProfileData {
	posts: IPost[],
	newPostText: string,
}
