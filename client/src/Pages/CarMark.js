import React, { Component } from 'react'
import { Link, } from "react-router-dom";
import MERCEDES from '../Assets/MERCEDES.jpg';
import BMW from '../Assets/BMW.jpg';
import VAZ from '../Assets/VAZ.jpg';
import VW from '../Assets/VW.jpg';
import TOYOTA from '../Assets/TOYOTA.jpg';

export default class CarMark extends Component {
    render() {
        return (
            <div class="gallery">
                    <figure class="gallery__item gallery__item--1">
                        
                            <img
                            src = { VW }
                            class = "gallery__img"
                            alt = "Image1"
                            />
                        
                    </figure>
                    <figure class="gallery__item gallery__item--2">
                        
                            <img
                            src = { BMW }
                            class = "gallery__img"
                            alt = "Image2"
                            />
                    
                    </figure>
                    <figure class="gallery__item gallery__item--3">
                        <img
                            src = { MERCEDES }
                            class = "gallery__img"
                            alt = "Image3"
                        />
                    </figure>
                    <figure class="gallery__item gallery__item--4">
                        <img
                            src = { VAZ }
                            class = "gallery__img"
                            alt = "Image3"
                        />
                    </figure>
                   
            </div>
        )
    }
}