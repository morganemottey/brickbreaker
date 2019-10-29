import React, { Component } from "react";
import './MoveBart.css';

class Move extends Component {
  constructor(props) {
    super(props)
    this.toRight = true;
    this.toLeft = false;
    this.toDown =true;
    this.state = {
      bartDepart: 587,
      bartLeft: 500,

      downBeer: 500,
      downPetard: 500,
      downGrenade: 500,
      downHamburger: 500,

    }
    // Intervalle de temps

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

  //Mouvement Droite-Gauche de Bart au dessus du Pad
  MouvBartX = () => {
    console.log(this.toRight, this.state.bartDepart)
    if (this.toRight) {
      this.setState({ bartDepart: this.state.bartDepart + 20 })
    } else {
      this.setState({ bartDepart: this.state.bartDepart - 20 })
    }
    if (this.state.bartDepart > 505)
      this.toRight = false;

    else if (this.state.bartDepart < 175) {
      this.toRight = true
    }
    setTimeout(this.MouvBartX, 500)
  }

  componentDidMount() {
    this.MouvBartX()
  }

  ////////////////////////////////////Sprint 2 ///////////////////////////////////////////////
  MouvBartX = () => {
    console.log(this.toRight, this.state.bartDepart)
    if (this.toDown) {
      this.setState({ downBeer: this.state.downBeer + 20 })
    }
    if (this.state.bartDepart > 505)
      this.toRight = false;

    else if (this.state.bartDepart < 175) {
      this.toRight = true
    }
    setTimeout(this.MouvBartX, 500)
  }

  componentDidMount() {
    this.MouvBartX()
  }










  ///////////////
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




  render() {

    return (
      <div style={{position: 'absolute', height:'600px', width:'375', top:'67px'}}>>
        <div id="bloc"><h1></h1></div>
        <img
          style={{
            position: "absolute",
            margin: "auto",
            marginLeft: "600px",
            width: "50px",
            height: "30px",
            top: "0",
            bottom: `${this.state.moveGrenade}px`,
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
            bottom: `${this.state.moveHamburger}px`,
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
            bottom: `${this.state.movePetard}px`,
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
            bottom: `${this.state.moveBeer}px`,
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
            transitionDuration: "500ms",
            transitionProperty: "left",
            transitionTimingFunction: 'linear'
          }} src="https://zupimages.net/up/19/43/m9mu.gif" />


      </div>

    );

  }
}

export default Move;





