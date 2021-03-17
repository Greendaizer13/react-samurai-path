import "./App.css";
import React from "react";

function App() {
    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img src='https://w7.pngwing.com/pngs/737/194/png-transparent-avocado-scalable-graphics-fruit-food-icon-two-avocado-logo-nutrition-cartoon.png' alt={''}/>
            </header>
            <nav className={'nav'}>
                <div><a href={'#1'}>Profile</a></div>
                <div><a href={'#2'}>Messages</a></div>
                <div><a href={'#3'}>News</a></div>
                <div><a href={'#4'}>Music</a></div>
                <div><a href={'#5'}>Settings</a></div>
            </nav>
            <div className={'content'}>
                <div>
                    <img src={'https://img.chainimage.com/images/moraine-lake-banff-national-park-image.jpg'} alt={''}/>
                </div>
                <div>
                    avatar, description
                </div>
                <div>
                    Posts
                    <div>New post</div>
                    <div>Post1</div>
                    <div>...</div>
                    <div>PostN</div>
                </div>
            </div>
        </div>
    );
}

export default App;
