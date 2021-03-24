import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Content from './components/Сontent/Content';

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
