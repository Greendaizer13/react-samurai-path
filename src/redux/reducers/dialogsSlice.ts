import { IMessage, User } from '../../core/types';
import { DIALOGS_DATA, MAIN_USER_DATA, USERS_DATA } from '../../core/mocs';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DialogsState {
	dialogUsers: User[];
	messages: IMessage[];
	newReplicaText: string;
}

const initialState: DialogsState = {
	dialogUsers: USERS_DATA,
	messages: DIALOGS_DATA[0],
	newReplicaText: '',
};

export const dialogsSlice = createSlice({
	name: 'dialogs',
	initialState,
	reducers: {
		updateNewReplicaText: (state, action: PayloadAction<string>) => {
			state.newReplicaText = action.payload;
		},
		sendMessage: (state) => {
			if (state.newReplicaText === '')
				return;

			state.messages.push({
				user: MAIN_USER_DATA, // todo
				text: state.newReplicaText,
			});
			state.newReplicaText = '';
		},
	},
});

export const {
	updateNewReplicaText,
	sendMessage,
} = dialogsSlice.actions;
