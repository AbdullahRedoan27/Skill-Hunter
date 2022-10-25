import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';

export const AuthContext = createContext();


const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

const UserContext = ({children}) => {

    const [user, setUser] = useState({});
    
    
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const login = (email, password) =>{
       return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogin =()=>{
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = (auth) =>{
        return signOut(auth);
    }

    const authInfo = {auth, login, createUser, user, setUser, logOut, googleLogin, githubLogin}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;