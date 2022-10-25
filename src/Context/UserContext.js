import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';

export const AuthContext = createContext();


const auth = getAuth(app);

const UserContext = ({children}) => {

    const [user, setUser] = useState({});
    
    const login = (email, password) =>{
       return signInWithEmailAndPassword(auth, email, password)
    }

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = (auth) =>{
        return signOut(auth);
    }

    const authInfo = {auth, login, createUser, user, setUser, logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;