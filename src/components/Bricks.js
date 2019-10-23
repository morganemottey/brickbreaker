import React, { Component } from 'react';

class Rectangle extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() { 
      const {left, top} = this.props
      const brickSize = {
         width:`50px`,
         height:`10px`,
         backgroundColor:'Tan',
         position:'fixed',
      }  
      return (
        <div>
          <div style={{...brickSize ,top:top, left:left}}></div>
        </div>
      );
    }
  }


export default Rectangle;