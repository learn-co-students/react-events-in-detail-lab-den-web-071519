import React, { Component } from 'react'

export default class DelayedButton extends Component {

    handleClick = (event) => {
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                When am I?
            </button>
        )
    }
}

