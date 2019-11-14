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
            background: `radial-gradient(grey, black)`,
            borderRadius: "50%",
            position:'absolute',
            boxShadow: '10px 10px 13px -2px rgba(31,31,31,0.35)',
            // transition: 'all linear 100ms'
        }
        const {left, top, move, brick} = this.props

        return(
            <div style={{...style, left:left, top:top, transition: move ? 'all linear 25ms' : 'none' , display: brick.length===0 ? 'none' : 'block'}}/>
        )
    }

}

export default Point