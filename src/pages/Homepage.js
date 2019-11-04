import React, { Component } from 'react'
import './Homepage.css';
import Parameters from '../components/Parameters';
import Game from '../pages/Game';

class Homepage extends Component {
    state = { render: false }
    add = () => {
        this.setState({ render: !this.state.render })
    }

    render() {
        return (
            <div className="title">
                {this.state.render
                    ? <Game />
                    : <div>
                        <Parameters />
                        <h1>Homer's Nervous Brickdown</h1>
                        <img src={require('../images/bart_fall.png')} alt="bart" />
                        <button onClick={() => this.add()} className="button-play">PLAY</button>
                    </div>
                }
            </div>
        );
    }
}

export default Homepage;