import React, { Component } from 'react';
import './Game.css';
import Point from '../components/Point';
import Bricks from '../components/Bricks';
import Pad from '../components/Pad';
import Bonus from '../components/Bonus';
import MoveBart from '../components/MoveBart'
// import Malus from '../components/Malus'


class Game extends Component {
  constructor(props) {
    super(props)
    this.interval = 100;
    this.goRight = true;
    this.goDown = false;
    this.isBallMoving = false;
    this.counterBall = 0;
    this.state = {
      bartDepart: 0,
      // malusTop : -35,
      // malusLeft : this.bartDepart,
      pointLeft: 20,
      pointTop: 400,
      brickWall: this.getBrickWall(),
      xLeft: 0,
      bonus: [],
      getBonus: false,
    }
  }

  movePad = () => {
    document.addEventListener('touchstart', event => {
      this.setState({
        xLeft: Math.ceil(event.touches[0].pageX)
      })
      if (!this.isBallMoving && this.counterBall === 1) {
        this.isBallMoving = true
      } else if (!this.isBallMoving) {
        this.counterBall++
      }
    }, false);
    document.addEventListener('touchmove', event => {
      if ((this.state.xLeft > 0) && (this.state.xLeft < 315))
        this.setState({
          xLeft: Math.ceil(event.touches[0].pageX)
        })
    }, false);

  }

  deleteBricks = () => {
    this.setState({
      brickWall: this.state.brickWall
        .filter(item => {
          return !(this.state.pointTop + 20 > item.top && this.state.pointTop < item.top + 10 && this.state.pointLeft + 20 > item.left && this.state.pointLeft < item.left + 67)
        })
        .map(item => {
          return item
        })
    })
  }

  getBonus = () => {
    if (Math.ceil(Math.random() * 5) === 5 && !this.state.getBonus && (this.checkIfCollideX() || this.checkIfCollideY())) {
      const newDonutsTab = this.state.brickWall
        .filter(item => {
          return (this.state.pointTop + 20 > item.top && this.state.pointTop < item.top + 10 && this.state.pointLeft + 20 > item.left && this.state.pointLeft < item.left + 67)
        })
        .map(item => {
          return item
        })
      newDonutsTab.push(...this.state.bonus)
      this.setState({ bonus: newDonutsTab, getBonus: true })
    }
    else if (this.state.getBonus && (this.checkIfCollideX() || this.checkIfCollideY())) {
      this.setState({ getBonus: false })
    }
  }

  generateIfCollideX = (left, top) => {

    return (this.state.pointTop + 17 > top && this.state.pointTop < top + 7 && this.state.pointLeft + 20 > left && this.state.pointLeft < left + 67)
  }

  generateIfCollideY = (left, top) => {
    return (this.state.pointTop + 20 > top && this.state.pointTop < top + 10 && this.state.pointLeft + 17 > left && this.state.pointLeft < left + 64)
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
    return (this.state.pointTop > 518
      && this.state.pointTop <= 521
      && this.state.pointLeft - 10 > this.state.xLeft - 30
      && this.state.pointLeft - 10 < this.state.xLeft + 30)
  }

  moovingBall = () => {
    const speed = 100 * this.interval / 1000
    if (this.isBallMoving) {
      if (this.goRight) {
        // eslint-disable-next-line 
        this.setState({ pointLeft: this.state.pointLeft += speed })
      } else if (!this.goRight) {
        // eslint-disable-next-line 
        this.setState({ pointLeft: this.state.pointLeft -= speed })
      }
      if (this.state.pointLeft > 355 || this.state.pointLeft < 0 || this.checkIfCollideX()
      ) {
        this.getBonus()
        this.deleteBricks()
        this.goRight = !this.goRight
      }
      if (this.goDown) {
        // eslint-disable-next-line 
        this.setState({ pointTop: this.state.pointTop += speed })
      } else if (!this.goDown) {
        // eslint-disable-next-line 
        this.setState({ pointTop: this.state.pointTop -= speed })
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
      }
    } else this.setState({ pointTop: 521, pointLeft: this.state.xLeft + 20 })
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
    if (this.state.bartDepart > 375 - 30)
      this.toRight = false;

    else if (this.state.bartDepart < 0) {
      this.toRight = true
    }
    setTimeout(this.MouvBartX, 100)
  }

  // falling = () => {
  // this.setState({
  //   malusTop : this.state.malusTop + 10,
  //   malusLeft : this.state.malusLeft,
  // })
  // setTimeout(this.falling, 1000)
  // }


  componentDidMount() {
    this.moovingBall()
    this.movePad()
    this.MouvBartX()
    // this.falling()
  }


  render() {
    const { pointLeft, pointTop, xLeft, bartDepart } = this.state
    return (
      <div className="Game">
        <div style={{ position: 'relative', height: '600px', width: '375', top: '67px' }}>
          <MoveBart left={bartDepart} />
          {/* <Malus 
          left = {malusLeft} 
          top = {malusTop}/> */}
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
                key={item.top + '-' + item.left} />
            )
          }
          )}
          <Point left={pointLeft} top={pointTop} move={this.isBallMoving} />
          <Pad left={xLeft} />
        </div>
      </div>
    );
  }
}

export default Game;
