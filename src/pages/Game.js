import React, { Component } from 'react';
import './Game.css';
import Point from '../components/Point';
import Bricks from '../components/Bricks';
import Pad from '../components/Pad';
import Bonus from '../components/Bonus';
import MoveBart from '../components/MoveBart'
import Popuploose from '../components/Popuploose';
import Popupwin from '../components/Popupwin';
import Countdown from '../components/Countdown';
import brickUrl from '../musique/brick.mp3'
import Malus from '../components/Malus';
import dunutsUrl from '../musique/donuts.mp3'
import dohUrl from '../musique/doh.mp3'
import FallingBart from '../components/FallingBart';

class Game extends Component {
  constructor(props) {
    super(props)
    this.interval = 5;
    this.bartGoRight = true;
    this.goRight = true;
    this.goDown = false;
    this.isBallMoving = false;
    this.counterBall = 0;
    this.life = 3;
    this.padWidth = 100;
    this.malusOn = false;
    this.speedX = 1.5;
    this.speedY = 1.5;
    this.win = false;
    this.loose = false;
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
      time: 91,
      color: 'white',
    }
    this.brick = new Audio(brickUrl);
    this.dunuts = new Audio(dunutsUrl);
    this.doh = new Audio(dohUrl);
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

  manageAudioDoh = () => {
    this.doh.play()
  }

  deleteBricks = () => {
    const newBrickWall = this.state.brickWall
      .filter(item => {
        return !(this.state.pointTop + 20 > item.top && this.state.pointTop < item.top + 20 && this.state.pointLeft + 20 > item.left && this.state.pointLeft < item.left + 67)
      })
    if (newBrickWall.length < this.state.brickWall.length) {
      this.manageAudioBricks()
    }
    this.setState({
      brickWall: newBrickWall
    })

  }

