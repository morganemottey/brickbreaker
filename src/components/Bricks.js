import React, { Component } from 'react';
import './Bricks.css';

class Bricks extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() { 
      const {left, top} = this.props
      const brickSize = {
         width:'67px',
         height:'20px',
         position:'absolute',
      }  
      return (
        <div>
          <div className="brick" style={{...brickSize ,top:top, left:left}}></div>
        </div>
      );
    }
  }


export default Bricks;