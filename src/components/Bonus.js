import React, {Component} from 'react';
import donuts from './images/Donuts.png'

class Bonus extends Component {
    constructor(props){
        super(props)
        this.style={
            width:'50px',
            position:'absolute'
        }
        this.state={
            top:this.props.top,
            display:'block'
        }
    }

    falling=()=>{
        if(this.state.top<587){
            this.setState({top: this.state.top+3})
        }else{
            this.setState({display: 'none'})
        }
        setTimeout(this.falling, 15)
    }

    componentDidMount=()=>{
        this.falling()
    }

    render(){
        const {left}=this.props
        const {top, display}=this.state
        return(
            <>
                <img style={{...this.style, top:top , left:left, display:display}} src={donuts} alt="Donuts" />
            </>
        )
    }
}

export default Bonus