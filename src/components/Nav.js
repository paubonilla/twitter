import React from 'react'

function Nav() {
    return (
        <div className='header'>
        <div></div>
        <div className='nav'>
          <div className='nav-bar'>
            <a href='http://localhost:3000/' className='nav-container'>
              <div className='nav-list'>
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </div>
            </a>
            <a href='http://localhost:3000/' className='nav-container'>
              <div className='nav-list'>
                <i class="fa fa-home" aria-hidden="true"></i>
                <div className='nav-text'>Home</div>
              </div>
            </a>
            <a href='http://localhost:3000/' className='nav-container'>
              <div className='nav-list'>
                <i class="fa fa-hashtag" aria-hidden="true"></i>
                <div className='nav-text'>Explore</div>
              </div>
            </a>
            <a href='http://localhost:3000/' className='nav-container'>
              <div className='nav-list'>
                <i class="fa fa-bell-o" aria-hidden="true"></i>
                <div className='nav-text'>Notification</div>
              </div>
            </a>
            <a href='http://localhost:3000/' className='nav-container'>
              <div className='nav-list'>
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                <div className='nav-text'>Messages</div>
              </div>
            </a>
            <a href='http://localhost:3000/' className='nav-container'>
              <div className='nav-list'>
                <i class="fa fa-bookmark-o" aria-hidden="true"></i>
                <div className='nav-text'>Bookmarks</div>
              </div>
            </a>
            <a href='http://localhost:3000/' className='nav-container'>
              <div className='nav-list'>
                <i class="fa fa-bars" aria-hidden="true"></i>
                <div className='nav-text'>Lists</div>
              </div>
            </a>
            <a href='http://localhost:3000/' className='nav-container'>
              <div className='nav-list'>
                <i class="fa fa-user-circle" aria-hidden="true"></i>
                <div className='nav-text'>Profile</div>
              </div>
            </a>
            <a href='http://localhost:3000/' className='nav-container'>
              <div className='nav-list'>
                <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                <div className='nav-text'>More</div>
              </div>
            </a>
            <button className='nav-text__button'>Tweet</button>
          </div>
        </div>
      </div>
    )
}

export default Nav;