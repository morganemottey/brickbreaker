import React, { Component } from 'react';
import Rectangle from './Rectangle';



class Line extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    bricksLine = () => {
        const bricksLine = 5;
       
        const bricks = [];
            for (let i = 0; i < bricksLine; i++) {
                bricks[i] = <Rectangle key={`bricks-${i}`} />
            }
        return bricks;
    };

    render() {
        return (
            <div>
                <div style={{display: 'flex'}}>{this.bricksLine()}</div>
                <div style={{display: 'flex'}}>{this.bricksLine()}</div>
                <div style={{display: 'flex'}}>{this.bricksLine()}</div>
                <div style={{display: 'flex'}}>{this.bricksLine()}</div>
            </div>
        );
    }
}


export default Line;