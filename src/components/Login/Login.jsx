import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContaxt } from '../providare/AuthProividare';

const Login = () => {
    const[error, setError]=useState('')
    const [show, setShow]= useState(false);
    const {sinInUser}= useContext(AuthContaxt);
    const navigate = useNavigate();
    const location= useLocation();
    
    const from = location.state?.from?.pathname || '/';

    const hendalLoging = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('')
        sinInUser(email,password)
        .then(resuit =>{
            const logUser= resuit.user;
            console.log(logUser);
            form.reset();
            navigate(from)
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
                <input type={show ? 'text' : "password"} name="password"  />
                <p onClick={()=>setShow(!show)}>
                    {
                        show ? <span>Hide</span>: <span>Show</span>
                    }

                </p>
                <button className='login-btn'>Login</button>
            </form>
            <p>New to Ema-john?<Link to='/sign-up'> Create New Account</Link> </p>
            <p>{error}</p>
        </div>
    );
};

export default Login;