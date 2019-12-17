import React from 'react'
import NewPost from './NewPost';
import Feed from './Feed'

function Main() {
    return (
        <div className='main'>
            <NewPost></NewPost>
            <Feed></Feed>
        </div>
    )
}

export default Main;