import React, {Component} from 'react';
import './Game.css';
import Point from './Point';
import Bricks from './Bricks';
import Pad from './Pad';
import MoveBart from './MoveBart'
import Malus from './Malus'

class Game extends Component {
  constructor(props) {
    super(props)
    this.goRight=true;
    this.goDown=false;
    this.state = {
      bartDepart: 0,
      malusTop : -35,
      malusLeft : this.bartDepart,
      pointLeft: 20,
      pointTop:587,
      brickWall: this.getBrickWall()
    }
  }

  deleteBricks=()=>{
    this.setState({brickWall:this.state.brickWall
      .filter( item => {
        return !(this.state.pointTop+20>item.top && this.state.pointTop<item.top+10 && this.state.pointLeft+20>item.left && this.state.pointLeft<item.left+65)
      })
      .map( item => {
        return item
      })})
  }

  generateIfCollideX = (left, top) => {
    return (this.state.pointTop+19>top && this.state.pointTop<top+9 && this.state.pointLeft+20>left && this.state.pointLeft<left+65)
  }

  generateIfCollideY = (left, top) => {
    return (this.state.pointTop+20>top && this.state.pointTop<top+10 && this.state.pointLeft+19>left && this.state.pointLeft<left+64)
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

  MoovingBallX = () => {
    if (this.goRight){      
      // eslint-disable-next-line 
        this.setState({pointLeft : this.state.pointLeft+=1})
    } else if (!this.goRight){
      // eslint-disable-next-line 
        this.setState({pointLeft : this.state.pointLeft-=1})
    }
    

    if (this.state.pointLeft > 355 || this.state.pointLeft < 0 || this.checkIfCollideX()
      ){
        this.goRight=!this.goRight
        this.deleteBricks()
    }

    setTimeout(this.MoovingBallX, 1)
  }

  MoovingBallY = () => {
    if (this.goDown){
      // eslint-disable-next-line 
        this.setState({pointTop : this.state.pointTop+=1})
    } else if (!this.goDown){
      // eslint-disable-next-line 
        this.setState({pointTop : this.state.pointTop-=1})
    }
    

    if (this.state.pointTop > 587 || this.state.pointTop < 0 || this.checkIfCollideY()
    ){
        this.goDown=!this.goDown
        this.deleteBricks()
    }

    setTimeout(this.MoovingBallY, 1) 
  }

  getBrickWall = () => {
    const brick = [];
        for (let i = 0; i < 6; i++) {     
            for (let j = 0; j < 5; j++){
              brick.push ({top:i*25, left:j*77})
            } 
        }
    return brick;
  };

  MouvBartX = () => {
    if (this.toRight) {
      this.setState({ bartDepart:  this.state.bartDepart + 5 })
    } else {
      this.setState({ bartDepart: this.state.bartDepart - 5 })
    }
    if (this.state.bartDepart > 375-30)
      this.toRight = false;

    else if (this.state.bartDepart < 0) {
      this.toRight = true
    }
    setTimeout(this.MouvBartX, 100)
  }

falling = () => {
  this.setState({
    malusTop : this.state.malusTop + 10,
    malusLeft : this.state.malusLeft,
  })
  setTimeout(this.falling, 1000)
}



  componentDidMount(){
    this.MoovingBallX()
    this.MoovingBallY()
    this.MouvBartX()
    this.falling()
 
  }

  render(){
    const {pointLeft, pointTop, bartDepart, malusTop, malusLeft} = this.state
    return (
      <div className="Game">
        
        <div style={{position: 'relative', height:'600px', width:'375', top:'67px' , border:'1px black solid'}}>
        <MoveBart left = {bartDepart} />
        
        <Malus 
        left = {malusLeft} 
        top = {malusTop}/>
      
        
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
        <Pad/>
       
        </div>
      </div>
    );
  }
}

export default Game;
