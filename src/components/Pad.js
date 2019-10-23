import React, { Component } from "react";
import './Pad.css';

class Pad extends Component {
    constructor(props){
        super(props);
        this.state = {
            xLeft: 47,
        };
    }
    positionRight = () => {
        if (this.state.xLeft <+ 80)
        this.setState({
        xLeft : this.state.xLeft +10 // je déplace mon pad de +10%
    })}
    positionLeft = () => {
        if (this.state.xLeft >= 10) //penser à changer screen width lorsqu'on aura choisi la taille de la fenêtre du jeu
        this.setState({
        xLeft : this.state.xLeft -10 //je déplace mon pad de -10%
     })}
    render() {
        return (
            <div
            style={{
                width:"400px",
                height:"500px",
                margin: "0 auto",
                position:"relative",
                display:"flex",
            }}
            >
                <div className="left"
                    style= {{
                        backgroundColor: "#70C3B3",
                        width:"50%",
                        height:"500px",
                    }}
                    onClick={this.positionLeft}
                >
                </div>
                <div className="right"
                    style={{
                        backgroundColor:"#1E8873",
                        width:"50%",
                        height:"500px",
                    }}
                    onClick={this.positionRight}
                >
                </div>
                <div className="TabBarre"
                    style={{
                        width:"30px",
                        height:"5px",
                        backgroundColor: "black",
                        position: "absolute",
                        left:`${this.state.xLeft}%`,
                        bottom:"50px",
                        transitionDuration: "1s",
                        transitionProperty: "left",

                    }}
                >
                </div>
              
            </div>


        );
    }
}



export default Pad;