import React, { useState } from 'react'


function Feed({tweets}) {
    const [userName, setUserName] = useState('Pau');
   
    return (
        <div>
            {/* <button onClick={ e => setTweets(tweets.concat({userName: 'Paulo', tweet: "24-5"})) }>tweet</button> */}
            {
                tweets.map(tweet => (
                    <>
                        <div className='feed'>
                            <div className='user'>
                                <div className='user-icon' onClick={e => setUserName('Kahit ano')}></div>
                                {/* <input type="text" name="" id="" value={userName} onChange={e => setUserName(e.target.value)}/> */}
                            </div>
                            <div className='user-component'>
                                <div className='user-data'>
                                    <div className='userName'>{tweet.userName}</div>
                                    <div className='userId'>@impaubonilla</div>
                                    <div>4m</div>
                                </div>
                                <div className='tweet-section'>
                                    <div className='user-status'>
                                        <div>{tweet.tweet}</div>
                                        <div className='upload-img'></div>
                                        <div className='user-status__button'>
                                            <i class="fa fa-retweet" aria-hidden="true"></i>
                                            <i class="fa fa-comment-o" aria-hidden="true"></i>
                                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                                            <i class="fa fa-share" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    )
}

export default Feed;