import React, { Component } from 'react';
import './Game.css';
import Point from '../components/Point';
import Bricks from '../components/Bricks';
import Pad from '../components/Pad';
import Bonus from '../components/Bonus';
import MoveBart from '../components/MoveBart'
import Popuploose from '../components/Popuploose';
import Popupwin from '../components/Popupwin';
import brickUrl from '../musique/brick.mp3'
import Malus from '../components/Malus';
import dunutsUrl from '../musique/donuts.mp3'


class Game extends Component {
  constructor(props) {
    super(props)
    this.interval = 5;
    this.goRight = true;
    this.goDown = false;
    this.isBallMoving = false;
    this.counterBall = 0;
    this.life = 3;
    this.padWidth = 100;
    this.malusOn = false;
    this.speedX = 1.5;
    this.speedY = 1.5;
    this.state = {
      bartDepart: 0,
      pointLeft: 20,
      pointTop: 400,
      brickWall: this.getBrickWall(),
      xLeft: 140,
      bonus: [],
      malus: [],
      timer: 0,
      isPlaying: false,

    }
    this.brick = new Audio(brickUrl);
    this.dunuts = new Audio(dunutsUrl);
  }

  movePad = () => {
    document.addEventListener('touchstart', event => {
      if ((event.touches[0].pageX - this.padWidth / 2 > 2) && (event.touches[0].pageX - this.padWidth / 2 < 373 - this.padWidth))
        this.setState({
          xLeft: Math.ceil(event.touches[0].pageX - this.padWidth / 2)
        })
      // if - else if : Compteur pour déplacer la balle avant de l'envoyer
      if (!this.isBallMoving && this.counterBall === 1) {
        this.isBallMoving = true
      } else if (!this.isBallMoving) {
        this.counterBall++
      }
    }, false);
    document.addEventListener('touchmove', event => {
      if ((this.state.xLeft > 2) && (this.state.xLeft < 373 - this.padWidth)) {
        this.setState({
          xLeft: Math.ceil(event.touches[0].pageX - this.padWidth / 2)
        })
      }
      if (this.state.xLeft <= 2) {
        this.setState({
          xLeft: 3
        })
      }
      if (this.state.xLeft >= 373 - this.padWidth) {
        this.setState({
          xLeft: 372 - this.padWidth
        })
      }
    }, false);

  }

  manageAudioBricks = () => {
    this.brick.play()
  }

  manageAudioDunuts = () => {
    this.dunuts.play()
  }

  deleteBricks = () => {
    const newBrickWall = this.state.brickWall
      .filter(item => {
        return !(this.state.pointTop + 20 > item.top && this.state.pointTop < item.top + 20 && this.state.pointLeft + 10 > item.left && this.state.pointLeft + 10 < item.left + 67)
      })
    if (newBrickWall.length < this.state.brickWall.length) {
      this.manageAudioBricks()
    }
    this.setState({
      brickWall: newBrickWall
    })

  }

  getBonus = () => {
    if ((Math.ceil(Math.random() * 6) === 6) && (this.padWidth === 100)) {
      const newDonutsTab = this.state.brickWall
        .filter(item => {
          return (this.state.pointTop + 20 > item.top && this.state.pointTop < item.top + 20 && this.state.pointLeft + 20 > item.left && this.state.pointLeft < item.left + 67)
        })
      newDonutsTab.push(...this.state.bonus)
      this.setState({ bonus: newDonutsTab })
    }
  }

  isBonusCollide = (top, left) => {
    if (top > 472
      && top <= 475
      && left + 10 > this.state.xLeft
      && left - 10 < this.state.xLeft + this.padWidth) {
      this.padWidth = 150;
      this.manageAudioDunuts()
      return true
    }
  }

  getMalus = () => {
    if (!this.malusOn) {
      //On change l'état au bout d'un temps random puis on rappelle la fonction. 
      setTimeout(() => {
        this.setState({
          malus: [...this.state.malus, this.state.bartDepart]
        })
        this.getMalus();
      }, Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000)
    }
  }

