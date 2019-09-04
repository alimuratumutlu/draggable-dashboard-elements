import React, { Component } from 'react'
import "./logo.css";

export default class logo extends Component {
    render() {
        return (
        <a className="navbar-brand" href="#">
            <img className="logo" src="../../assets/img/logo.jpg"  />
          </a>
        )
    }
}
