import React, { useContext, useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { fire } from "../utils/Firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const navigate = useNavigate();

  function signup(email, password) {
    const auth = getAuth(fire);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setCurrentUser(user);
        console.log("utilisateur connecté");
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  useEffect(() => {
    const auth = getAuth(fire);
    signOut(auth);
    // const auth = getAuth(fire).onAuthStateChanged((user) => {
    //   if (user) {
    //     setCurrentUser(user);
    //     navigate("/Home");
    //   } else {
    //     console.log("pas de user");
    //   }
    // });
    // return auth;
  }, []);

  const value = {
    currentUser,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
