import React, { useContext, useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContaxt } from '../providare/AuthProividare';

const Login = () => {
    const[error, setError]=useState('')
    const {sinInUser}= useContext(AuthContaxt)

    const hendalLoging = (event)=>{
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        setError('')
        sinInUser(email,password)
        .then(resuit =>{
            const logUser= resuit.user;
            console.log(logUser);
            from.reset();
        })
        .catch(error=>{
            setError(error.message)
        })
    }

    return (
        <div className='loging-continar'>
            <h2 className='login-title'>Login</h2>
            <form onSubmit={hendalLoging} className='login-from'>
                <label htmlFor="">Email</label>
                <input type="email" name="email"  />
                <label htmlFor="">Password</label>
                <input type="password" name="password"  />
                <button className='login-btn'>Login</button>
            </form>
            <p>New to Ema-john?<Link to='/sign-up'> Create New Account</Link> </p>
            <p>{error}</p>
        </div>
    );
};

export default Login;