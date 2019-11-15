import React, { Component } from 'react';
import bart from '../images/bart_fall.png'

class FallingBart extends Component {
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
                if (this.props.isBartCollide(this.state.top, this.props.left)){
                    this.setState({ display: 'none'})
                } else {
                    setTimeout(this.falling, 10)
                }
        } else {
            this.props.isBartDontCollide()
            this.setState({ display: 'none'})
        }
    }

    componentDidMount = () => {
        this.falling();
    }

    render() {
        const { left } = this.props
        const { top, display } = this.state
        return (
            <>
                <img style={{ ...this.style, top: top, left: left, display: display }}
                    src={bart}
                    alt='Bart'
                />
            </>
        )
    }
}

export default FallingBart