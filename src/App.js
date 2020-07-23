import React, { useState } from 'react';
import './App.css';
import Post from "./Components/Post";

function App() {
  
  const [posts, setPosts] = useState([
    {
      username: "stant581",
      caption: "Wow! It worked",
      avatarUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVl1evKmf0nqpC163jJKNJqNaI3aDOfkhB-w&usqp=CAU',
      imageUrl : 'https://pluspng.com/img-png/dog-png-dog-png-image-267.png'
    },
    {
      username: "chan",
      caption: "Wow! Dope",
      avatarUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvD001uSAaW3dIrbTqbh7zB-j84b278ZMkgg&usqp=CAU',
      imageUrl : 'https://pluspng.com/img-png/dog-png-dog-png-image-267.png'
    }
  ]);




  return (
    <div className="App">
    

    <div className="app__header">
      <img className='app__header__image' src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' alt='insta'></img>
    </div>
    <h1> Hey there </h1>

    {
      posts.map( post => (
        <Post username = {post.username} caption={post.caption} avatarUrl = {post.avatarUrl} imageUrl={post.imageUrl}/>
      ))
    }

    </div>
  );
}

export default App;
