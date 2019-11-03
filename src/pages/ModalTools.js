import React from 'react';
import ReactModal from 'react-modal';
import { IoIosClose,
         IoMdCog,
         IoMdHelp,
         IoIosVolumeHigh, 
         IoIosArrowRoundBack, 
         IoIosArrowRoundForward } from 'react-icons/io';
import './ModalTools.css';

class ModalTools extends React.Component {
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
      <div class="block">
        <button onClick={this.handleOpenModal}><IoMdHelp/></button>
        <button onClick={this.handleOpenModal2}><IoMdCog/></button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Modal #1 Global Style Override Example"
           onRequestClose={this.handleCloseModal}
        >
          <button onClick={this.handleCloseModal} class="close"><IoIosClose /></button>
          <h1 class="title">Tools</h1>
          <p> dunuts = long pad
              beer = malusse
              <IoIosArrowRoundBack/>move left
              <IoIosArrowRoundForward/>move right
          </p>
         </ReactModal>


        <ReactModal 
           isOpen={this.state.showModal2}
           contentLabel="Modal #2 Global Style Override Example"
           onRequestClose={this.handleCloseModal2}
        >
          <button onClick={this.handleCloseModal2} class="close"><IoIosClose /></button>
          <h1>parameter</h1>
          <p>Modal #2 text!</p>
          <button onClick={this.handleCloseModal2}><IoIosVolumeHigh /></button>
          
        </ReactModal>
      </div>
    );
  }
}


export default ModalTools;