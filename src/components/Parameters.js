import React from 'react';
import './Parameters.css';
import ReactModal from 'react-modal';
import { IoMdClose,
         IoMdCog,
         IoMdHelp,
         IoIosHeart,
         IoIosVolumeHigh, 
         IoIosArrowRoundBack, 
         IoIosArrowRoundForward } from 'react-icons/io';
import totoUrl from '../musique/toto.mp3'
import Duff from '../images/Duff.png'
import Donuts from '../images/Donuts.png'

class Parameters extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      showModal2: false,
      isPlaying: false,
    };
    this.toto = new Audio(totoUrl);
    
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
  
  manageAudio = () => {
    if (this.state.isPlaying){
      this.toto.pause();
    }else {
      this.toto.play()
    }
    this.setState({ isPlaying: !this.state.isPlaying })
  }
  

  render () {
    return (
      <div class="block">
        <button onClick={this.handleOpenModal}><IoMdHelp/></button>
        <button onClick={this.handleOpenModal2}><IoMdCog/></button>
        
        <ReactModal 
           style={{content: { background: "linear-gradient(70deg, #FCFF56, #69FFF1)", width:'70%',height: '60%'}}}
           isOpen={this.state.showModal}
           onRequestClose={this.handleCloseModal}
        >
          <button onClick={this.handleCloseModal} style={{float:"right"}}><IoMdClose/></button>
      
            <h1 class="title">info jeux</h1> 
          <div style={{ margin: '30px'}}>
            <p className="alignItems"><img style={{ width: "40px", height: "40px" }} src={Donuts}/> = Agrendie la raquette</p>
            <p className="alignItems"><img style={{ width: "35px", height: "50px" }} src={Duff}/> = Malusse</p>
            <p className="alignItems"><IoIosArrowRoundBack className="iconsFlèche"/> = Se déplacer a gauche</p>
            <p className="alignItems"><IoIosArrowRoundForward className="iconsFlèche"/> = Se déplacer a droite</p>
            <p className="alignItems"><IoIosHeart className="iconCoeur"/> = Vie</p>
          </div>
         </ReactModal>

        <ReactModal 
           style={{content: { background: "linear-gradient(70deg, #FCFF56, #69FFF1)", width:'70%',height: '60%'}}}
           isOpen={this.state.showModal2}
           onRequestClose={this.handleCloseModal2}
        >
          <button onClick={this.handleCloseModal2} style={{ float: "right"}}><IoMdClose /></button>
          <h1 class="title">parametre</h1>
          <p class="x"><button onClick={this.manageAudio}><IoIosVolumeHigh className="iconSong"/></button>Musique on/off</p>
        </ReactModal>

      </div>
    );
  }
}

export default Parameters;