import React, { Component } from 'react';
import { dogs } from './arrayOfObjects.js';

export default class Array extends Component {
    render() {
       const dogos = dogs.map(dog => {
            return <li>
                <span>{dog.name} is a {dog.type} </span>
                </li>
       })
        return (
            <div>
                { dogos }
            </div>
            )
    }}