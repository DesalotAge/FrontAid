import React from "react";
import './Signup.css'
import {Link} from 'react-router-dom'
const Signup = () => {
    return  (
        <div className="signup">
            <Link to="/">
                    <img src="/logo.png"/>
            </Link>
            <form className="signup__list">
                <input className="signup__input" type="text" placeholder="Имя" />
                <input className="signup__input" type="text" placeholder="Фамилия" />
                <input className="signup__input" type="e-mail" placeholder="E-mail" />
                <input className="signup__input" type="text" placeholder="ИНН" />
                <input className="signup__input" type="password" placeholder="Пароль" />
                <button className="primary-red-btn large">Зарегистрироваться</button>
                <span className="flex">Уже есть аккаунт?
                    <Link to="/login"><p>Войти</p></Link>
                </span>
            </form>
        </div>
    ) 
}

export default Signup