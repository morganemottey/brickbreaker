import React from 'react';
import './Popupwin.css';
import ReactModal from 'react-modal';
import barthomer from '../images/barthomer.gif';

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
                        <button className="button">RESTART</button>
                        <button className="button">HOME PAGE</button>
                    </div>
                </div>
          </ReactModal>
        </div>
      );
    }
  }

  export default Popupwin;