import React from 'react';
import './Popuploose.css';
import ReactModal from 'react-modal';
<<<<<<< HEAD
import bart_skate1 from '../images/bart_skate1.jpg';
=======
import bartass1 from '../images/bartass1.png';
>>>>>>> dev
import { Link } from 'react-router-dom';

class Popuploose extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: true
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    render () {
<<<<<<< HEAD
      const { restart } = this.props
=======
      const {restart} = this.props
>>>>>>> dev
      return (
        <div>
          <ReactModal 
            style={{content: {margin: 'auto',backgroundImage: `url(${bart_skate1})`,backgroundPosition: "36% 30%",borderRadius:'30px',boxShadow: 'grey 2px 2px 10px', border: "1px solid black", width:'70%',height: '80%'}}}
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
          >
                <div className="contenu">
                <h1 className="looser">You're a looser!</h1>
                    <div className="buttons">
<<<<<<< HEAD
                        <button className="button_end1" onClick={restart}>RESTART</button>
                        <button className="button_end1"><Link to ="/">HOME PAGE</Link></button>
=======
                       <button className="button" onClick={restart}>RESTART</button>
                       <button className="button"><Link to ="/">HOME PAGE</Link></button>
>>>>>>> dev
                    </div>
                </div>
          </ReactModal>
        </div>
      );
    }
  }

  export default Popuploose;


