import React, { Component } from 'react';

class Keypad extends Component {

    handleSubmit = () => {
        console.log('Entering password...')
    }

    render() {
        return <input type="password" onKeyUp={this.handleSubmit} />
    }

}

export default Keypad;