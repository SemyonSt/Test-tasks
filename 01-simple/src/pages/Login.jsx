import React, { useState } from 'react';
import { useFormik } from 'formik';
import useAuth from '../hooks/authHooks';
import { useSelector  } from 'react-redux';

const Login = () => {
    const auth = useAuth()
    const [showHelp, setShowHelp] = useState(true)

    const channels = useSelector((state) => state.loginSliceReducer.adminIser);


    const formik = useFormik({
        initialValues: {
            firstName: '',
            password: '',
        },
        onSubmit: values => {

            if(JSON.stringify(values) === JSON.stringify(channels) ) {
                auth.login(JSON.stringify({
                    firstName: values.firstName,
                    password: values.password
                }))
            }
        },
    });
    return (

        <div className='form-box'>
            <div className='form-value'>
                <form onSubmit={formik.handleSubmit}>
                    <h2>Login</h2>
                    <div className='inputbox'>
                        <ion-icon name="person-circle-outline"></ion-icon>
                        <input required
                            id="firstName"
                            name="firstName"
                            type="name"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className='inputbox'>
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input required
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        <label htmlFor="password">Last Name</label>
                    </div>

                    <button className='btn' type="submit">Submit</button>
                </form>
                <h3 className='help' onClick={() =>setShowHelp(!showHelp)} type="btn">{showHelp ? 'Help' : ' login – developer21, password – 123456'}</h3>
            </div>
        </div>

    );

}

export default Login;