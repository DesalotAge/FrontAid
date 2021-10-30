import React, { useState } from "react";
import Signup from "../SignUp/Signup.js";
import './Comment.css'

const Comment = ({isAuth}) => {
    return(
        <div className="comment">
            {isAuth ? <div>
                <form className="comment__form">
                    <input type="text" placeholder="Комментарий" className="signup__input input-2" />
                    <button className="secondary-stroke-btn large" type="submit">Оставить комментарий</button>
                </form>
            </div> : <Signup />}
        </div>
    )
}

export default Comment