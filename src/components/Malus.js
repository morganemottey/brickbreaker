import React, { Component } from "react";
import './Malus.css';

class Malus extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { left, top } = this.props;
    return (
      <>
        <img
          className="hamburger"
          style={{
            left: `${left}px`,
            top: `${top}px`,
          }}
          src="https://i.ya-webdesign.com/images/skateboard-cartoon-png-4.png" alt='#'/>


      </>

    );

  }
}

export default Malus;





