import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useAuth from '../hooks/authHooks';


const Profile = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const user = useSelector((state) => state.loginSliceReducer.adminIser);
   
    useEffect(() => {
        if (!auth.logedIn) {
          navigate('/');
        }
      }, [auth.logedIn, navigate]);
    return (
        <div>
            <h1> {`Hello! ${user.firstName}`}</h1>
            <button className='btn' onClick={() => auth.logout()}>Click me</button>
        </div>
    )
}

export default Profile;