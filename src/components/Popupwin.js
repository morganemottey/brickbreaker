import React from 'react';
import './Popupwin.css';
import ReactModal from 'react-modal';
import barthomer from '../images/barthomer.gif';
import { Link } from 'react-router-dom';

class Popupwin extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: true
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
      const {restart} = this.props
      return (
        <div>
          {/* <button onClick={this.handleOpenModal}>Open Win</button> */}
          <ReactModal 
            style={{content: {margin: 'auto',background:'#b46797',border: 'solid #ffffff 2px',borderRadius:'30px',width:'70%',height: '80%'}}}
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
          >
            <button onClick={this.handleCloseModal} style={{float:"right", background:'white'}}>X</button>
                <div className="contenu">
                <h1 className="looser1">You kicked my ass!</h1>
                <img style={{width: "100%", height: "100%"}} src={barthomer} alt='#'/>
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

  export default Popupwin;