import React, { useContext, useState, useEffect } from 'react';
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import store from '../store/UserStore';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { store } = useContext(Context);
    
    return (
        <div>
            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Email'
            />
            <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Пароль'
            />
            <button onClick={() => store.login(email, password)}>
                Логин
            </button>
            <button onClick={() => store.registration(email, password)}>
                Регистрация
            </button>
            <button onClick={() => store.logout()}>
                Выйти
            </button>
            <p>{store.isAuth ? <Link to="/UserPersonal"><button>Личный кабинет</button></Link> : "Пользователь не авторизован"}</p>
        </div>
    );
};

export default observer(LoginForm);