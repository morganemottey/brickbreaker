import React, { Component } from "react";
import './MoveBart.css';
class Move extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { left, bartGoRight, endGame } = this.props;
    return (

      <>
        <div
          className="bart"
          style={{
            left: `${left}px`,
            transform: bartGoRight ? '' : 'scaleX(-1) translate(50%, -50%)',
            display : endGame.length===0 && 'none'
          }}
        />
      </>

    );

  }
}

export default Move;





