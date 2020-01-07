import React from 'react'

function NewPost({onNewTweet}) {
    return (
        <div>
            <div className='home'>Home</div>
            <div className='status'>
                <div className='user'>
                    <div className='user-icon'></div>
                </div>
                <div className='status-component'>
                    <form>
                        <input className='new-tweet' type="text" placeholder="What's happening?" />
                    </form>
                    <div className='status-icon__component'>
                        <div className='status-icon'>
                            <i class="fa fa-picture-o icon" aria-hidden="true"></i>
                            <i class="fa fa-file-o icon" aria-hidden="true"></i>
                            <i class="fa fa-align-left icon" aria-hidden="true"></i>
                            <i class="fa fa-smile-o icon" aria-hidden="true"></i>
                        </div>
                        <div className='button-component'>
                            <button className='status-button' onClick={onNewTweet}>Tweet</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="break"></div>
        </div>
    )
}

export default NewPost;