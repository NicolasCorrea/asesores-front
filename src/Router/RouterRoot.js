import React from "react";

// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

// Layouts
import Login from "../Layout/Login/Login";
import Admin from "../Layout/Admin/Admin";



const RouterRoot = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <PrivateRoute path="/">
                        <Admin />
                    </PrivateRoute>
                </Switch>
            </Router>
        </>
    );
};

export default RouterRoot;
