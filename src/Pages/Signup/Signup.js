import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import google from "../images/google.png"
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Helmeted from '../../Helmet/Helmet';



const Signup = () => {
    const navigate = useNavigate()
    const [showpass, setpass] = useState(false)
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [userInfo, setUserInfo] = useState({ email: '', password: '', confirmpass: '' })
    const [error, setError] = useState({ email: '', password: '' })
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        HookError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const forEmail = (event) => {
        const invalidEmail = event.target.value;
        if (/\S+@\S+\.\S+/.test(invalidEmail)) {
            setUserInfo({ ...userInfo, email: invalidEmail })
            setError({ ...error, email: '' })
        } else {
            setError({ ...error, email: "This email is not valid" })
            setUserInfo({ ...userInfo, email: '' })
            return
        }
    }

    const forPassword = (event) => {
        if (/.{7,}/.test(event.target.value)) {
            setUserInfo({ ...userInfo, password: event.target.value })
            setError({ ...error, password: '' })
        }
        else {
            setError({ ...error, password: "Minimum 7 characters" })
            setUserInfo({ ...userInfo, password: '' })
            return
        }
    }

    const forConfirmPassword = (event) => {
        if (userInfo.password === event.target.value) {
            setUserInfo({ ...userInfo, confirmpass: event.target.value })
            setError({ ...error, confirmpass: '' })
        }
        else {
            setError({ ...error, confirmpass: "Password didn't matched" })
            setUserInfo({ ...userInfo, confirmpass: '' })
            return
        }
    }

    if(user || googleUser){
        navigate("/")
    }

    const handleEmail = async (event) => {
        console.log(error.email, error.password);
        event.preventDefault()
        if (error.email || error.password || userInfo.email === "" || userInfo.password === "" || userInfo.confirmpass === "") {
            toast("Something went wrong")
            return
        }
        
        else {
            const email = event.target.email.value
            const password = event.target.password.value
            const confirmPass = event.target.confirmPassword.value
            
            await createUserWithEmailAndPassword(email, password)
            toast('Account Successfully Created');
            await updateProfile({ displayName: userInfo.name });
            console.log(email, password, confirmPass);
            navigate("/")
            
        }
    }


    return (
        <div className="login-container animate__animated wow animate__zoomIn">
            <Helmeted title={"SignUp"}></Helmeted>
            <div className="login-title">SIGNUP</div>
            <form onSubmit={handleEmail} className="login-form">
                <input type="email" name='email' placeholder="Your Email" onChange={forEmail} />
                {error.email && <p className='error-message'>{error.email}</p>}
                <div className="inputPass">
                    <input className='inputPass' type={showpass ? "text" : "password"} name='password' placeholder="password" onChange={forPassword} />
                    <p onClick={() => setpass(!showpass)}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 key" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                    </svg></p>
                </div>
                {error.password && <p className='error-message'>{error.password}</p>}
                <input type={showpass ? "text" : "password"} name='confirmPassword' placeholder="confirmPassword" onChange={forConfirmPassword} />
                {error.confirmpass && <p className='error-message'>{error.confirmpass}</p>}
                <button>SignUp</button>
                <p>Already Have Account? <Link to="/login">Login</Link> </p>
            </form>
            <div className="or">
                <div className="right"></div>
                <div className="middle">or</div>
                <div className="left"></div>
            </div>

            <button onClick={() => signInWithGoogle()}>
                <div className="googleSection">
                <div className="image">
                    <img className='google' src={google} alt="" />
                </div>
                <div className="title">
                    Google
                </div>
                </div>
            </button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Signup;