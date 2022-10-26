import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'; 
import app from "../firebase/firebase.config";

export const AuthContext = createContext(); 

const auth = getAuth(app); 

const UserContext = ({children}) => {
    const [user, setUser] = useState(null); 
    const googleProvider = new GoogleAuthProvider(); 
    const githubProvider = new GithubAuthProvider(); 

    const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider); 
    }

    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        return signOut(auth); 
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser); 
        });
        return () => unSubscribe(); 
    }, [])

    const authInfo = {
		user,
		createUser,
		logIn,
		logOut,
		signInWithGoogle,
		signInWithGithub,
	};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;