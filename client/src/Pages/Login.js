import React, { Component } from 'react';
import  { useContext, useState } from 'react';
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import LoginForm from '../Components/loginForm';



export default class Login extends Component {


    render() {
        return (
            <LoginForm/>
        )
    }
}


