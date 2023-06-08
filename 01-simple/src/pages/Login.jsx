import React, { useState } from 'react';
import { useFormik } from 'formik';
import useAuth from '../hooks/authHooks';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import * as yup from 'yup';

const Login = () => {
    const auth = useAuth()
    const [showHelp, setShowHelp] = useState(true)
    const [valid, setValid] = useState('')

    const user = useSelector((state) => state.loginSliceReducer.adminIser);

    const schema = yup.object().shape({
        firstName: yup
            .string()
            .min(3, 'От 3 до 20 символов')
            .required(''),
        password: yup

            .string()
            .min(3, 'От 3 до 20 символов')
            .required(''),
    })

    //Не отображается не валидность формы по щелчку на кнопку отправить.
    //Не рендерится страница если перейти сразу в профиль



    const formik = useFormik({
        initialValues: {
            firstName: '',
            password: '',
        },
        validationSchema: schema,
        validateOnChange: false,
        onSubmit: values => {

            if (JSON.stringify(values) !== JSON.stringify(user)) {
                setValid('Пользователя не существует');
                // formik.errors.firstName = 'Пользователя не существует'
            }
            else {
                auth.login(JSON.stringify({
                    firstName: values.firstName,
                    password: values.password
                }))
            }
        },
    });
    const errClass = cn('form-box', {
        'form-box-invalid': (formik.errors.password) || (formik.errors.username) || valid,
    });


    console.log(formik.errors.firstName, formik.errors.password)
    return (

        <div className={errClass}>
            <div className='form-value'>
                <form onSubmit={formik.handleSubmit}>
                    <h2>Login</h2>
                    <div className='inputbox'>
                        <ion-icon name="person-circle-outline"></ion-icon>
                        <input required
                            id="firstName"
                            name="firstName"
                            type="name"
                            onChange={(event) => {
                                formik.handleChange(event)
                                setValid('');
                            }}
                            value={formik.values.firstName}
                            onBlur={formik.handleBlur}
                        />
                        <label
                            htmlFor="firstName"
                            className={formik.errors.firstName && formik.touched.firstName ? 'invalid-form' : 'form-control'}
                        >
                            Login
                        </label>

                    </div>
                    <div className='inputbox'>
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input required
                            id="password"
                            name="password"
                            type="password"
                            onChange={(event) => {
                                formik.handleChange(event)
                                setValid('');
                            }}
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                        />
                        <label
                            htmlFor="password"
                            className={formik.errors.password && formik.touched.password ? 'invalid-form' : 'form-control'}
                        >
                            Password
                        </label>
                    </div>
                    <div className="invalid-tooltip">{valid || formik.errors.firstName || formik.errors.password}</div>
                    <button
                        disabled={formik.errors.firstName || formik.errors.password || valid}
                        className='btn'
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
                <h3 className='help' onClick={() => setShowHelp(!showHelp)} type="btn">{showHelp ? 'Help' : 'login – developer21, password – 123456'}</h3>
            </div>
        </div>

    );

}

export default Login;