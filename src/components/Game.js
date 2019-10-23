import React, {Component} from 'react';
import './Game.css';
import Point from './Point';
import Bricks from './Bricks';

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pointLeft: 20,
      pointTop:587,
      goRight:true,
      goDown:false,
      xSpeed:1,
      ySpeed:1,
      brickWall: this.getBrickWall()
    }
  }

BriqueX = (left, top) => {
  return (this.state.pointTop+19>top && this.state.pointTop<top+39 && this.state.pointLeft+20>left && this.state.pointLeft<left+90)
}

BriqueY = (left, top) => {
  return (this.state.pointTop+20>top && this.state.pointTop<top+40 && this.state.pointLeft+19>left && this.state.pointLeft<left+89)
}


MoovingX = () => {
  if (this.state.goRight){
    // eslint-disable-next-line 
      this.setState({pointLeft : this.state.pointLeft+=this.state.xSpeed})
  } else if (!this.state.goRight){
    // eslint-disable-next-line 
      this.setState({pointLeft : this.state.pointLeft-=this.state.xSpeed})
  }
  

  if (this.state.pointLeft > 355 || this.state.pointLeft < 0 
    ){
      this.setState({goRight : !this.state.goRight})
  }

  setTimeout(this.MoovingX, 1)
}

MoovingY = () => {
  if (this.state.goDown){
    // eslint-disable-next-line 
      this.setState({pointTop : this.state.pointTop+=this.state.ySpeed})
  } else if (!this.state.goDown){
    // eslint-disable-next-line 
      this.setState({pointTop : this.state.pointTop-=this.state.ySpeed})
  }
  

  if (this.state.pointTop > 587 || this.state.pointTop < 0 
  ){
      this.setState({goDown : !this.state.goDown})
  }

  setTimeout(this.MoovingY, 1) 
}

componentDidMount(){
  this.MoovingX()
  this.MoovingY()
}

getBrickWall = () => {
  const brick = [];
      for (let i = 0; i < 6; i++) {     
          for (let j = 0; j < 5; j++){
             brick.push ({top:i*20, left:j*75})
          } 
      }
  return brick;
};

  render(){
    const {pointLeft, pointTop} = this.state
    return (
      <div className="Game">
        <div style={{position: 'relative', border: '1px red solid', height:'600px', width:'375', top:'67px'}}>
          {this.state.brickWall.map( item => {
            return(
              <Bricks 
              top={item.top}
              left={item.left}
              />
            ); 
          })}
        <Point left={pointLeft} top={pointTop}/>
        </div>
      </div>
    );
  }
}

export default Game;
