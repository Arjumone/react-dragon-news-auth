import { useState } from "react";
import { createContext } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import app from "../firebase/firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    const createUser= (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn  = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
     const unSubscribe =   onAuthStateChanged(auth,currentUser=>{
            console.log("user in the state changed",currentUser);
            setUser (currentUser)
            setLoading(false)
        })
        return unSubscribe();
    },[])
    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        logout,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;