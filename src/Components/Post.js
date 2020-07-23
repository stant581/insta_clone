import React from 'react'
import './Post.css';
import {Avatar} from '@material-ui/core';

function Post( {username, caption, avatarUrl, imageUrl}) {

    
    return (
        <div className="post">
        <div className='post___header'>
            
        <Avatar className="post___avatar" alt='user_avatar' src={avatarUrl}/>
        <h3>{username}</h3>
        </div>
        <img className="post___image" src={imageUrl} alt="post"></img>

        <h4 className="post___text"><strong>{username}</strong> {caption}</h4>

        </div>
    )
}

export default Post;
