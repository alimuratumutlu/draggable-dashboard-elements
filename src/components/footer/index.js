import React, { Component } from "react";
import { FiGithub } from "react-icons/fi";

import "./index.css";

export default class index extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <span className="text-muted">Developed by muumdev</span>
          <a
            alt="github repo"
            className="text-muted text-right"
            href="https://github.com/muum/reactjs-draggable-fintech-dashboard"
          >
            <FiGithub size={24} />
          </a>
        </div>
      </footer>
    );
  }
}
