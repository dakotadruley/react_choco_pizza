import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
        <footer>
            <img src={this.props.smallLogo} alt='small fork and knife'/>
            <p>Delicious &copy; 2013 • All Rights Reserved.<br/>
            Proudly Published with Ghost.</p>
        </footer>
        )
    }
}