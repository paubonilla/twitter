import React from 'react'

function Aside() {
    return (
        <div className='aside'>
            <div className='sidebarColumn'>
                <div className='search-bar'>
                    <div className='search-icon'></div>
                    <input className='search' type="text" placeholder='Search Twitter' />
                </div>
                <div className='trend-section'>
                    <div className='trend-container'>
                        <div className='trend-header'>Trends for you</div>
                        <i class="fa fa-cog" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='suggestion'>
                    <h2>Who to follow</h2>
                </div>
            </div>
        </div>
    )
}

export default Aside;