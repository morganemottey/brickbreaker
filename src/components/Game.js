import React, {Component} from 'react';
import './Game.css';
import Point from './Point';
import Line from './Line';

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pointLeft: 20,
      pointTop:647,
      goRight:true,
      goDown:false,
      xSpeed:1,
      ySpeed:1
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
      this.setState({pointLeft : this.state.pointLeft+=this.state.xSpeed})
  } else if (!this.state.goRight){
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
      this.setState({pointTop : this.state.pointTop+=this.state.ySpeed})
  } else if (!this.state.goDown){
      this.setState({pointTop : this.state.pointTop-=this.state.ySpeed})
  }
  

  if (this.state.pointTop > 647 || this.state.pointTop < 0
  ){
      this.setState({goDown : !this.state.goDown})
  }

  setTimeout(this.MoovingY, 1) 
}

componentDidMount(){
  this.MoovingX()
  this.MoovingY()
}

  render(){
    const {pointLeft, pointTop} = this.state

    return (
      <div className="Game">
        <Line />
        <Point left={pointLeft} top={pointTop}/>
      </div>
    );
  }
}

export default Game;
