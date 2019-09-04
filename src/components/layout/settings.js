import React, { Component } from 'react'

export default class settings extends Component {
    render() {
        const {children} = this.props;

        return (
            <div>
                <h3>Pencere Pozisyonları</h3>
                {children}
            </div>
        )
    }
}
