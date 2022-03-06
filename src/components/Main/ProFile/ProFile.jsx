import React, { Profiler } from 'react';
import MyPostsMain from './MyPosts/MyPosts';
import './ProFile.css';

const ProF = () => {
    return (<div className='MainC'>
        <div className='MainPro'>

        <div className='YourProfile'>
           <p className='Center'>  Your profile </p>
        </div>
        
        <MyPostsMain />

        </div>
    </div>)
}

export default ProF; 