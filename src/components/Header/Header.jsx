import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContaxt } from '../providare/AuthProividare';



const Header = () => {
    const {user, logOut}= useContext(AuthContaxt);

    const hendalLogout =()=>{
        logOut()
        .then(resuit =>{
            const logUser= resuit?.user;
            console.log(logUser);
        })
        .catch(error=>{
            console.error(error);
        })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/sign-up">Sign Up</Link>
                {
                    user &&
                    <span><span className='user-email'>{user.email}</span> <button onClick={hendalLogout}>Sign Out</button></span>
                }
            </div>
        </nav>
    );
};

export default Header;