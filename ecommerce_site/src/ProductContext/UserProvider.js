import React, { createContext, useContext, useState } from 'react';
import { firebaseApp } from "../firebaseApp";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const FIREBASE_AUTH_ERRORS = {
    "auth/wrong-password": `Invalid Email/Password`,
    "auth/user-not-found": `User Not Found On Provided Email`,
    "auth/email-already-in-use": `Email Is Already Excits , So Please Login`
}

// error = { code : "auth/wrong-password" }
// message = FIREBASE_AUTH_ERRORS["auth/wrong-password"] -> Invalid Email/Password

const UserContext = createContext({
    user: null,
    error: null
})

function UserProvider({ children }) {

    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const auth = getAuth(firebaseApp);

    // doLogin(emai = "teja@gmail.com", password = "123456")
    const doLogin = (email, password) => {
        setError(null);
        signInWithEmailAndPassword(
            auth,
            email,
            password
        ).then(res => {
            console.log(":: DO LOGIN SUCCESS ::", res);
            setUser(res.user);
        }).catch(error => {
            var message = FIREBASE_AUTH_ERRORS[error.code];
            console.log(":: DO LOGIN FAILURE ::", error.code, message);
            setError(message);
        })
    }

    const doSignUp = (email, password) => {
        setError(null);
        createUserWithEmailAndPassword(
            auth,
            email,
            password
        ).then(res => {
            console.log(":: DO SignUp SUCCESS ::", res);
            setUser(res.user);
        }).catch(error => {
            var message = FIREBASE_AUTH_ERRORS[error.code];
            setError(message);
        })
    }

    const LogOut = () => {
        setUser(null);
    }

    const ClearErros = () => {
        setError(null);
    }

    return (
        <UserContext.Provider value={{
            user: user,
            error: error,
            doLogin,
            doSignUp,
            LogOut,
            ClearErros
        }}>
            {children}
        </UserContext.Provider>
    )
}

// To Use UseContext -> useContext(UserContext) -> { user , error , doLogin, doSignUp, logOut , ClearErros }
export const useUser = () => useContext(UserContext);
// useUser() ->  { user , error , doLogin, doSignUp, logOut , ClearErros }
export default UserProvider