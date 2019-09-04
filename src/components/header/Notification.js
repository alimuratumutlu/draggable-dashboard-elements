import React, { Component } from 'react'

export default class notificationBar extends Component {
    render() {
        return (
              <p className="notify-details">
                {this.props.who}{" "}{this.props.did}{" "}{this.props.what}{" "}on{" "}{this.props.where}
                <small className="text-muted">{this.props.when}</small>
              </p>
        )
    }
}
