import React from 'react';
import './Navigation.css';


const Navigation = () => {
    return (<nav className='Nav'>
        <div className='itemNav'>

            <a href='/ProFile'>Profile</a>
        </div>
        <div className='itemNav'>

            <a href='Dialogs'>Messages</a>
        </div>
        <div className='itemNav'>

            <a href='News'>News</a>
        </div>
        <div className='itemNav'>

            <a href='Music'>Music</a>
        </div>
        <div className='itemNav'>

            <a href='Videos'>Videos</a>
        </div>
    </nav>)
}

export default Navigation; 