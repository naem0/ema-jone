import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContaxt } from '../providare/AuthProividare';

const SignUp = () => {
    const[error, setError]=useState('')
    const{creatUser}=useContext(AuthContaxt)

    const hendalSignUp = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = from.email.value;
        const password = form.password.value;
        const confarm = form.confarm.value;
        console.log(email, password, 'amar sonar bangla')
        setError('');
        if (password !==confarm) {
            setError('your password not be mass');
            return;
        }
        creatUser(email,password)
        .then(resuit =>{
            const logUser= resuit.user;
            console.log(logUser);
            form.reset();
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    return (
        <div className='loging-continar'>
            <h2 className='login-title'>Sign-up</h2>
            <form onSubmit={hendalSignUp} className='login-from'>
                <label htmlFor="">Email</label>
                <input type="email" name="email"  />
                <label htmlFor="">Password</label>
                <input type="password" name="password"  />
                <label htmlFor="">Password</label>
                <input type="password" name="confarm"  />
                <button className='login-btn'>sign-up</button>
            </form>
            <p>Already have an account?<Link to='/Login'>Login</Link> </p>
            <p>{error}</p>
        </div>
    );
};

export default SignUp;