  isMalusCollide = (top, left) => {
    if (top > 472
      && top <= 475
      && left + 10 > this.state.xLeft
      && left - 10 < this.state.xLeft + this.padWidth) {
      console.log('Malus');
      this.malusOn = true;
      return true
    }
  }

  generateIfCollideX = (left, top) => {

    return (this.state.pointTop + 17 > top && this.state.pointTop < top + 17 && this.state.pointLeft + 10 > left && this.state.pointLeft + 10 < left + 67)
  }

  generateIfCollideY = (left, top) => {
    return (this.state.pointTop + 20 > top && this.state.pointTop < top + 20 && this.state.pointLeft + 10 > left && this.state.pointLeft + 10 < left + 64)
  }

  checkIfCollideX = () => {
    return (this.state.brickWall
      .find(item => {
        return this.generateIfCollideX(item.left, item.top) === true
      }))
  }

  checkIfCollideY = () => {
    return (this.state.brickWall
      .find(item => {
        return this.generateIfCollideY(item.left, item.top) === true
      }))
  }

  checkIfCollidePadY = () => {
    if (this.state.pointTop > 472 && this.state.pointTop < 474){
      if (this.state.pointLeft + 10 > (this.state.xLeft + this.padWidth*0)
        && this.state.pointLeft - 10 < (this.state.xLeft + this.padWidth*0.1)){
          this.goRight=true;
          this.speedX=-1.5;
          this.speedY=1.5
      }
      else if (this.state.pointLeft + 10 >= (this.state.xLeft + this.padWidth*0.1)
        && this.state.pointLeft - 10 < (this.state.xLeft + this.padWidth*0.3)){
          this.goRight=true;
          this.speedX=-1;
          this.speedY=2
      }
      else if (this.state.pointLeft + 10 >= (this.state.xLeft + this.padWidth*0.30)
        && this.state.pointLeft - 10 < (this.state.xLeft + this.padWidth*0.45)){
          this.goRight=true;
          this.speedX=-0.5;
          this.speedY=2.5
      }
      else if (this.state.pointLeft + 10 >= (this.state.xLeft + this.padWidth*0.45)
        && this.state.pointLeft - 10 < (this.state.xLeft + this.padWidth*0.55)){
          this.goRight=true;
          this.speedX=0;
          this.speedY=3
      }
      else if (this.state.pointLeft + 10 >= (this.state.xLeft + this.padWidth*0.55)
        && this.state.pointLeft - 10 < (this.state.xLeft + this.padWidth*0.70)){
          this.goRight=true;
          this.speedX=0.5;
          this.speedY=2.5
      }
      else if (this.state.pointLeft + 10 >= (this.state.xLeft + this.padWidth*0.70)
        && this.state.pointLeft - 10 < (this.state.xLeft + this.padWidth*0.90)){
          this.goRight=true;
          this.speedX=1;
          this.speedY=2
      }
      else if (this.state.pointLeft + 10 >= (this.state.xLeft + this.padWidth*0.90)
        && this.state.pointLeft - 10 < (this.state.xLeft + this.padWidth*1)){
          this.goRight=true;
          this.speedX=1.5;
          this.speedY=1.5
      }
    }

    return (this.state.pointTop > 472
      && this.state.pointTop < 474
      && this.state.pointLeft + 10 > this.state.xLeft
      && this.state.pointLeft - 10 < this.state.xLeft + this.padWidth)
  }

