import React, { Component } from 'react';

export class CoordinatesButton extends Component {
    
    handleClick = (event) => {
        const array = []
        const screenX = event.screenX
        const screenY = event.screenY
        array.push(screenX, screenY)
        this.props.onReceiveCoordinates(array)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>I'm a button!</button>
            </div>
        )
    }
}

export default CoordinatesButton