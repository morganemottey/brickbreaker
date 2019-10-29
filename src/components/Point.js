import React, {Component} from 'react';

class Point extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        const style = {
            width: "20px",
            height: "20px",
            background: `radial-gradient(white, #9198e5)`,
            borderRadius: "50%",
            position:'absolute'
        }
        const {left, top} = this.props

        return(
            <div style={{...style, left:left, top:top}}/>
        )
    }

}

export default Point