import React, { Component } from 'react'

class CoordinatesButton extends Component {

    handleClick = (event) => {
        const coordinates = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinates)
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>
                    Click me!
                </button>
            </div>
        )
    }
}

export default CoordinatesButton;