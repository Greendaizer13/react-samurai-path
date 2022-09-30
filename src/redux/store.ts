import { dialogsSlice } from './reducers/dialogsSlice';
import { profileSlice } from './reducers/profileSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		dialogs: dialogsSlice.reducer,
		profile: profileSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

