import React from "react";
import './Pad.css';

const Pad = (props) =>  (
    <div className="widthTab"
    style={{ left: `${props.left}px` ,width:`${props.width}px`}}>
        <div className="TabBarre">
        </div>
    </div>
)
export default Pad;
