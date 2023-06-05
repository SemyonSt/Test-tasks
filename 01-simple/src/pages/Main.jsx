
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import useAuth from '../hooks/authHooks';
import { useSelector  } from 'react-redux';

import Login from './Login';
import Error from './Error';
import Profile from './Profile';

const Main = () => {
    // const channels = useSelector((state) => state.loginSliceReducer.adminIser);

    // const initialState = JSON.stringify(localStorage.getItem('userInfo'));

    // const PrivateRoute = ({ children }) => {
    //     const auth = useAuth();
    //     return (
    //         localStorage.getItem('userInfo') === JSON.stringify(channels) ? children : auth.logout()
    //     );
    // };


    return (
        <section>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='*' element={<Error />} />
                <Route path='/profile' 
                element={(

                        <Profile />

                )} />
            </Routes>
        </section>
    );

}

export default Main;