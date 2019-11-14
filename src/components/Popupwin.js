import React from 'react';
import './Popupwin.css';
import ReactModal from 'react-modal';
import lostgame from '../images/lostgame.jpg';
import { Link } from 'react-router-dom';

class Popupwin extends React.Component {
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
      const {restart} = this.props
      return (
        <div>
          <ReactModal 
            style={{content: {margin: 'auto', backgroundImage: `url(${lostgame})`,backgroundPosition: "95% 30%",border: "1px solid black",borderRadius:'30px', boxShadow: 'grey 2px 2px 10px', width:'70%',height: '80%'}}}
            isOpen={this.state.showModal}
            contentLabel="Minimal Modal Example"
          >
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