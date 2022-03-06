import React from 'react';
import './Post.css';

const Post = (props) => {
    return (
        <div className='item'>
                    <img src='https://thumbs.dreamstime.com/b/handsome-guy-face-17205111.jpg'></img>
                    {props.message}
                    <div className='Like'>
                        <img src='https://image.similarpng.com/very-thumbnail/2020/06/Thumb-up-like-icon-social-media-transparent-PNG.png'></img>
                    </div>
                    <form>
                        <label>
                            Comment:
                            <input type="text" name="name" />
                        </label>
                        <input type="submit" value="Send" />
                    </form>
                </div>
    )
}

export default Post; 