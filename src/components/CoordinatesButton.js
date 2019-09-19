import React, {Component} from 'react'

class CoordinatesButton extends Component{

    handleClick = (event) => {
        let x = event.clientX
        let y = event.clientY
        let array = [x, y]
        this.props.onReceiveCoordinates(array)
    }


    render(){
        return(
            <button onClick={this.handleClick}>Coordinates</button>
        )
    }
}

export default CoordinatesButton