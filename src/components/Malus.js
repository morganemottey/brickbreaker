import React, {Component} from 'react';
import duff from '../images/Duff.png'

class Malus extends Component {
    constructor(props){
        super(props)
        this.style={
            width:'40px',
            height:'70px',
            position:'absolute',
        }
        this.state={
            top:-35,
            display:'block'
        }
    }

    falling=()=>{
        if(this.state.top<587){
            this.setState({top: this.state.top+3})
            this.props.callback(this.state.top,this.props.left)
            && this.setState({display: 'none'})
        }else{
            this.setState({display: 'none'})
        }
        setTimeout(this.falling, 40)
    }

    componentDidMount=()=>{
        this.falling();
    }

    render(){
        const {left}=this.props
        const {top, display}=this.state
        return(
            <>
                <img style={{...this.style, top:top , left:left, display:display}}
                    src={duff}
                    alt="Duff"
                    />
            </>
        )
    }
}

export default Malus