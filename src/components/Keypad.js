// Code Keypad Component Here

import React, { Component } from 'react';

export default class Keypad extends React.Component {
    constructor(){
        super()

    }

    consoleLog = (event) => {
        console.log('Entering password...')
    }


    render (){
        //console.log(this.props)
        return (
            <input type="password" onKeyUp={this.consoleLog}/>

          
        )
    }

}