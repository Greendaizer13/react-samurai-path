import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserViewModel } from '../../components/Pages/UsersPage/types/UserViewModel';

interface AllUsersSate {
	users: UserViewModel[],
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
		setUsers: (state, action: PayloadAction<UserViewModel[]>) => {
			state.users = action.payload;
		}
	},
});

export const {
	follow,
	unfollow,
	setUsers
} = allUsersSlice.actions;
