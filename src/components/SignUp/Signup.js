import React from "react";
import './Signup.css'

const Signup = ({signupPopup, setSignupPopup}) => {
    return (signupPopup) ? (
        <div className="signup">
            <form className="signup__list">
                <input className="signup__input" type="text" placeholder="Имя" />
                <input className="signup__input" type="text" placeholder="Фамилия" />
                <input className="signup__input" type="e-mail" placeholder="E-mail" />
                <input className="signup__input" type="text" placeholder="ИНН" />
                <input className="signup__input" type="password" placeholder="Пароль" />
                <button className="primary-red-btn large">Зарегистрироваться</button>
            </form>
        </div>
    ) : null
}

export default Signup