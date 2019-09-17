// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

    

    render(){
        const handleClick = (event) => {
            setTimeout(() => {
                this.props.onDelayedClick(event)
            }, this.props.delay)
            event = null
        }
        
        return(
            <button onClick={handleClick(this.event)}></button>
        )
    }
}