  getBonus = () => {
    if ((Math.ceil(Math.random() * 8) === 8) && (this.padWidth === 100)) {
      const newDonutsTab = this.state.brickWall
        .find(item => {
          return (this.state.pointTop + 20 > item.top && this.state.pointTop < item.top + 20 && this.state.pointLeft + 20 > item.left && this.state.pointLeft < item.left + 67)
        })
      this.setState({ bonus: [...this.state.bonus, newDonutsTab] })
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
    if ((!this.malusOn) && (this.state.brickWall.length > 2)) {
      //On change l'état au bout d'un temps random puis on rappelle la fonction. 
      setTimeout(() => {
        this.setState({
          malus: [...this.state.malus, this.state.bartDepart]
        })
        this.getMalus();
      }, Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000)
    }
  }

  isMalusCollide = (top, left) => {
    if (top > 472
      && top <= 475
      && left + 10 > this.state.xLeft
      && left - 10 < this.state.xLeft + this.padWidth) {
      this.malusOn = true;
      this.manageAudioDoh()
      return true
    }
  }

  isBartCollide = (top, left) => {
    if (top > 472
      && top <= 475
      && left + 10 > this.state.xLeft
      && left - 10 < this.state.xLeft + this.padWidth) {
      this.win = true;
      return true
    }
  }

  isBartDontCollide = () => {
    this.loose = true
  }

  generateIfCollideX = (left, top) => {
    // 10 correspond à la moitié de la balle, 2.5 à la moitié du espace vertical, 5 à la moitié d'un espace horizontal
    return (this.state.pointTop + 10 > top - 2.5 && this.state.pointTop + 10 < top + 22.5 && this.state.pointLeft + 20 > left && this.state.pointLeft < left + 67)
  }

  generateIfCollideY = (left, top) => {
    return (this.state.pointTop + 20 > top && this.state.pointTop < top + 20 && this.state.pointLeft + 10 > left - 5 && this.state.pointLeft + 10 < left + 67 + 5)
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
    if (this.state.pointTop > 472 && this.state.pointTop < 474) {
      if (this.state.pointLeft + 10 > (this.state.xLeft + this.padWidth * 0)
        && this.state.pointLeft - 10 < (this.state.xLeft + this.padWidth * 0.1)) {
        this.goRight = true;
        this.speedX = -1.5;
        this.speedY = 1.5
      }
      else if (this.state.pointLeft + 10 >= (this.state.xLeft + this.padWidth * 0.1)
        && this.state.pointLeft - 10 < (this.state.xLeft + this.padWidth * 0.3)) {
        this.goRight = true;
        this.speedX = -1;
        this.speedY = 2
      }
      else if (this.state.pointLeft + 10 >= (this.state.xLeft + this.padWidth * 0.30)
        && this.state.pointLeft - 10 < (this.state.xLeft + this.padWidth * 0.45)) {
        this.goRight = true;
        this.speedX = -0.5;
        this.speedY = 2.5
      }
      else if (this.state.pointLeft + 10 >= (this.state.xLeft + this.padWidth * 0.45)
        && this.state.pointLeft - 10 < (this.state.xLeft + this.padWidth * 0.55)) {
        this.goRight = true;
        this.speedX = 0;
        this.speedY = 3
      }
      else if (this.state.pointLeft + 10 >= (this.state.xLeft + this.padWidth * 0.55)
        && this.state.pointLeft - 10 < (this.state.xLeft + this.padWidth * 0.70)) {
        this.goRight = true;
        this.speedX = 0.5;
        this.speedY = 2.5
      }
      else if (this.state.pointLeft + 10 >= (this.state.xLeft + this.padWidth * 0.70)
        && this.state.pointLeft - 10 < (this.state.xLeft + this.padWidth * 0.90)) {
        this.goRight = true;
        this.speedX = 1;
        this.speedY = 2
      }
      else if (this.state.pointLeft + 10 >= (this.state.xLeft + this.padWidth * 0.90)
        && this.state.pointLeft - 10 < (this.state.xLeft + this.padWidth * 1)) {
        this.goRight = true;
        this.speedX = 1.5;
        this.speedY = 1.5
      }
    }

    return (this.state.pointTop > 472
      && this.state.pointTop < 474
      && this.state.pointLeft + 10 > this.state.xLeft
      && this.state.pointLeft - 10 < this.state.xLeft + this.padWidth)
  }

  moovingBall = () => {
    if (this.isBallMoving) {
      this.setState(this.goRight ? { pointLeft: this.state.pointLeft + this.speedX } : { pointLeft: this.state.pointLeft - this.speedX })
      if (this.state.pointLeft > 355 || this.state.pointLeft < 0
      ) {
        this.goRight = !this.goRight
      } else if (this.checkIfCollideX()) {
        this.getBonus()
        this.deleteBricks()
        this.goRight = !this.goRight
      }
      this.setState(this.goDown ? { pointTop: this.state.pointTop + this.speedY } : { pointTop: this.state.pointTop - this.speedY })
      if (this.state.pointTop < 0 || this.checkIfCollidePadY()
      ) {
        this.goDown = !this.goDown
      } else if (this.checkIfCollideY()) {
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
      this.speedX = 1.5
      this.speedY = 1.5
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
    // brick.push({ top: 0, left: 0 })
    return brick;
  };

  MouvBartX = () => {
    if (this.bartGoRight) {
      this.setState({ bartDepart: this.state.bartDepart + 5 })
    } else {
      this.setState({ bartDepart: this.state.bartDepart - 5 })
    }
    if (this.state.bartDepart > 375 - 35)
      this.bartGoRight = false;

    else if (this.state.bartDepart < 35) {
      this.bartGoRight = true
    }
    setTimeout(this.MouvBartX, 100)
  }

  getRestart = () => {
    this.life = 3
    this.win = false
    this.setState({ brickWall: this.getBrickWall(), bonus: [], time: 61 })
  }

  countDown = () => {
    if (this.props.counter === true) {
      if (this.state.time > 0) {
        this.setState({ time: this.state.time - 1 })
      }
      if (this.state.time <= 9) {
        this.setState({ color: "red" })
      }
      if (this.state.time === 0) {
      }
      setTimeout(this.countDown, 1000)
    }
  }

  componentDidMount() {
    this.moovingBall()
    this.movePad()
    this.MouvBartX()
    this.countDown()
    this.getMalus()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.timer === 8 || this.state.pointLeft > 355 || this.state.pointLeft < 0 || this.checkIfCollideX() || this.state.pointTop < 0 || this.checkIfCollideY() || this.checkIfCollidePadY();
  }


  render() {
    const { pointLeft, pointTop, xLeft, bartDepart, brickWall } = this.state
    return (
      <div className="Game" style={{ transform: this.malusOn ? 'scale(0.85) scaleX(-1)' : 'scale(0.85)' }}>
        {(this.life === 0 || this.state.time === 0 || this.loose === true) && <Popuploose restart={this.getRestart} />}
        {this.win && <Popupwin restart={this.getRestart} />}
        <div className="header">
          <div className="lifeBar">
            <div className={this.life >= 3 ? "life" : "noLife"}></div>
            <div className={this.life >= 2 ? "life" : "noLife"}></div>
            <div className={this.life >= 1 ? "life" : "noLife"}></div>
          </div>
          {this.props.counter === true && <Countdown time={this.state.time} color={this.state.color}></Countdown>}
        </div>
        <div style={{ position: 'relative', height: '600px', width: '375', top: '67px' }}>
          <MoveBart left={bartDepart} bartGoRight={this.bartGoRight} endGame={brickWall} />
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
                isMalusCollide={this.isMalusCollide} />
            )
          }
          )}
          {this.state.brickWall.length === 0 &&
            <FallingBart
              left={this.state.bartDepart}
              isBartCollide={this.isBartCollide}
              isBartDontCollide={this.isBartDontCollide}
            />
          }
          < Point left={pointLeft} top={pointTop} move={this.isBallMoving} brick={brickWall} />
          {/* <div style={{width: `${this.padWidth}px` , zIndex:'1000', position:'absolute', top:'492px', left:`${xLeft}px`, border: '2px red solid'}}></div> */}
          <Pad left={xLeft} width={this.padWidth} />
        </div>
      </div>
    );
  }
}

export default Game;