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

        <img
          className="bart"
          style={{
            left: `${left}px`,
          }}
          src="https://i.ya-webdesign.com/images/skateboard-cartoon-png-4.png" alt='#'/>
        
      </>

    );

  }
}

export default Move;





