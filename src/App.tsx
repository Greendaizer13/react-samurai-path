import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className={'app-wrapper'}>
				<Header/>
				<div className={'app-body'}>
					<NavBar/>
					<div className={'content'}>
						<Route component={Profile} path={'/profile'}/>
						<Route component={Messages} path={'/messages'}/>
						<Route component={Profile} exact path={'/'}/>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
