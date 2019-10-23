import React, { Component } from 'react';
import Bricks from './Bricks';


class Line extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    bricksMatrix = () => {
        const bricks = [];
            for (let i = 0; i < 6; i++) {     
                for (let j = 0; j < 5; j++){
                   bricks.push (<Bricks top={i*20} left={j*75}/>) 
                } 
            }
        return bricks;
    };

    render() {    
        return (
            <div style= {{position:"relative", marginTop: "70px", marginLeft: '5px' }}>  
                {this.bricksMatrix()}
            </div>
        );
    }
}

export default Line;