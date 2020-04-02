import React, { useState } from 'react'

function NewPost({onNewTweet, setTweets, tweets}) {
    const [message, setMessage] = useState({username: 'Pau', tweet: ''});
    // console.log(message);

    const addTweet = () => { 
        setTweets(message)
        setMessage()
    }

    return (
        <div>
            <div className='home'>Home</div>
            <div className='status'>
                <div className='user'>
                    <div className='user-icon'></div>
                </div>
                <div className='status-component'>
                    <form>
                        <input className='new-tweet' type="text" placeholder="What's happening?" onChange ={(e) => {setMessage({userName: 'Pau', tweet: e.target.value})}}/>
                    </form>
                    <div className='status-icon__component'>
                        <div className='status-icon'>
                            <i className="fa fa-picture-o icon" aria-hidden="true"></i>
                            <i className="fa fa-file-o icon" aria-hidden="true"></i>
                            <i className="fa fa-align-left icon" aria-hidden="true"></i>
                            <i className="fa fa-smile-o icon" aria-hidden="true"></i>
                        </div>
                        <div className='button-component'>
                            <button className='status-button' onClick={addTweet}>Tweet</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="break"></div>
        </div>
    )
}

export default NewPost;