import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/authHooks';


const Profile = () => {
    const auth = useAuth();
    const navigate = useNavigate();
   
    useEffect(() => {
      console.log(auth.loggedIn)
        if (auth.loggedIn) {
          navigate('/');
        }
      }, [auth.loggedIn, navigate]);
    return (
        <div>
            <h1>Hello!</h1>
            <button onClick={() => auth.logout()}>Click me</button>
        </div>
    )
}

export default Profile;