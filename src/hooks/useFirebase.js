// import React from 'react';
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();
const auth = getAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setError('')
            })
            .finally(() => setIsLoading(false))
        // .catch(error => setError(error.message))
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
    }, [])


    const logout = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }

    const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
            })
    }

    const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user)
                // ...
            })
    }


    return {
        isLoading,
        handleUserRegister,
        handleUserLogin,
        signInUsingGoogle,
        user,
        error,
        logout,
    }
};

export default useFirebase;