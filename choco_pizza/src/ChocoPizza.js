import React, { Component } from 'react';

export default class ChocoPizza extends Component {
    render() {
        return (
        <div>
            <h1>Chocolate Pizza</h1>
            <p>POSTED ON 15 DEC 2013 / DESSERTS</p>
            <div>
                <img src={this.props.printIcon} alt='Print icon'/>
                <p>PRINT</p>
            </div>
            <img src={this.props.chocoPizzaPic} alt='Chocolate Pizza'/>
        </div>
        )
    }
};

