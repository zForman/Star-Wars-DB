import React, { Component } from 'react'
import './loader-indicator.css'

export default class LoaderIndicator extends Component {

    render() {
        return (
            <div className="d-flex container lds-spinner ">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }
}