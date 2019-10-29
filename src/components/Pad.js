import React, { Component } from "react";
import './Pad.css';

class Pad extends Component {
    constructor(props){
        super(props);
        this.state = {
            xLeft:'',
        };
    }

    componentDidMount(){
        document.addEventListener('touchstart', event => {
            this.setState({
                xLeft: event.touches[0].pageX
            })
        }, false);
        document.addEventListener('touchmove', event => {
            //penser à changer screen width lorsqu'on aura choisi la taille de la fenêtre du jeu 
            //if à revoir ..
            if ((this.state.xLeft >= 5) && (this.state.xLeft <= 370)) 
            this.setState({
                xLeft: event.touches[0].pageX
            })
        }, false);
    }
    
    render() {
        return (
            <div>
                <div className="TabBarre"
                    style={{
                        left:`${this.state.xLeft}px`
                    }}
                >
                </div>
            </div>
        );
    }
}



export default Pad;