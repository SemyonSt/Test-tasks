
import React from 'react';
import { useFormik } from 'formik';

const Main = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <section>
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
                                id="lastName"
                                name="lastName"
                                type="password"
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                            />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                        <button className='btn' type="submit">Submit</button>
                    </form>
                    <h3 className='help' type="btn">Help</h3>
                </div>
            </div>
        </section>
    );

}

export default Main;