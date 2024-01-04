import { createContext, useContext, useEffect, useState } from "react";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

import {auth,db}  from "../Services/firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
const [user, setUser] = useState({});
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
      return () => {
        unsubscribe();
      };
    }, []);
  
    async function signUp(email, password) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        setUser(userCredential.user);
        return userCredential.user;
      } catch (error) {
        console.error("Error signing up:", error);
        throw error;
      }
    }
  
    async function logIn(email, password) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setUser(userCredential.user);
        return userCredential.user;
      } catch (error) {
        console.error("Error logging in:", error);
        throw error;
      }
    }
  
    async function logOut() {
      try {
        await signOut(auth);
        setUser(null); // Update the user state upon logout
      } catch (error) {
        console.error("Error logging out:", error);
        throw error;
      }
    }
  
    return (
      <AuthContext.Provider value={{ user, signUp, logIn, logOut }}>
        {children}
      </AuthContext.Provider>
    );
  }
export function UserAuth() {
    return useContext(AuthContext)
}