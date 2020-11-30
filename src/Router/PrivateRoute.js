import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem("jwt-token") ? true : false;
    return (
        <Route
            render={({ location }) => {
                if (isAuthenticated) {
                    return children;
                } else {
                    return <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                }
            }
            }
        />
    );
};
export default PrivateRoute;
