import React, { useState } from 'react'
import NewPost from './NewPost';
import Feed from './Feed'

let defaultTweets = [
    {
        userName: "Pau",
        tweet: "Kumusta Mundo"
    },
]

function Main() {
    const [tweets, setTweets] = useState(defaultTweets)

    function _setTweets(tweet) {
        let tempTweets = [...tweets]
        tempTweets.push(tweet)
        setTweets(tempTweets)
    }
    function addPost(message) {
        ;
    }

    console.log('main', tweets)
    return (
        <div className='main'>
            <NewPost 
            onNewTweet={addPost} 
            setTweets={_setTweets}
            tweets={tweets}
            />
            <Feed tweets={tweets} />
        </div>
    )
}

export default Main;