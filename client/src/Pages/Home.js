import React, { Component } from 'react';
import HomePicture from '../Assets/HomePicture.jpg';

export default class Home extends Component {
    render() {
        return (
            <div>
                <img
                    src={HomePicture}
                    height="100%"
                    width="100%"
                    alt="HomePicture"
                />
            </div>
        )
    }
}