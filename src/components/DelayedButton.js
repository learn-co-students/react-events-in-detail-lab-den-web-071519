import React, { Component } from 'react';

export class DelayedButton extends Component {

    handleClick = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }
        
    

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>I'm also a button!!!</button>
            </div>
        )
    }
}

export default DelayedButton