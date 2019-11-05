import React, { Component } from 'react'
import './Homepage.css';
import Parameters from '../components/Parameters';
import { Link } from "react-router-dom";

class Homepage extends Component {
 
    render() {
        return (
            <div >
                <Parameters/>
                <h1 className="titleHome">Homer's Nervous Brickdown</h1>
                <img src={require('../images/bart_fall.png')} alt="bart" />
                <button><Link to ="/Game">Play</Link></button>
            </div>
        );
    }
}

export default Homepage;