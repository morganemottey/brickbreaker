import React from "react";
import './Pad.css';

const Pad = (props) =>  (
    <div 
        className="TabBarre"
        style={{ left: `${props.left}px` }}
    />
)
export default Pad;
