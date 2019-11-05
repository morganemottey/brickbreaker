import React, {Component} from 'react';
import './Game.css';
import Point from './Point';
import Bricks from './Bricks';
import Pad from './Pad';

class Game extends Component {
  constructor(props) {
    super(props)
    // this.xPadMin= 157.5,
    // this.xPadMax= 217.5,
    this.interval=100;
    this.goRight=true;
    this.goDown=false;
    this.state = {
      pointLeft: 20,
      pointTop: 400,
      brickWall: this.getBrickWall(),
      xLeft:0
    }
  }

  movePad = () => {
    document.addEventListener('touchstart', event => {
        this.setState({
            xLeft: Math.ceil(event.touches[0].pageX)
        })
    }, false);
    document.addEventListener('touchmove', event => {
        if ((this.state.xLeft > 0) && (this.state.xLeft < 315)) 
        this.setState({
            xLeft: Math.ceil(event.touches[0].pageX)
        })
    }, false);
}

  deleteBricks=()=> {
    this.setState({brickWall:this.state.brickWall
      .filter( item => {
        return !(this.state.pointTop+20>item.top && this.state.pointTop<item.top+10 && this.state.pointLeft+20>item.left && this.state.pointLeft<item.left+65)
      })
      .map( item => {
        return item
      })})
  }

  generateIfCollideX = (left, top) => {
    return (this.state.pointTop+17>top && this.state.pointTop<top+7 && this.state.pointLeft+20>left && this.state.pointLeft<left+67)
  }

  generateIfCollideY = (left, top) => {
    return (this.state.pointTop+20>top && this.state.pointTop<top+10 && this.state.pointLeft+17>left && this.state.pointLeft<left+64)
  }

  checkIfCollideX = () => {
    return (this.state.brickWall
      .find( item => {
        return this.generateIfCollideX(item.left, item.top)===true
      }))
  }

  checkIfCollideY = () => {
    return (this.state.brickWall
      .find( item => {
        return this.generateIfCollideY(item.left, item.top)===true
      }))
  }

  checkIfCollidePadY = () => {
    return (this.state.pointTop > 518 
      && this.state.pointTop <= 521 
      && this.state.pointLeft-10>this.state.xLeft-30
      && this.state.pointLeft-10<this.state.xLeft+30)
  }



  MoovingBallX = () => {
    const speed=100*this.interval/1000
    if (this.goRight){
      // eslint-disable-next-line 
        this.setState({pointLeft : this.state.pointLeft+=speed})
    } else if (!this.goRight){
      // eslint-disable-next-line 
        this.setState({pointLeft : this.state.pointLeft-=speed})
    }

    if (this.state.pointLeft > 355 || this.state.pointLeft < 0 || this.checkIfCollideX()
      ){
        this.goRight=!this.goRight
        this.deleteBricks()
    }
    if (this.goDown){
      // eslint-disable-next-line 
        this.setState({pointTop : this.state.pointTop+=speed})
    } else if (!this.goDown){
      // eslint-disable-next-line 
        this.setState({pointTop : this.state.pointTop-=speed})
    }
    
    if (this.state.pointTop > 587 || this.state.pointTop < 0 || this.checkIfCollideY() || this.checkIfCollidePadY()
    ){
        this.goDown=!this.goDown
        this.deleteBricks()
    }

    setTimeout(this.MoovingBallX, this.interval)
  }

  // MoovingBallY = () => {
  //   const speed=0.03*this.interval
  //   if (this.goDown){
  //     // eslint-disable-next-line 
  //       this.setState({pointTop : this.state.pointTop+=speed})
  //   } else if (!this.goDown){
  //     // eslint-disable-next-line 
  //       this.setState({pointTop : this.state.pointTop-=speed})
  //   }
    
  //   if (this.state.pointTop > 587 || this.state.pointTop < 0 || this.checkIfCollideY() || this.checkIfCollidePadY()
  //   ){
  //       this.goDown=!this.goDown
  //       this.deleteBricks()
  //   }

  //   setTimeout(this.MoovingBallY, this.interval) 
  // }

  getBrickWall = () => {
    const brick = [];
        for (let i = 0; i < 6; i++) {     
            for (let j = 0; j < 5; j++){
              brick.push ({top:i*25, left:j*77})
            } 
        }
    return brick;
  };

  componentDidMount(){
    this.MoovingBallX()
    // this.MoovingBallY()
    this.movePad()
  }

  render(){
    const {pointLeft, pointTop, xLeft} = this.state
    return (
      <div className="Game">
        <div style={{position:'relative', height:'600px', width:'375', top:'67px'}}>

          {this.state.brickWall.map( item => {
            return(
              <Bricks 
              top={item.top}
              left={item.left}
              key={item.top+'-'+item.left}
              />
            ); 
          })}
        <Point left={pointLeft} top={pointTop}/>
        <Pad left={xLeft}/>
        </div>
      </div>
    );
  }
}

export default Game;
