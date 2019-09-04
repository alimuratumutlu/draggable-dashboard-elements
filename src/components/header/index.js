import React, { Component } from "react";
import axios from "axios";

import Notification from "./Notification";
import Logo from "./logo";

import * as data from "../../data.json";

import { connect } from "react-redux";

import * as ACTIONS from "../../store/actions/actions";

import "./index.css";

class index extends Component {
  state = {
    notifications: []
  };

  componentDidMount = async () => {
    const {data} = await axios.get("./data.json");
    this.setState({ notifications: data.notifications });
    this.setState({ notCount: data.notifications.length });

  };

  render() {
    const notifications = this.state.notifications.map(notification => (
      <Notification
        who={notification.who}
        did={notification.did}
        what={notification.what}
        where={notification.where}
        when={notification.when}
      />
    ));

    console.log(this.state.notifications)

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
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
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
          <li className="dropdown notification-list">
            <a
              className="nav-link dropdown-toggle arrow-none"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i className="fi-bell noti-icon" />
              <span className="badge badge-danger badge-pill noti-icon-badge">
                {this.props.notCount}
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg">
              <div className="dropdown-item noti-title">
                <h5 className="m-0">
                  <span className="float-right">
                    <a
                      href="#"
                      onClick={() => this.props.action_creator1()}
                      className="text-dark"
                    >
                      <small>Tümünü Okundu Yap</small>
                    </a>
                  </span>
                </h5>
              </div>

              <div  style={{ minHeight: 230 }}>
                {notifications}
              </div>
            </div>
          </li>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    notCount: state.notification_reducer.notCount
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action_creator1: () => dispatch(ACTIONS.okunduyap())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
