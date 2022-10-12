import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserViewModel } from '../../services/users/users.types';

interface UsersSate {
	users: UserViewModel[],
}

const initialState: UsersSate = {
	users: [],
};

export const usersSlice = createSlice({
	name: 'users',
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
		setUsers: (state, action: PayloadAction<UserViewModel[]>) => {
			state.users = action.payload;
		},
	},
});

export const {
	follow,
	unfollow,
	setUsers,
} = usersSlice.actions;
