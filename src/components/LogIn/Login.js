import React from "react";
import './Login.css'
import { Link } from "react-router-dom";
const Login = () => {
    return  (
        <div className="signup">
            <Link to="/">
                    <img src="/logo.png"/>
            </Link>
            <form className="signup__list">
                <input className="signup__input" type="e-mail" placeholder="E-mail" />
                <input className="signup__input" type="password" placeholder="Пароль" />
                <button className="primary-red-btn large">Войти</button>
                <span className="flex">Еще нет аккаунта?
                    <Link to="/signup"><span>Зарегистрироваться</span></Link>
                </span>
            </form>
        </div>
    ) 
}

export default Login