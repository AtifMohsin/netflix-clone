import { createContext, useContext, useEffect, useState } from "react";
import {auth , db} from "../Services/firebase";
import {doc , setDoc} from "firebase/firestore"


import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";



const AuthContext = createContext();

export const AuthContextProvider= ({ children })=> {

    const [user, setUser] = useState();


    useEffect(()=>{

        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{

            
            setUser(currentUser)
        })

        return () => {
            unsubscribe()
        }

    },[])


    const createUser = async (email,password) =>{
        await createUserWithEmailAndPassword(auth,email,password)
        setDoc(doc(db, "users" , email), {
            moviesToWatch:[],
        });

    }

    const logOut = () => {
        return signOut(auth)
    }

    const logIn = (email,password) => {
      return signInWithEmailAndPassword(auth,email,password)
    }



  
    return (
      <AuthContext.Provider value={{createUser,user, logOut,logIn }}>
        {children}
      </AuthContext.Provider>
    );
  }
export function UserAuth() {
    return useContext(AuthContext)
}