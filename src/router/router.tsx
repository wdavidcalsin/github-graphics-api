import * as React from 'react';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';
import Home from '../page/home';
import SignIn from '../page/signIngGithub';

const RouterIndex = () => {
    return (
        <Router>
            <Switch>
                <Redirect exact from="/" to="/signin" />
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/signin">
                    <SignIn />
                </Route>
            </Switch>
        </Router>
    );
};

export default RouterIndex;
