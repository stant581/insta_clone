import React from 'react';
import './App.css';
import Post from "./Components/Post";

function App() {
  return (
    <div className="App">
    

    <div className="app__header">
      <img className='app__header__image' src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' alt='insta'></img>
    </div>
    <h1> Hey there </h1>
    <Post />
    </div>
  );
}

export default App;
