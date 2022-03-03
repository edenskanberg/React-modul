import React from 'react'
import useForm from './UseForm'
import validateInfo from './validateInfo'; './FormSignup';

const FormSignup = () => {
    const { handleChange, values, handleSubmit } = useForm (validate);

  return (
    <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit}>
            <h1>Create your account</h1>
            <div className="form-imputs">
                <label htmlFor="username" 
                className="form-label">
                 Username   
                </label>
                <input
                    id='username' 
                    type='text' 
                    name='username' 
                    className='form-input'
                    placeholder='Enter your username'
                    value={values.username}
                    onChange={handleChange}
                    />
            </div>
            <div className="form-imputs">
                <label htmlFor="email" 
                className="form-label">
                   Email
                </label>
                <input 
                    id='email'
                    type='email' 
                    name='email' 
                    className='form-input'
                    placeholder='Enter your email'
                    value={values.email}
                    onChange={handleChange}
                    />
            </div>
            <div className="form-imputs">
                <label htmlFor="Password" 
                className="form-label">
                   Password
                </label>
                <input 
                    id='password'
                    type='password' 
                    name='password' 
                    className='form-input'
                    placeholder='Enter your password'
                    value={values.password}
                    onChange={handleChange}
                    />
            </div>
            <div className="form-imputs">
                <label htmlFor="Password2" 
                className="form-label">
                   Confirm Password
                </label>
                <input 
                    id='password2'
                    type='password' 
                    name='password2' 
                    className='form-input'
                    placeholder='Enter your password2'
                    value={values.password2}
                    onChange={handleChange}
                    />
            </div>
            <button className="form-input-btm" type="submit">Sign up</button>
            <span className="form-input-login">
                Already have an account? Login <a href="#">here</a>
            </span>
        </form>
    </div>
  );
};

export default FormSignup