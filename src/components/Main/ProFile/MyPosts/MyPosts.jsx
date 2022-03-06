import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';

const MyPostsMain = () => {
    return (<div className='Cara'>

        <div className='Posts'>
            <div className='MP'>Create new post

            </div>
            <div className='NewPost'>
                <div class="custom-field">
                    <input id="post-field" type="text" id="text_post"/>
                    {/* <label for="post-field" class="placeholder">Enter text</label> */}
                </div>
                <p><button className='BtnPost' id="butt">Share it</button></p>
            </div>
            <div>
                <h1>Users posts</h1>
                <div className='Post'>
                    <Post message='АЛЕСЯ ДУРОЧКАААА !!!'/>
                    <Post message='СОГЛАСЕН С КОММЕНТАРИЕМ ВЫШЕ ОЛЕСЯ ОЧЕНЬ ГЛУПАЯ ИЗЛАЯ'/>
                    
                    
                   
                   
                   
                
                                    
                </div>
            </div>
        </div>

    </div>)
}


export default MyPostsMain; 