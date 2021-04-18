import React from 'react' 
import {Route, Switch } from 'react-router-dom'
import Home from '../Home/Home'
import UserProfile from '../UserProfile/UserProfile'


const AppRouter = () => {

    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/userProfile' component={UserProfile} />
        </Switch>
    )




}

export default AppRouter;