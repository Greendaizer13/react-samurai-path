import { IMessage, IUser } from './types';

export const USERS: IUser[] = [
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

export const MAIN_USER: IUser = {
	id: 999,
	firstName: "Frog's Lag",
	imgUrl: 'https://yt3.ggpht.com/a/AATXAJwcjuvfzamlEQqn3uFmAol0Q_zTloG96JtpB1de=s900-c-k-c0xffffffff-no-rj-mo',
}

export const DIALOGS: IMessage[][] = [
	[
		{user: USERS[0], text: "Hey! You are awsome!"},
		{user: MAIN_USER, text: "Oh, Tilda, you are so kind, but thank you"},
		{user: USERS[0], text: "You deserved it. How are you?"},
		{user: MAIN_USER, text: "I'm shocked by your compliments. Very long message test. Very long message test. Very long message test. Very long message test. Very long message test."},
	],
	[
		{user: USERS[1], text: "Fuck you"},
		{user: MAIN_USER, text: "Ok"},
	],
	[
		{user: USERS[4], text: "I've heard that every second person is a cocksucker. I'am not"},
		{user: MAIN_USER, text: "Thanks"},
		{user: USERS[4], text: "U're welcome"},
	],
]
