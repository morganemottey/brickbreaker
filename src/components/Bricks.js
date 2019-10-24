import React, { Component } from 'react';

class Bricks extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() { 
      const {left, top} = this.props
      const brickSize = {
         width:`65px`,
         height:`10px`,
         backgroundColor:'Tan',
         position:'absolute',
      }  
      return (
        <div>
          <div style={{...brickSize ,top:top, left:left}}></div>
        </div>
      );
    }
  }


export default Bricks;