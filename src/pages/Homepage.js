import React, { Component } from 'react'
import './Homepage.css';
import Parameters from '../components/Parameters';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

=======
import { Link } from "react-router-dom";
>>>>>>> a8beed197b542db0900124ceee9c54078151e75e

class Homepage extends Component {
 
    render() {
        return (
<<<<<<< HEAD
            <div className="title">
                <Parameters />
                <h1>Homer's Nervous Brickdown</h1>
                <img src={require('../images/bart_fall.png')} alt="bart" />
                <div>
                <button className="linktogame"> <Link to ="/Game">Play</Link></button>
                </div>
=======
            <div >
                <Parameters/>
                <h1 className="titleHome">Homer's Nervous Brickdown</h1>
                <img src={require('../images/bart_fall.png')} alt="bart" />
                <button><Link to ="/Game">Play</Link></button>
>>>>>>> a8beed197b542db0900124ceee9c54078151e75e
            </div>
        );
    }
}

export default Homepage;