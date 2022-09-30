export interface User {
	id: number,
	firstName: string,
	lastName?: string,
	status?: string,
	imgUrl?: string,
	location?: {
		country?: string,
		city?: string
	},
	followed?: boolean,
}

export interface IMessage {
	user: User,
	text: string,
}


