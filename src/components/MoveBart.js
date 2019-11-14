import React, { Component } from "react";
import './MoveBart.css';
class Move extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { left, bartGoRight } = this.props;
    return (

      <>
        <div
          className="bart"
          style={{
            left: `${left}px`, transform: bartGoRight ? '' : 'scaleX(-1) translate(50%, -50%)'
          }}
        />
      </>

    );

  }
}

export default Move;





