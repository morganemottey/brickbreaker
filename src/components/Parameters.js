import React from 'react';
import ReactModal from 'react-modal';
import './Parameters.css';

ReactModal.defaultStyles.overlay.backgroundColor = 'cornsilk';

class Parameters extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      showModal2: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleOpenModal2 = this.handleOpenModal2.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCloseModal2 = this.handleCloseModal2.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleOpenModal2 () {
    this.setState({ showModal2: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  handleCloseModal2 () {
    this.setState({ showModal2: false });
  }
  
  render () {
    return (
      <div>
        <button onClick={this.handleOpenModal} className="button-img1"><img src="https://www.stickpng.com/assets/images/5a4613ddd099a2ad03f9c994.png" alt="help" className="img"/></button>
        <button onClick={this.handleOpenModal2} className="button-img2"><img src="http://www.icone-png.com/png/20/19688.png" alt="parameters" className="img"/></button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Modal #1 Global Style Override Example"
           onRequestClose={this.handleCloseModal}
        >
          <button onClick={this.handleCloseModal}>X</button>
          <p className="title-size">Tutorial</p>
          <p className="paragraphe-font"> Hi guy! Don't you haven't understood anything about the principle of the game ? 
          This tutorial will help you!</p>

        </ReactModal>
        <ReactModal 
           isOpen={this.state.showModal2}
           contentLabel="Modal #2 Global Style Override Example"
           onRequestClose={this.handleCloseModal2}
        >
          <button onClick={this.handleCloseModal2}>X</button>
          <p className="title-size">Parameters</p>
        </ReactModal>
      </div>
    );
  }
}


export default Parameters;