import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <div className="text-center loading-spinner"><Spinner animation="border" variant="danger" /></div>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children 
                ) : (
                    <Redirect
                        to={{
                            pathname: "/register",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;