import React, { useContext } from 'react';
import { AuthContaxt } from '../providare/AuthProividare';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loding}= useContext(AuthContaxt);
    const location= useLocation();
    console.log(location)

    if (loding) {
        return <p>loding......</p>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{from: location}}></Navigate>
};

export default PrivateRoute;