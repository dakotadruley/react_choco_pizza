import React, { Component } from 'react';

export default class Vanessa extends Component {
    render() {
        return (
            <section className="vanessa">
            <img src={this.props.vanPic} alt='Vanessa'/>
            <h2>Vanessa Stevenson</h2>
            <p className="pBody">Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
            <button type="button">SHARE RECIPE </button>
            </section>
        )
    }
}