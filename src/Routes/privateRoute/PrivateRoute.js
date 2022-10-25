import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    let location = useLocation();

    if (loading) {
        // return <Spinner animation="border" />
        return (<>
            <div>Loading...</div>
        </>)
    }
    if (!user) {
        // return <Navigate to='/login'></Navigate>
        return <Navigate to='/login' state={{ from: location }}></Navigate>
    }
    return children;

};

export default PrivateRoute;