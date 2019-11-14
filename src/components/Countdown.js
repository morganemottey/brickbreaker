import React from 'react'
import './Countdown.css';

const Countdown = (props) => {
    return (
        <div 
        className="time">
            <p style = {{color: props.color}} >{props.time}</p>
        </div>        
        );
}

export default Countdown;