import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Context from '../context';

const ProtectedRoute = ({ children }) => {
    const { userName } = useContext(Context);


    if (userName) {
        return children;
    }

    return <Navigate to="/" replace />;
};

export default ProtectedRoute;

