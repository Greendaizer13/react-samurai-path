import { IAction, IApplicationState } from '../types';

export const UPDATE_NEW_REPLICA_TEXT = 'UPDATE-NEW-REPLICA-TEXT';
export const SEND_MESSAGE = 'SEND-MESSAGE';

function MessagesReducer(state: IApplicationState, action: IAction): IApplicationState {

	let newState = { ...state };

	switch (action.type) {
		case (UPDATE_NEW_REPLICA_TEXT):
			newState.messages.newReplicaText = action.param;
			return newState;
		case (SEND_MESSAGE):
			newState.messages.messages.push({
				user: newState.mainUser,
				text: newState.messages.newReplicaText,
			});
			newState.messages.newReplicaText = '';
			return newState;
		default: return newState;
	}
}

export default MessagesReducer;
