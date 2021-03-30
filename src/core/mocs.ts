import { IMessage, IUser } from './types';
import { IPost } from '../components/Post/Post';

export const USERS_DATA: IUser[] = [
	{
		id: 0,
		firstName: 'Tilda',
		lastName: 'Swinton',
		imgUrl: 'https://avatars.mds.yandex.net/get-zen_doc/59126/pub_59f8ce611410c3bdd9467eb9_59f8d0adfd96b1d9b725f994/scale_1200',
	},
	{
		id: 1,
		firstName: 'Adam',
		lastName: 'Lambert',
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
		lastName: 'Dmitri',
	},
	{
		id: 6,
		firstName: 'Sean',
		lastName: 'Dias',
	},
];

export const MAIN_USER_DATA: IUser = {
	id: 999,
	firstName: "Frog's Lag",
	imgUrl: 'https://yt3.ggpht.com/a/AATXAJwcjuvfzamlEQqn3uFmAol0Q_zTloG96JtpB1de=s900-c-k-c0xffffffff-no-rj-mo',
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
