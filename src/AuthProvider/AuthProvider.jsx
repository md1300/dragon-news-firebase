import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.init";

export const AuthContext=createContext(null)

const googleProvider=new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)


    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
 
    const LogInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth , currentUser=>{
       
              setUser(currentUser)
              setLoading(false)
            // console.log("the name of current user",currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    
 const logOut=()=>{
    return signOut(auth)
 }
   

 const   authInfo={user,createUser,login,LogInWithGoogle,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;