import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';

export const AuthContext = createContext();


const auth = getAuth(app);

const UserContext = ({children}) => {

    const [user, setUser] = useState(null);
    
    
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const login = (email, password) =>{
       return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = (googleProvider) =>{
        return signInWithPopup(auth);
    }

    const githubLogin =(githubProvider)=>{
        return signInWithPopup(auth)
    }

    const logOut = (auth) =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser)
            setUser(currentUser);
        })
        return () => unSubscribe();
    },[])

    const authInfo = {auth, login, createUser, user, logOut, googleLogin, githubLogin}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;