import React, { Component } from "react";
import './MoveBart.css';

class Move extends Component {
  constructor(props) {
    super(props)
    this.toRight = true;
    this.toLeft = false;
    this.toDown =true;
    this.state = {
      bartDepart: 550,
      bartLeft: 500,

      downBeer: 0, 
      downPetard: 0,
      downGrenade: 0,
      downHamburger: 0,
      downCookie : 0,

    }
  };

  //Mouvement Droite-Gauche de Bart au dessus du Pad
  MouvBartX = () => {
    console.log(this.toRight, this.state.bartDepart)
    if (this.toRight) {
      this.setState({ bartDepart: this.state.bartDepart + 20 })
    } else {
      this.setState({ bartDepart: this.state.bartDepart - 10 })
    }
    if (this.state.bartDepart > 770)
      this.toRight = false;

    else if (this.state.bartDepart < 455) {
      this.toRight = true
    }
    setTimeout(this.MouvBartX, 100)
  }

  MouvBeerY = () => {
    if (this.toDown) {
      this.setState({ downBeer:  this.state.downBeer  })
    } else {
      this.setState({ downBeer: this.state.downBeer- 10 })
    }
    if (this.state.downBeer > 970)
      this.toRight = false;

    else if (this.state.downBeer = 455) {
      this.toRight = true
    }
    setTimeout(this.MouvBeerY, 100)
  }
  MouvPetardY = () => {
    if (this.toDown) {
      this.setState({ downPetard:  this.state.downPetard  })
    } else {
      this.setState({ downPetard: this.state.downPetard - 10 })
    }
    if (this.state.downPetard > 970)
      this.toDown = false;

    else if (this.state.downPetard = 455) {
      this.toDown = true
    }
    setTimeout(this.MouvPetardY, 100)
  }
  MouvGrenadeY = () => {
    if (this.toDown) {
      this.setState({ downGrenade: this.state.downGrenade  })
    } else {
      this.setState({ downGrenade: this.state.downGrenade - 10 })
    }
    if (this.state.downGrenade > 970)
      this.toDown = false;

    else if (this.state.downGrenade = 455) {
      this.toDown = true
    }
    setTimeout(this.MouvGrenadeY, 100)
  }
  MouvHamburgerY = () => {
    if (this.toDown) {
      this.setState({ downHamburger: this.state.downHamburger + 20 })
    } else {
      this.setState({ downHamburger: this.state.downHamburger - 10 })
    }
    if (this.state.downHamburger > 970)
      this.toDown = false;

    else if (this.state.downHamburger = 455) {
      this.toDown = true
    }
    setTimeout(this.MouvHamburgerY, 100)
  }
  MouvCookieY = () => {
    if (this.toDown) {
      this.setState({ downCookie: this.state.downCookie + 20 })
    } else {
      this.setState({ downCookie: this.state.downCookie - 10 })
    }
    if (this.state.downCookie > 970)
      this.toDown = false;

    else if (this.state.downCookie = 455) {
      this.toDown = true
    }
    setTimeout(this.MouvCookieY, 100)
  }


  componentDidMount() {
    this.MouvBartX()
    this.MouvBeerY()
    this.MouvPetardY()
    this.MouvGrenadeY()
    this.MouvHamburgerY()
    this.MouvCookieY()
  }
  

  ////////////////////////////////////Sprint 2 ///////////////////////////////////////////////
 ///Descente de la bière
  
///////////////////:




  render() {
const {bartDepart, downBeer, downPetard, downGrenade,downHamburger,downCookie} = this.state;
    return (
      <div >
        <div style = {{position : "absolute"}}><h1></h1></div>

        <img 
          className="bart"
          style={{left: `${bartDepart}px`,}} 
          src="https://i.ya-webdesign.com/images/skateboard-cartoon-png-4.png" />

        <img 
          className= "grenade"
          style={{top: `${downGrenade}px`,}} 
          src="http://miam-images.m.i.pic.centerblog.net/o/b3e5af13.png" />
       
        <img 
          className = "hamburger"
          style={{top: `${downHamburger}px`,}} 
          src="http://miam-images.m.i.pic.centerblog.net/o/b3e5af13.png" />
       
        <img 
          className="petard"
          style={{top: `${downPetard}px`
          }} src="http://miam-images.m.i.pic.centerblog.net/o/b3e5af13.png" />

        <img 
          className="beer"
          style={{
            top: `${downBeer}px`,}} 
            src="http://miam-images.m.i.pic.centerblog.net/o/b3e5af13.png" />

          <img
           className="cookie"
           style={{top: `${downCookie}px`,}}
           src="http://miam-images.m.i.pic.centerblog.net/o/b3e5af13.png"/>


      </div>

    );

  }
}

export default Move;





