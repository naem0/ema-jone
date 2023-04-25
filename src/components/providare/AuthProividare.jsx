import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Cart/fairebase/firebase.config';


export const AuthContaxt = createContext(null);

const auth = getAuth(app);

const AuthProividare = ({children}) => {
    const[user, setUser]= useState(null);

    const creatUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const sinInUser=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut= ()=>{
        return signOut(auth);
    }
    const authInfo = {
        user,
        creatUser,
        sinInUser,
        logOut,
    }

    return (
        <AuthContaxt.Provider value={authInfo}>
            {children}
        </AuthContaxt.Provider>
    );
};

export default AuthProividare;