import React from 'react';

import { Route, Switch } from 'react-router-dom';

import LandingPage from './landingpage';
import Login from './login';
import LogOut from './logout';
import Register from './register';

const Main = () => (

    <Switch>
        <Route path="/" Component={LandingPage} />
        <Route path="/login" Component={Login} />
        <Route path="/logout" Component={LogOut} />
        <Route path="/register" Component={Register} />
        
    </Switch>
)

export default Main;