import React, { useState } from "react";
import Signup from "../SignUp/Signup.js";
import './Comment.js'

const Comment = ({isAuth, signupPopup, setSignupPopup}) => {
    // const [signupPopup, setSignupPopup] = useState(false)
    return(
        <div className="comment">
            {isAuth ? <div>
                <form>
                    <input type="text" placeholder="Комментарий" />
                    <button className="secondary-stroke-btn large" type="submit">Оставить комментарий</button>
                </form>
            </div> : <Signup signupPopup={signupPopup} setSignupPopup={setSignupPopup} />}
        </div>
    )
}

export default Comment