import React from 'react';
import './Popuploose.css';
import ReactModal from 'react-modal';
import bartass1 from '../images/bartass1.png';
import { Link } from 'react-router-dom';

class Popuploose extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    
    render () {
      return (
        <div>
          <button onClick={this.handleOpenModal}>Open Loose</button>
          <ReactModal 
            style={{content: {margin: 'auto',background:'#000000',border: 'solid #ffffff 2px',borderRadius:'30px',width:'70%',height: '80%'}}}
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
          >
            <button onClick={this.handleCloseModal} style={{float:"right", background:'white'}}>X</button>
                <div className="contenu">
                <h1 className="looser">You're a looser!</h1>
                <img style={{width: "100%", height: "100%"}} src={bartass1}/>
                    <div className="buttons">
                        <button className="button">RESTART</button>
                        <button className="button">HOME PAGE</button>
                    </div>
                </div>
          </ReactModal>
        </div>
      );
    }
  }

  export default Popuploose;


