// Code EyesOnMe Component Here

import React, { Component } from 'react';

export default class EyesOnMe extends React.Component {
    constructor(){
        super()

    }

    focusHandler = (e) => {
        console.log('Good!')
    }

    blurHandler = (e) => {
        console.log('Hey! Eyes on me!')
    }


    render (){
        console.log(this.props)
        return (
            <button onFocus={this.focusHandler} onBlur={this.blurHandler}/>
        )
    }

}