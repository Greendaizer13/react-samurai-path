import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Route } from 'react-router-dom';
import { IApplicationState } from './redux/state';
import { MESSAGES_ROUTE, PROFILE_ROUTE } from './core/constants';

const App: React.FC<IApplicationState> = (props) => {
	return (
		<BrowserRouter>
			<div className={'app-wrapper'}>
				<Header/>
				<div className={'app-body'}>
					<NavBar/>
					<div className={'content'}>
						<Route render={() =>
							<Profile
								user={props.profile.user}
								posts={props.profile.posts}
								addNewPost={props.profile.addNewPost}
							/>}
						       path={PROFILE_ROUTE}
						/>
						<Route render={() =>
							<Messages
								mainUser={props.messages.mainUser}
								dialogUsers={props.messages.dialogUsers}
								messages={props.messages.messages}
							/>}
						       path={MESSAGES_ROUTE}
						/>
						<Route render={() =>
							<Profile
								user={props.profile.user}
								posts={props.profile.posts}
								addNewPost={props.profile.addNewPost}
							/>}
						       exact path={'/'}/>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
