import styles from './UsersPage.module.css';
import { UserInfo } from '../UserInfo/UserInfo';
import { useGetUsersQuery } from '../../../services/users/users';

export const UsersPage = () => {

	const { data, error, isLoading } = useGetUsersQuery();

	/*
	const dispatch = useAppDispatch();
	const users = useAppSelector(state => state.allUsers.users);
	useEffect(() => {
		axios.get("http://localhost:3004/users").then((response) => {
			dispatch(setUsers(response.data));
		});
	}, []);*/

	return (
		<div className={styles['users']}>
			{
				data?.map((user, index) => (
					<UserInfo
						key={index}
						{...user}
					/>
				))}
		</div>
	);
};
