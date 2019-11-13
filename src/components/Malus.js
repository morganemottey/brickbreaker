import React, { Component } from "react";
import './Malus.css';
import Duff from '../images/Duff.png';



class Malus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bartDepart: 0,
      malusTop : -35,
      malusLeft : this.bartDepart,
      pointLeft: 20,
      pointTop: 400,

    }
  }
  
  render() {
    const { left, top } = this.props;
    return (
      <>
        <div className="img1">
        <img className="duff" style={{left: `${left}px`,top: `${top}px`,}} src={ Duff } alt='#'/>
        </div>
          
          


      </>

    );

  }
}

export default Malus;





