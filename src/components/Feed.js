import React from 'react'

function Feed() {
    return (
        <div>
            <div className='feed'>
                <div className='user'>
                    <div className='user-icon'></div>
                </div>
                <div className='user-component'>
                    <div className='user-data'>
                        <div className='userName'>Paulo</div>
                        <div className='userId'>@impaubonilla</div>
                        <div>4m</div>
                    </div>
                    <div className='tweet-section'>
                        <div className='user-status'>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                              Harum possimus nulla at distinctio impedit quisquam, officia dolorum excepturi eos nisi temporibus, inventore, dignissimos qui!
                              Impedit quis nobis provident totam recusandae!</div>
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
            <div className='feed'>
                <div className='user-component'>
                    <div className='user-icon'></div>
                    <div className='tweet-section'>
                        <div className='user-data'>
                            <div className='userName'>Los Angeles Lakers</div>
                            <div className='userId'>@Lakers</div>
                        </div>
                        <div className='user-status'>
                            <div>17 - 3</div>
                            <div>Is all good</div>
                            <div className='upload-img'></div>
                            {/* -------------------status buttons section------------------- */}
                            <div className='user-status__button'>
                                <i class="user-satus__icons fa fa-comment-o" aria-hidden="true"></i>
                                <i class="user-satus__icons fa fa-retweet" aria-hidden="true"></i>
                                <i class="user-satus__icons fa fa-heart-o" aria-hidden="true"></i>
                                <i class="user-satus__icons fa fa-share" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feed;