  moovingBall = () => {
    if (this.isBallMoving) {
      if (this.goRight) {
        // eslint-disable-next-line 
        this.setState({ pointLeft: this.state.pointLeft += this.speedX })
      } else if (!this.goRight) {
        // eslint-disable-next-line 
        this.setState({ pointLeft: this.state.pointLeft -= this.speedX })
      }
      if (this.state.pointLeft > 355 || this.state.pointLeft < 0 || this.checkIfCollideX()
      ) {
        this.getBonus()
        this.deleteBricks()
        this.goRight = !this.goRight
      }
      if (this.goDown) {
        // eslint-disable-next-line 
        this.setState({ pointTop: this.state.pointTop += this.speedY })
      } else if (!this.goDown) {
        // eslint-disable-next-line 
        this.setState({ pointTop: this.state.pointTop -= this.speedY })
      }
      if (this.state.pointTop < 0 || this.checkIfCollideY() || this.checkIfCollidePadY()
      ) {
        this.getBonus()
        this.deleteBricks()
        this.goDown = !this.goDown
      }
      if (this.state.pointTop > 587) {
        this.isBallMoving = false
        this.goDown = false
        this.counterBall = 0
        this.goRight = true
        this.life = this.life - 1
      }
    } else {
      this.setState({ pointTop: 472, pointLeft: this.state.xLeft - 10 + this.padWidth / 2, })
      this.speedX=1.5
      this.speedY=1.5
    }

    if (this.state.timer < 8) {
      this.setState({ timer: this.state.timer + 1 })
    } else {
      this.setState({ timer: 0 })
    }

    this.padWidth === 150 && setTimeout(() => this.padWidth = 100, 6000)
    this.malusOn && setTimeout(() => this.malusOn = false, 6000)

    setTimeout(this.moovingBall, this.interval)
  }

  getBrickWall = () => {
    const brick = [];
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 5; j++) {
        brick.push({ top: i * 25, left: j * 77 })
      }
    }
    return brick;
  };

  MouvBartX = () => {
    if (this.toRight) {
      this.setState({ bartDepart: this.state.bartDepart + 5 })
    } else {
      this.setState({ bartDepart: this.state.bartDepart - 5 })
    }
    if (this.state.bartDepart > 375 - 35)
      this.toRight = false;

    else if (this.state.bartDepart < 35) {
      this.toRight = true
    }
    setTimeout(this.MouvBartX, 100)
  }

  getRestart = () => {
    this.life = 3
    this.setState({ brickWall: this.getBrickWall(), bonus: [] })
  }

  componentDidMount() {
    this.moovingBall()
    this.movePad()
    this.MouvBartX()
    this.getMalus()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.timer === 8 || this.state.pointLeft > 355 || this.state.pointLeft < 0 || this.checkIfCollideX() || this.state.pointTop < 0 || this.checkIfCollideY() || this.checkIfCollidePadY();
  }

  render() {
    const { pointLeft, pointTop, xLeft, bartDepart } = this.state
    return (
      <div className="Game" style={{ transform: this.malusOn ? 'scale(0.85) scaleX(-1)' : 'scale(0.85)' }}>
        {this.life === 0 && <Popuploose restart={this.getRestart} />}
        {this.state.brickWall.length === 0 && <Popupwin restart={this.getRestart} />}
        <div className="lifeBar">
          <div className={this.life >= 3 ? "life" : "noLife"}></div>
          <div className={this.life >= 2 ? "life" : "noLife"}></div>
          <div className={this.life >= 1 ? "life" : "noLife"}></div>
        </div>
        <div style={{ position: 'relative', height: '600px', width: '375', top: '67px' }}>
          <MoveBart left={bartDepart} />
          {this.state.brickWall.map(item => {
            return (
              <Bricks
                top={item.top}
                left={item.left}
                key={item.top + '-' + item.left}
              />
            );
          })}
          {this.state.bonus.map(item => {
            return (
              <Bonus
                top={item.top}
                left={item.left + 10}
                key={item.top + '-' + item.left}
                callback={this.isBonusCollide} />
            )
          }
          )}
          {this.state.malus.map(item => {
            return (
              <Malus
                left={item}
                key={item}
                callback={this.isMalusCollide} />
            )
          }
          )}
          <Point left={pointLeft} top={pointTop} move={this.isBallMoving} />
          {/* <div style={{width: `${this.padWidth}px` , zIndex:'1000', position:'absolute', top:'492px', left:`${xLeft}px`, border: '2px red solid'}}></div> */}
          <Pad left={xLeft} width={this.padWidth} />
        </div>
      </div>
    );
  }
}

export default Game;