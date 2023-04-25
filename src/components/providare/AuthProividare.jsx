import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Cart/fairebase/firebase.config';


export const AuthContaxt = createContext(null);

const auth = getAuth(app);

const AuthProividare = ({children}) => {
    const[user, setUser]= useState(null);
    const [loding, setLoding]=useState(true);

    const creatUser=(email, password)=>{
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const sinInUser=(email, password)=>{
       setLoding(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut= ()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(creatUser)=>{
            setUser(creatUser);
            setLoding(false)
        });
        return()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loding,
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