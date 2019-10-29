import React, { Component } from 'react'
import './Countdown.css';

class Countdown extends Component {
    state = {
       counter: 21,
       color: ""
    }

//immediately is triggered. This only happens once. And we have it immediately call our countdown
componentDidMount = () => {
    this.countDown()
}

countDown = () => {
    if(this.state.counter > 0){
        this.setState({counter: this.state.counter - 1})
    }
    if(this.state.counter <= 9){
        this.setState({color: "red"})
    }
    if(this.state.counter === 0){
        
    }
    setTimeout(this.countDown, 1000)
}

render() {

    return (
        <div className="time">
            <p style = {{color: this.state.color}} >{this.state.counter}</p>
        </div>        
        );
    }
}

export default Countdown;
