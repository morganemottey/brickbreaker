import React, { Component } from 'react';

class Rectangle extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    brickForm = () => {
      const brickSize = {
      width: `45px`,
      height: `15px`,
      backgroundColor:'Tan',
      border: 'solid',
      margin: '5px 0px 0px 20px'
    }
    return brickSize;
   }


    render() { 
      return (
        <div>
          <div style={this.brickForm()}></div>
        </div>
      );
    }
  }


export default Rectangle;