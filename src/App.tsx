import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ProfilePage from './components/Pages/ProfilePage/ProfilePage';
import MessagesPage from './components/Pages/MessagesPage/MessagesPage';
import { BrowserRouter, Route } from 'react-router-dom';
import { IStore } from './redux/state';
import { MESSAGES_ROUTE, PROFILE_ROUTE } from './core/constants';

export interface IApp {
	store: IStore;
}

const App: React.FC<IApp> = (props) => {
	return (
		<BrowserRouter>
			<div className={'app-wrapper'}>
				<Header/>
				<div className={'app-body'}>
					<NavBar/>
					<div className={'content'}>
						<Route render={() =>
							<ProfilePage
								user={props.store.getState().mainUser}
								posts={props.store.getState().profile.posts}
								newPostText={props.store.getState().profile.newPostText}
								updateNewPostText={props.store.updateNewPostText.bind(props.store)}
								addNewPost={props.store.addNewPost.bind(props.store)}
							/>}
						       path={PROFILE_ROUTE}
						/>
						<Route render={() =>
							<MessagesPage
								dialogUsers={props.store.getState().messages.dialogUsers}
								mainUser={props.store.getState().mainUser}
								messages={props.store.getState().messages.messages}
								newReplicaText={props.store.getState().messages.newReplicaText}
								updateNewReplicaText={props.store.updateNewReplicaText.bind(props.store)}
								sendNewMessage={props.store.sendNewMessage.bind(props.store)}
							/>}
						       path={MESSAGES_ROUTE}
						/>
						<Route render={() =>
							<ProfilePage
								user={props.store.getState().mainUser}
								posts={props.store.getState().profile.posts}
								newPostText={props.store.getState().profile.newPostText}
								updateNewPostText={props.store.updateNewPostText.bind(props.store)}
								addNewPost={props.store.addNewPost.bind(props.store)}
							/>}
						       exact path={'/'}/>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
