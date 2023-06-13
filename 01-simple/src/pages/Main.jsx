
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import useAuth from '../hooks/authHooks';

import Login from './Login';
import Error from './Error';
import Profile from './Profile';


const PrivateRoute = ({ children }) => {
    const auth = useAuth();

    console.log(auth.logedIn)
    
    return (
        auth.login ? children  : auth.logout
    );
};
const Main = () => {
    const auth = useAuth();
    console.log(auth.logedIn)
    return (
        <section>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='*' element={<Error />} />
                <Route path='/profile'
                    element={(
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    )} />
            </Routes>
        </section>
    );

}

export default Main;