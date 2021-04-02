export interface IUser {
	id: number,
	firstName: string,
	lastName?: string,
	imgUrl?: string,
}

export interface IMessage {
	user: IUser,
	text: string,
}


