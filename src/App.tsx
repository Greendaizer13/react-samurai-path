import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import MessagesPage from './pages/MessagesPage/MessagesPage';
import { BrowserRouter, Route } from 'react-router-dom';
import { ALL_USERS_ROUTE, MESSAGES_ROUTE, PROFILE_ROUTE } from './core/constants';
import { UsersPage } from './pages/UsersPage/Users/UsersPage';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<div className={'app-wrapper'}>
				<Header/>
				<div className={'app-body'}>
					<NavBar/>
					<div className={'content'}>
						<Route
							render={() => <ProfilePage/>}
							path={PROFILE_ROUTE}
						/>
						<Route
							render={() => <MessagesPage/>}
							path={MESSAGES_ROUTE}
						/>
						<Route
							render={() => <ProfilePage/>}
							exact path={'/'}
						/>
						<Route
							render={() => <UsersPage/>}
							path={ALL_USERS_ROUTE}
							/>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
