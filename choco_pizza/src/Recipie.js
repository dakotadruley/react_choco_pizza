import React, { Component } from 'react';

export default class Recipie extends Component {
    render() {
        return (
        <div className="text">
            <ul className="leftSide">
                <li><input type="checkbox">1 1/2 cups milks</input></li>
                <li><input type="checkbox">1/2 cup marscarpone</input></li>
                <li><input type="checkbox">1/2 tsp pink sal/</input></li>
                <li><input type="checkbox">1 lb Black Mission Figs</input></li>
                <li><input type="checkbox">1/2 cup brown sugar</input></li>
                <li><input type="checkbox">2-4 tbsp water</input></li>
        </ul>
        <ul className="rightSide">
            <li><input type="checkbox">1 1/2 cups heavy cream</input></li>
            <li><input type="checkbox">4/3 granulated sugar</input></li>
            <li><input type="checkbox">2 egg yolks</input></li>
            <li><input type="checkbox">1 lemon, juiced</input></li>
            <li><input type="checkbox">2 tbsp butter</input></li>
            <li><input type="checkbox">1 cup honey roasted pecans, roughly chopped</input></li>
        </ul>
    </div>
    )
}
}