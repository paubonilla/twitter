import React, { useState } from 'react'
import NewPost from './NewPost';
import Feed from './Feed'

const data = [
    {
        userName: "Pau",
        tweet: "Hello World"
    },
]

function Main() {
    const [tweets, setTweets] = useState(data)
    return (
        <div className='main'>
            <NewPost onNewTweet={e => setTweets(tweets.concat(e))}></NewPost>
            <Feed tweets={tweets}></Feed>
        </div>
    )
}

export default Main;