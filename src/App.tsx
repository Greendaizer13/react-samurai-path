import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';

function App() {
	return (
		<div className={'app-wrapper'}>
			<Header/>
			<div className={'app-body'}>
				<NavBar/>
				<div className={'content'}>
					<Profile/>
					<Messages/>
				</div>
			</div>
		</div>
	);
}

export default App;
