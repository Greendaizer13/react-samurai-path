// import { IMessagesData } from '../types';
// import { DIALOGS_DATA, MAIN_USER_DATA, USERS_DATA } from '../../core/mocs';
// import { Reducer } from '@reduxjs/toolkit';
//
// export const UPDATE_NEW_REPLICA_TEXT = 'UPDATE-NEW-REPLICA-TEXT';
// export const SEND_MESSAGE = 'SEND-MESSAGE';
//
// const initialMessages: IMessagesData = {
// 	dialogUsers: USERS_DATA,
// 	messages: DIALOGS_DATA[0],
// 	newReplicaText: '',
// };
//
// const messagesReducer: Reducer<IMessagesData> = (state, action) => {
// 	state = state ?? initialMessages;
//
// 	switch (action.type) {
// 		case (UPDATE_NEW_REPLICA_TEXT):
// 			state.newReplicaText = action.param;
// 			return state;
// 		case (SEND_MESSAGE):
// 			state.messages.push({
// 				user: MAIN_USER_DATA, // todo
// 				text: state.newReplicaText,
// 			});
// 			state.newReplicaText = '';
// 			return state;
// 		default:
// 			return state;
// 	}
// };
//
// export default messagesReducer;

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
		sendMessage: (state, action: PayloadAction<string>) => {
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
