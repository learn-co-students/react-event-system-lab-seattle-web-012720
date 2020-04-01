import React, { Component } from 'react';

class EyesOnMe extends Component {

    handleBlur = () => {
        console.log("Hey! Eyes on me!");
    }

    handleFocus = () => {
        console.log("Good!");
    }

    render() {
        return <button onBlur={this.handleBlur} onFocus={this.handleFocus}>My Button!</button>
    }

}

export default EyesOnMe;