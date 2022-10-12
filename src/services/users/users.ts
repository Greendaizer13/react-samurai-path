import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ChangeFollowStateModel, UserViewModel } from './users.types';

export const usersApi = createApi({
	reducerPath: 'usersApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3004/',
	}),
	endpoints: (builder) => ({
		getUsers: builder.query<UserViewModel[], void>({
			query: () => `users/`,
		}),
		changeFollowState: builder.query<void, ChangeFollowStateModel>({
			query: (body) => ({
				url: 'users/change-follow-state',
				method: 'patch',
				body: body,
			}),
			extraOptions: {}
		}),
	}),
});

export const { useGetUsersQuery, useChangeFollowStateQuery } = usersApi
