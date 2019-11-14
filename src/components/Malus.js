import React, { Component } from 'react';
import duff from '../images/Duff.png'
import bart from '../images/bart_fall.png'

class Malus extends Component {
    constructor(props) {
        super(props)
        this.style = {
            width: '40px',
            height: '70px',
            objectFit: 'contain',
            position: 'absolute',
        }
        this.state = {
            top: -35,
            display: 'block'
        }
    }

    falling = () => {
        if (this.state.top < 587) {
            this.setState({ top: this.state.top + 3 })
            if (this.props.endGame.length > 0) {
                this.props.isMalusCollide(this.state.top, this.props.left)
                    && this.setState({ display: 'none' })
            }
            if (this.props.endGame.length === 0) {
                this.props.isBartCollide(this.state.top, this.props.left)
                    && this.setState({ display: 'none' , top : -200})
            }

        } else if (this.props.endGame.length > 0) {
            this.setState({ display: 'none' })
        } else {
            this.props.isBartDontCollide()
            this.setState({ display: 'none' , top : -200})
        }
        setTimeout(this.falling, 10)
    }

    componentDidMount = () => {
        this.falling();
    }

    render() {
        const { left, endGame } = this.props
        const { top, display } = this.state
        return (
            <>
                <img style={{ ...this.style, top: top, left: left, display: display }}
                    src={endGame.length === 0 ? bart : duff}
                    alt='Duff'
                />
            </>
        )
    }
}

export default Malus