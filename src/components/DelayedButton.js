import React, { Component } from 'react'

class DelayedButton extends Component {
    
    handleClick = (event) => {
        event.persist()
        setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    } 
    
    
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>
                    Delay that ish
                </button>
            </div>
        )
    }
}

export default DelayedButton;