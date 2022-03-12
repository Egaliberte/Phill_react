import React from 'react';
import './Dialogs.css';
import { Link } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className='items'>
            <Link to={path}> {props.name} </Link>

        </div>
    )
}
const MessageItem = (props) => {
    return (
        <div className="message">
            {props.message}

        </div>
    )
}

const Dialogs = () => {
    return (
        <div className='Dialogs'>
            <div className='Dialogs-items'>
                <DialogItem name="Valentin Stepanenko" id="1" />
                <DialogItem name="Polina" id="2" />
                <DialogItem name="Zarina" id="3" />
                <DialogItem name="Ksenia" id="4" />
                <DialogItem name="Egor" id="5" />


            </div>
            <div className='Messages'>
                <MessageItem message ="Hello" />
                <MessageItem message ="Hi" />
                <MessageItem message ="Fuck" />
            </div>

        </div>
    )
}

export default Dialogs; 