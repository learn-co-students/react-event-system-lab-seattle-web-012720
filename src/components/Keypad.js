// Code Keypad Component Here
import React, {Component} from "react";

class Keypad extends Component {

    handleInput = () => console.log('Entering password...')

    render () {
        return (
            <input onKeyUp={this.handleInput}
                type="password"
            >
            </input>
        )
    }
}

export default Keypad;