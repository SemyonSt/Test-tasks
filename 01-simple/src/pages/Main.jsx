
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import useAuth from '../hooks/authHooks';

import Login from './Login';
import Error from './Error';
import Profile from './Profile';

const Main = () => {

    const PrivateRoute = ({ children }) => {
        const auth = useAuth();
        
        return (
            auth.logedIn ? children : auth.logout()
        );
    };


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