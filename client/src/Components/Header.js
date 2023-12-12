import React, { Component } from 'react';
import { Container, 
    Navbar, 
    Nav, 
    FormControl, 
    Button, 
    Form } from 'react-bootstrap';
import logo from './logo1.jpg';
import { BrowserRouter as Router,
    Route,
    Routes,
     } from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Blog from '../Pages/Blog';
import Buy from '../Pages/Buy';
import DocumentBlog from '../Pages/DocumentBlog';
import TechnicalBlog from '../Pages/TechnicalBlog';
import CarMark from '../Pages/CarMark';
import TechnicalGuide from '../Pages/TechnicalGuide';
import BMWpage from '../Pages/BMW/BMWpage';
import MERCEDESpage from '../Pages/MERCEDES/MERCEDESpage';
import TOYOTApage from '../Pages/TOYOTA/TOYOTApage';
import VAZpage from '../Pages/VAZ/VAZpage';
import VWpage from '../Pages/VW/VWpage';
import Login from '../Pages/Login';
import { Context } from "../index";
import store from '../store/UserStore';
import UserPersonal from '../Pages/UserPersonal';


export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="45"
                                width="50"
                                ClassName="d-inline-block align-top"
                                alt="logo"
                            />AutoSmart
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                            
                                <Nav.Link href="/about"> О нас </Nav.Link>
                                <Nav.Link href="/blog">Как выбрать автомобиль</Nav.Link>
                                <Nav.Link href="/CarMark">Марки автомобилей</Nav.Link>
                                
                            </Nav>
                            <Form className="d-flex" >
                                <Button href="/Login">Войти или зарегестрироваться</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/about" element={<About/>}/>
                        <Route exact path="/blog" element={<Blog/>}/>
                        <Route exact path="/buy" element={<Buy/>}/>
                        <Route exact path="/DocumentBlog" element={<DocumentBlog/>}/>
                        <Route exact path="/TechnicalBlog" element={<TechnicalBlog/>}/> 
                        <Route exact path="/CarMark" element={<CarMark/>}/> 
                        <Route exact path="/TechnicalGuide" element={<TechnicalGuide/>}/> 
                        <Route exact path="/BMW/BMWpage" element={<BMWpage/>}/> 
                        <Route exact path="/MERCEDES/MERCEDESpage" element={<MERCEDESpage/>}/> 
                        <Route exact path="/TOYOTA/TOYOTApage" element={<TOYOTApage/>}/>
                        <Route exact path="/VAZ/VAZpage" element={<VAZpage/>}/>  
                        <Route exact path="/VW/VWpage" element={<VWpage/>}/> 
                        <Route exact path="/Login" element = {<Login/>}/>
                        <Route exact path="/UserPersonal" element = {<UserPersonal/>}/>
                    </Routes>
                </Router>
                
            </>
        )
    }
}