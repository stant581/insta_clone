import React, { useState, useEffect } from 'react';
import './App.css';
import Post from "./Components/Post";

import {db} from './Firebase/firebase'

function App() {
  
  const [posts, setPosts] = useState([]);

//useEffect : Runs a peiece of code on a specific condition

useEffect( ()=> {
  //if left black this will load just once
  // if I put posts here then whenever the posts change, it reloads
  db.collection('posts').onSnapshot(snapshot => {
    //It takes a snapshot whenever data changes
    setPosts(snapshot.docs.map( doc => ({
      id: doc.id,
      post: doc.data()
    })))
  })
}, [])


  return (
    <div className="App">
    

    <div className="app__header">
      <img className='app__header__image' src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' alt='insta'></img>
    </div>
    <h1> Hey there </h1>

    {
      posts.map(({id, post})=> (
        <Post key={id} username = {post.username} caption={post.caption} avatarUrl = {post.avatarUrl} imageUrl={post.imageUrl}/>
      ))
    }

    </div>
  );
}

export default App;
