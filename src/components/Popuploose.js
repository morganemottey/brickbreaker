import React from 'react';
import './Popuploose.css';
import ReactModal from 'react-modal';
import bartass1 from '../images/bartass1.png';
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
      const { restart } = this.props
      return (
        <div>
          <ReactModal 
            style={{content: {margin: 'auto',background:'#000000',border: 'solid #ffffff 2px',borderRadius:'30px',width:'70%',height: '80%'}}}
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
          >
                <div className="contenu">
                <h1 className="looser">You're a looser!</h1>
                <img style={{width: "100%", height: "100%"}} src={bartass1} alt='#'/>
                    <div className="buttons">
                        <button className="button" onClick={restart}>RESTART</button>
                        <button className="button"><Link to ="/">HOME PAGE</Link></button>
                    </div>
                </div>
          </ReactModal>
        </div>
      );
    }
  }

  export default Popuploose;


