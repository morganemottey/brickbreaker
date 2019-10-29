import React, { Component } from 'react';

class Timer extends Component {
    state = {
       seconds: 0,
       minutes: 0,
    }

componentDidMount = () => {
    this.countDown()
}

countDown = () => {
    if(this.state.seconds >= 0){ // si seconds supérieur ou égal à 0 alors incrémenter seconds de 1 //
        this.setState({seconds: this.state.seconds + 1})
}
    if(this.state.seconds > 59){ // si seconds supérieur à 59 alors incrémenter minutes de 1 et réinitialiser seconds à 0 //
        this.setState({minutes: this.state.minutes + 1})
        this.setState({seconds: this.state.seconds === 1})
    }
setTimeout(this.countDown, 1000)
}

render() {

    return (
        <div className="time">
            <p>{this.state.minutes}:{this.state.seconds}</p>
        </div>        
        );
    }
}

export default Timer;
