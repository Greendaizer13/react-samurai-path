import './App.css';
import React from 'react';
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import Content from './components/content/Content';

function App() {
	return (
		<div className={'app-wrapper'}>
			<Header/>
			<div className={'app-body'}>
				<NavBar/>
				<Content/>
			</div>
		</div>
	);
}

export default App;
