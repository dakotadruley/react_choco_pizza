import React, { Component } from 'react';

export default class Recipie extends Component {
    render() {
        return (
        <div className="text">
            <ul className="leftSide">
                <li><input type="checkbox"/>1 1/2 cups milks</li>
                <li><input type="checkbox"/>1/2 cup marscarpone</li>
                <li><input type="checkbox"/>1/2 tsp pink salt</li>
                <li><input type="checkbox"/>1 lb Black Mission Figs</li>
                <li><input type="checkbox"/>1/2 cup brown sugar</li>
                <li><input type="checkbox"/>2-4 tbsp water</li>
        </ul>
        <ul className="rightSide">
            <li><input type="checkbox"/>1 1/2 cups heavy cream</li>
            <li><input type="checkbox"/>4/3 granulated sugar</li>
            <li><input type="checkbox"/>2 egg yolks</li>
            <li><input type="checkbox"/>1 lemon, juiced</li>
            <li><input type="checkbox"/>2 tbsp butter</li>
            <li><input type="checkbox"/>1 cup honey roasted pecans, roughly chopped</li>
        </ul>
    </div>
    )
}
}