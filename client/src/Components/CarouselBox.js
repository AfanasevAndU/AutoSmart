import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import TechImg from '../Assets/Technicalauto.jpg';
import UrImg from '../Assets/Uridicalauto.jpg';
import { Link, } from "react-router-dom";


export default class CarouselBox extends Component {
    render() {
        return (
        <>
            <Carousel>
                <Carousel.Item>
                    <Link to="/TechnicalGuide">
                        <img
                            ClassName="d-block w-100"
                            height="720"
                            width="100%"
                            src={ TechImg }
                            alt='Tech'
                        />
                    </Link>
                    <Carousel.Caption>
                        <h3 class="center-text"> Проверка технической части автомобиля</h3>
                    </Carousel.Caption>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <Link to="/DocumentBlog">   
                        <img
                            ClassName="d-block w-100"
                            height="720"
                            width="100%"
                            src={ UrImg }
                            alt='Ur'
                        />
                    </Link>
                    <Carousel.Caption>
                        <h3 class="center-text2"> Проверка юридической части автомобиля </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
            
        </>
        )
    }
}