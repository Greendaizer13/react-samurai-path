import './App.css';
import React from 'react';

function App() {
	return (
		<div className={'app-wrapper'}>
			<header className={'app-header'}>
				<div className={'app-header-content'}>
					<img src={'https://i.yapx.ru/Lc5Vg.png'} alt={'logo'}/>
					<div className={'title'}>The Way of the Samurai named Frog's lag</div>
				</div>
			</header>
			<div className={'app-body'}>
				<nav className={'nav'}>
					<div className={'nav-item'}>Profile</div>
					<div className={'nav-item'}>Messages</div>
					<div className={'nav-item'}>News</div>
					<div className={'nav-item'}>Music</div>
					<div className={'nav-item'}>Settings</div>
				</nav>
				<div className={'content'}>
					<div className={'content-block'}>
						<div className={'profile-block'}>
							<div className={'avatar'}>
								<img src={'https://yt3.ggpht.com/a/AATXAJwcjuvfzamlEQqn3uFmAol0Q_zTloG96JtpB1de=s900-c-k-c0xffffffff-no-rj-mo'} alt={'avatar'}/>
							</div>
							<div className={'profile-info'}>
								<div className={'profile-info-item-title'}>Name</div>
								<div className={'profile-info-item'}>Date of birth</div>
								<div className={'profile-info-item'}>City</div>
								<div className={'profile-info-item'}>Education</div>
							</div>
						</div>
					</div>
					<div className={'content-block'}>
						New post form
					</div>
					<div className={'content-block'}>
						Example of post text first
					</div>
					<div className={'content-block'}>
						Example of post text
					</div>
					<div className={'content-block'}>
						Example of post text last
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
