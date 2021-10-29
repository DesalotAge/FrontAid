import React from 'react'
import {Switch, Route, Redirect} from "react-router-dom"
import { MainPage } from './MainPage'
import Comment from './components/Comment'
import Login from './components/LogIn'
import Signup from './components/SignUp/Signup'

export const useRoutes = () => {
    return(
        <Switch>
            <Route exact path="/">
                <MainPage/>
            </Route>
            <Route path="/comment">
                <Comment />    
            </Route> 
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/signup">
                <Signup />
            </Route>
        </Switch>
    )
}