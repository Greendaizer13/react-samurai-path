import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ProfilePage from './components/Pages/ProfilePage/ProfilePage';
import MessagesPage from './components/Pages/MessagesPage/MessagesPage';
import { BrowserRouter, Route } from 'react-router-dom';
import { MESSAGES_ROUTE, PROFILE_ROUTE } from './core/constants';

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
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
