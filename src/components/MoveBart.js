import React, { Component } from "react";
import './MoveBart.css';

class Move extends Component {
  constructor(props) {
    super(props)
    this.toRight = true;
    this.toLeft = false;
    this.toDown =true;
    this.state = {
      bartDepart: 600,
      bartLeft: 500,

      downBeer: 500,
      downPetard: 500,
      downGrenade: 500,
      downHamburger: 500,

    }
  };

  //Mouvement Droite-Gauche de Bart au dessus du Pad
  MouvBartX = () => {
    console.log(this.toRight, this.state.bartDepart)
    if (this.toRight) {
      this.setState({ bartDepart: this.state.bartDepart + 20 })
    } else {
      this.setState({ bartDepart: this.state.bartDepart - 20 })
    }
    if (this.state.bartDepart > 605)
      this.toRight = false;

    else if (this.state.bartDepart < 300) {
      this.toRight = true
    }
    setTimeout(this.MouvBartX, 500)
  }

  componentDidMount() {
    this.MouvBartX()
  }

  ////////////////////////////////////Sprint 2 ///////////////////////////////////////////////
 ///Descente de la bière
  
///////////////////:




  render() {

    return (
      <div >
        <div style = {{position : "absolute"}}><h1></h1></div>
        <img
          style={{
            position: "absolute",
            margin: "auto",
            marginLeft: "600px",
            width: "50px",
            height: "30px",
            top: "0",
            bottom: `${this.state.downGrenade}px`,
            left: "30px",
            transitionDuration: "500ms",
            transitionProperty: "top",
            transitionTimingFunction: 'linear'
          }} src="https://zupimages.net/up/19/43/pov4.jpg" />
        <img
          style={{
            position: "absolute",
            margin: "auto",
            marginLeft: "400px",
            width: "50px",
            height: "30px",
            top: "0",
            bottom: `${this.state.downHamburger}px`,
            left: "30px",
            transitionDuration: "500ms",
            transitionProperty: "top",
            transitionTimingFunction: 'linear'
          }} src="https://zupimages.net/up/19/43/ist2.png" />
        <img
          style={{
            position: "absolute",
            margin: "auto",
            marginLeft: "500px",
            width: "50px",
            height: "30px",
            top: "0",
            bottom: `${this.state.downPetard}px`,
            left: "30px",
            transitionDuration: "500ms",
            transitionProperty: "top",
            transitionTimingFunction: 'linear'
          }} src="https://zupimages.net/up/19/43/0x6b.jpg" />

        <img
          style={{
            position: "absolute",
            margin: "auto",
            marginLeft: "600px",
            width: "30px",
            height: "30px",
            top: "0",
            bottom: `${this.state.downBeer}px`,
            left: "30px",
            transitionDuration: "500ms",
            transitionProperty: "top",
            transitionTimingFunction: 'linear'
          }} src="https://zupimages.net/up/19/43/zuj9.jpg" />

        <img
          style={{
            position: "absolute",
            margin: "auto",
            width: "30px",
            height: "30px",
            top: "0px",
            left: `${this.state.bartDepart}px`,
            textAlign: "center",
            transitionDuration: "500ms",
            transitionProperty: "left",
            transitionTimingFunction: 'linear'
          }} src="https://zupimages.net/up/19/44/qmwl.jpg" />


      </div>

    );

  }
}

export default Move;





