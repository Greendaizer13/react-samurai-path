import { dialogsSlice } from './reducers/dialogsSlice';
import { profileSlice } from './reducers/profileSlice';
import { configureStore } from '@reduxjs/toolkit';
import {usersApi} from '../services/users/users'
import { setupListeners } from '@reduxjs/toolkit/query';


export const store = configureStore({
	reducer: {
		dialogs: dialogsSlice.reducer,
		profile: profileSlice.reducer,
		[usersApi.reducerPath]: usersApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(usersApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

