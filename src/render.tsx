import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state';

export let renderAll = () => {
	ReactDOM.render(
		<React.StrictMode>
			<App profile={state.profile} messages={state.messages}/>
		</React.StrictMode>,
		document.getElementById('root'),
	);
};
