import React, { Component } from 'react';

class Bricks extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    render() { 
      const {left, top} = this.props
      const brickSize = {
         width:'67px',
         height:'15px',
         backgroundColor:'#75cac3',
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