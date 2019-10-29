import React, { Component } from "react";
import './MoveBart.css';

class Move extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moveBart: 350,
      moveBeer: 500,
      movePetard: 500,
      moveGrenade: 500,
      moveHamburger: 500,
    }
    // Intervalle de temps
    setInterval(
      this.positionRight, 400
    );
    setInterval(
      this.positionHamburger, 400
    );
    setInterval(
      this.positionGrenade, 400
    );
    setInterval(
      this.positionPetard, 100
    );
    setInterval(
      this.positionBeer, 200
    );
  };

// Random Position
  positionRight = () => {
    const step = Math.floor(Math.random() -80) + 100
    this.setState({
      moveBart: this.state.moveBart + step
    })
        //setTimeout(this.positionRight, 2500)
  }
  positionGrenade = () => {
    const step = Math.floor(Math.random() * 40) - 30
    this.setState({
      moveGrenade: this.state.moveGrenade + step
    })
        //setTimeout(this.positionRight, 2500)
  }
  positionHamburger = () => {
    const step = Math.floor(Math.random() * 40) - 20
    this.setState({
      moveHamburger: this.state.moveHamburger + step
    })
      //setTimeout(this.positionRight, 2500)
  }
  positionPetard = () => {
    const step = Math.floor(Math.random() * 10) - 10
    this.setState({
      movePetard: this.state.movePetard + step
    })
    //setTimeout(this.moveDonuts, 2500)
  }
  positionBeer = () => {
    const step = Math.floor(Math.random() * 50) - 50
    this.setState({
      moveBeer: this.state.moveBeer + step
    })
    //setTimeout(this.positionRight, 2500)
  }
  //////////////////////////////////////////:




  render() {

    return (
      <div>
        <div id="bloc"><h1>Mon titre</h1></div>
        <img
          style={{
            position: "absolute",
            margin: "auto",
            marginLeft : "600px",
            width: "50px",
            height: "30px",
            top: "0",
            bottom: `${this.state.moveGrenade}px`,
            left: "30px",
            transitionDuration: "500ms",
            transitionProperty: "top",
            transitionTimingFunction: 'ease'
          }} src="https://zupimages.net/up/19/43/pov4.jpg" />
          <img
          style={{
            position: "absolute",
            margin: "auto",
            marginLeft : "400px",
            width: "50px",
            height: "30px",
            top: "0",
            bottom: `${this.state.moveHamburger}px`,
            left: "30px",
            transitionDuration: "500ms",
            transitionProperty: "top",
            transitionTimingFunction: 'ease'
          }} src="https://zupimages.net/up/19/43/ist2.png" />
          <img
          style={{
            position: "absolute",
            margin: "auto",
            marginLeft : "500px",
            width: "50px",
            height: "30px",
            top: "0",
            bottom: `${this.state.movePetard}px`,
            left: "30px",
            transitionDuration: "500ms",
            transitionProperty: "top",
            transitionTimingFunction: 'ease'
          }} src="https://zupimages.net/up/19/43/0x6b.jpg" />

        <img
          style={{
            position: "absolute",
            margin: "auto",
            marginLeft : "600px",
            width: "30px",
            height: "30px",
            top: "0",
            bottom: `${this.state.moveBeer}px`,
            left: "30px",
            transitionDuration: "500ms",
            transitionProperty: "top",
            transitionTimingFunction: 'ease'
          }} src="https://zupimages.net/up/19/43/zuj9.jpg" />

        <img
          style={{
            position: "absolute",
            margin: "auto",
            width: "30px",
            height: "30px",
            top: "0px",
            left: `${this.state.moveBart}px`,
            transitionDuration: "500ms",
            transitionProperty: "left",
            transitionTimingFunction: 'ease'
          }} src="https://zupimages.net/up/19/43/m9mu.gif" />


      </div>

    );

  }
}

export default Move;





