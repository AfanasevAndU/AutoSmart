import React, { Component } from 'react'
import { Link, } from "react-router-dom";
import TechImg from '../Assets/Technicalauto.jpg';
import CarMarks from '../Assets/CarMarks.jpg';

export default class TechnicalBlog extends Component {
    render() {
        return (
                <div>
                 <Link to="/TechnicalGuide">
                        <img
                            ClassName="d-block w-100"
                            height="600px"
                            width="50%"
                            src={ TechImg }
                            alt='Tech'
                        
                        />
                    </Link>
               
                    <Link to="/CarMark">
                        <img
                            ClassName="d-block w-100"
                            height="600px"
                            float="left"
                            width="50%"
                            src={ CarMarks }
                            alt='Tech'
                        />
                    </Link>
                </div>

                
        )
    }
}