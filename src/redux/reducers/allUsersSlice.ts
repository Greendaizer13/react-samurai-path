import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../core/types';
import { USERS_DATA } from '../../core/mocs';

interface AllUsersSate {
	users: User[],
}

const initialState: AllUsersSate = {
	users: [] ,
};

export const allUsersSlice = createSlice({
	name: 'allUsers',
	initialState,
	reducers: {
		follow: (state, action: PayloadAction<number>) => {
			const target = state.users.find(user => user.id === action.payload);
			if (target)
				target.followed = true;
		},
		unfollow: (state, action: PayloadAction<number>) => {
			const target = state.users.find(user => user.id === action.payload);
			if (target)
				target.followed = false;
		},
		setUsers: (state, action: PayloadAction<User[]>) => {
			state.users = action.payload;
		}
	},
});

export const {
	follow,
	unfollow,
	setUsers
} = allUsersSlice.actions;
