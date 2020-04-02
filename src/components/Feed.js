import React from 'react'

const Feed = ({tweets}) => {
    console.log({tweets})
    return (
        <div>
            {
                tweets.map(tweet => (
                    <>
                        <div className='feed'>
                            <div className='user'>
                                {/* <div className='user-icon' onClick={e => setUserName('Kahit ano')}></div> */}
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
                                            <i className="fa fa-retweet" aria-hidden="true"></i>
                                            <i className="fa fa-comment-o" aria-hidden="true"></i>
                                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                                            <i className="fa fa-share" aria-hidden="true"></i>
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