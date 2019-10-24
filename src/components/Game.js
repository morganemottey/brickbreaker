import React, {Component} from 'react';
import './Game.css';
import Point from './Point';
import Bricks from './Bricks';
import Pad from './Pad';

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

  generateIfCollideX = (left, top) => {
    return (this.state.pointTop+19>top && this.state.pointTop<top+9 && this.state.pointLeft+20>left && this.state.pointLeft<left+65)
  }

  generateIfCollideY = (left, top) => {
    return (this.state.pointTop+20>top && this.state.pointTop<top+10 && this.state.pointLeft+19>left && this.state.pointLeft<left+64)
  }

  checkIfCollideX = () => {
    return (this.state.brickWall
      .filter( item => {
        return this.generateIfCollideX(item.left, item.top)===true
      })
      .map(item=>{
        return this.generateIfCollideX(item.left, item.top)
      }))
      .join('||')
  }

  checkIfCollideY = () => {
    return (this.state.brickWall
      .filter( item => {
        return this.generateIfCollideY(item.left, item.top)===true
      })
      .map( item => {
        return this.generateIfCollideY(item.left, item.top)
      }))
      .join('||')
  }

  MoovingBallX = () => {
    if (this.state.goRight){
      // eslint-disable-next-line 
        this.setState({pointLeft : this.state.pointLeft+=this.state.xSpeed})
    } else if (!this.state.goRight){
      // eslint-disable-next-line 
        this.setState({pointLeft : this.state.pointLeft-=this.state.xSpeed})
    }
    

    if (this.state.pointLeft > 355 || this.state.pointLeft < 0 || this.checkIfCollideX()
      ){
        this.setState({goRight : !this.state.goRight})
    }

    setTimeout(this.MoovingBallX, 1)
  }

  MoovingBallY = () => {
    if (this.state.goDown){
      // eslint-disable-next-line 
        this.setState({pointTop : this.state.pointTop+=this.state.ySpeed})
    } else if (!this.state.goDown){
      // eslint-disable-next-line 
        this.setState({pointTop : this.state.pointTop-=this.state.ySpeed})
    }
    

    if (this.state.pointTop > 587 || this.state.pointTop < 0 || this.checkIfCollideY()
    ){
        this.setState({goDown : !this.state.goDown})
    }

    setTimeout(this.MoovingBallY, 1) 
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

  componentDidMount(){
    this.MoovingBallX()
    this.MoovingBallY()
  }

  render(){
    const {pointLeft, pointTop} = this.state
    return (
      <div className="Game">
        <div style={{position: 'relative', height:'600px', width:'375', top:'67px'}}>
          {this.state.brickWall.map( item => {
            return(
              <Bricks 
              top={item.top}
              left={item.left}
              />
            ); 
          })}
        <Point left={pointLeft} top={pointTop}/>
        <Pad/>
        </div>
      </div>
    );
  }
}

export default Game;