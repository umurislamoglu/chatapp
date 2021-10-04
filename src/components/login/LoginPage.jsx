import React from 'react'
import { GoogleAuthProvider , signInWithPopup  } from "firebase/auth";
import {auth} from "../../firebase/firebaseConfig"
const LoginPage = () => {


const signInWithGoogle = () => {

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth , provider);
}

    return (
        <div className="loginContainer">
            <button onClick={signInWithGoogle} className = "loginButton">Login with Google <i className="bi bi-door-open-fill"></i></button>
        </div>
    )
}

export default LoginPage
