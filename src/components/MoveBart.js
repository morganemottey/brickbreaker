import React, { Component } from "react";
import './MoveBart.css';

class Move extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { left } = this.props;
    return (
      <>

        <div
          className="bart"
          style={{
            left: `${left}px`,
          }}
         />
      </>

    );

  }
}

export default Move;





