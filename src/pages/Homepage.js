import React, { Component } from 'react'
import './Homepage.css';
import Parameters from '../components/Parameters';
import { Link } from 'react-router-dom';

class Homepage extends Component {
 
    render() {
        return (
            <div className="title">
                <Parameters />
                <h1>Homer's Nervous Brickdown</h1>
                <img src={require('../images/bart_fall.png')} alt="bart" />
                <div>
                <button className="linktogame"> <Link to ="/Game">Play</Link></button>
                <button className="linktogame" onClick={this.props.onClick}> <Link to ="/Game">Time trial</Link></button>
                </div>
            </div>
        );
    }
}

export default Homepage;