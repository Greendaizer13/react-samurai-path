import { IMessage, User } from './types';
import { IPost } from '../pages/ProfilePage/Post/Post';

export const USERS_DATA: User[] = [
	{
		id: 0,
		firstName: 'Tilda',
		lastName: 'Swinton',
		imgUrl: 'https://avatars.mds.yandex.net/i?id=06f9fd95d436f5e6f313c68d4ff7cbe9-5333993-images-thumbs&n=13&exp=1',
		status: 'I am the Goddess',
		followed: true,
	},
	{
		id: 1,
		firstName: 'Adam',
		lastName: 'Lambert',
		location: {
			country: 'USA',
			city: 'Los Angeles'
		}
	},
	{
		id: 2,
		firstName: 'Mom'
	},
	{
		id: 3,
		firstName: 'Viego',
	},
	{
		id: 4,
		firstName: 'Ekaterina',
		lastName: 'Sovetnikova',
	},
	{
		id: 5,
		firstName: 'Savelev',
		lastName: 'Dmitry',
		status: "I'm the best at react and front-end coding",
		location: {
			country: 'Russia',
			city: 'Krasnodar'
		},
		followed: true,
	},
	{
		id: 6,
		firstName: 'Sean',
		lastName: 'Dias',
	},
];

export const MAIN_USER_DATA: User = {
	id: 999,
	firstName: "Frog's Lag",
	imgUrl: 'https://sun2-9.userapi.com/s/v1/ig2/w2L4qY0YKT3i9J06JK1SHIUtN4rJHH6C326vMOipnI2ddyZV3x89j-gkrsd7ZJeYpaGGg98H72hJmoXKACUXMzEH.jpg?size=200x200&quality=96&crop=0,160,959,959&ava=1',
}

export const POSTS_DATA : IPost[] = [
	{
		id: 0,
		text: 'I started React successfully!'
	},
	{
		id: 1,
		text: 'Export data to state - checked'
	},
]

export const DIALOGS_DATA: IMessage[][] = [
	[
		{user: USERS_DATA[0], text: "Hey! You are awsome!"},
		{user: MAIN_USER_DATA, text: "Oh, Tilda, you are so kind, but thank you"},
		{user: USERS_DATA[0], text: "You deserved it. How are you?"},
		{user: MAIN_USER_DATA, text: "I'm shocked by your compliments. Very long message test. Very long message test. Very long message test. Very long message test. Very long message test."},
	],
	[
		{user: USERS_DATA[1], text: "Fuck you"},
		{user: MAIN_USER_DATA, text: "Ok"},
	],
	[
		{user: USERS_DATA[4], text: "I've heard that every second person is a cocksucker. I'am not"},
		{user: MAIN_USER_DATA, text: "Thanks"},
		{user: USERS_DATA[4], text: "U're welcome"},
	],
]
