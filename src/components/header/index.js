/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { FaSave } from "react-icons/fa";
import axios from "axios";

import Logo from "./logo";

import "./index.css";

export default class index extends Component {
  state = {
    notifications: [],
  };

  componentDidMount = async () => {
    const { data } = await axios.get("./data.json");
    this.setState({ notifications: data.notifications });
    this.setState({ notCount: data.notifications.length });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <Logo />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                USD <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                EUR
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                BTC
              </a>
            </li>
          </ul>
          <button type="button" class="btn btn-primary settingsButton">
            <FaSave /> save view
          </button>
        </div>
      </nav>
    );
  }
}
