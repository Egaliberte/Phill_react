import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';


const Navigation = () => {
    return (<nav className='Nav'>
        <div className='itemNav'>

            <Link to='/ProFile'>Profile</Link>
        </div>
        <div className='itemNav'>

            <Link to='Dialogs'>Messages</Link>
        </div>
        <div className='itemNav'>

            <Link to='News'>News</Link>
        </div>
        <div className='itemNav'>

            <Link to='Music'>Music</Link>
        </div>
        <div className='itemNav'>

            <Link to='Videos'>Videos</Link>
        </div>
    </nav>)
}

export default Navigation; 